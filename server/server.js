const express = require('express');
const mysql = require('mysql');
const nodemailer = require('nodemailer'); 
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const db = mysql.createConnection({
    user: 'root',
    port: '3306',
    host: 'localhost',
    password: 'password',
    database: 'myDb',
    dateStrings:'date'
});

app.post('/register', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const position = req.body.position;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if(err){
            console.log(err);
        }

        db.query(`INSERT INTO user_info (email, password, name, position) VALUES (?,?,?,?)`,
        [email, hash, name, position],
        (err, result) => {
            if(err){
                console.log(err);
                res.send({message: "Wrong register!"});
            }
            console.log(result);
        });
    });
});

app.post('/sendEmail', async function (req, res) {


    const user_email = req.body.email;    //받아온거

    console.log(user_email);

    let number = Math.floor(Math.random() * 1000000)+100000; // ★★난수 발생 ★★★★★
    if(number>1000000){                                      // ★★
       number = number - 100000;                             // ★★
    }

    console.log(number);

    // 메일발송 함수

    let transporter = nodemailer.createTransport({
        service: 'gmail'
        , prot: 587
        , host: 'smtp.gmlail.com'
        , secure: false
        , requireTLS: true
        , auth: {
            user: 'leun3598@gmail.com'
            , pass: 'ahfzoa3!'
        }
    });

    let info = await transporter.sendMail({
        from: 'leun3598@gmail.com',
        to: user_email,         //받아온 이메일 에게
        subject: '인증번호입니다!',
        text: String( number ),        //이 부분은 string값만 보낼수 있다길래
      });                              // 강제로 변경 해줬따


      let checkemail = await new Object();
        checkemail.number = number;        // checkemail 객체를 따로 만들고

     await res.send(checkemail);           // 클라이언트에게 보내기


})

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log(email)

    db.query(`SELECT * FROM user_info WHERE email = ?`, email, (err, result) => {
        if(err) console.log(err);
        //console.log(result);

        if(result.length > 0){
            bcrypt.compare(password, result[0].password, (error, response) => {
                if(response){
                    res.send(result);
                } else {
                    res.send({message: "Wrong password!"});
                }
            });
        } else {
            //console.log("User doesn't exist!")
            res.send({message: "User doesn't exist!"});
        }
    });
});

app.get('/getNotice', (req, res) => {
    db.query('SELECT * FROM notice', (err, result) => {
        if(err) console.log(err);
        //console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
    });
});

app.post('/getNoticeOne', (req, res) => {
    db.query('SELECT * FROM notice WHERE no = ?', req.body.no, (err, result) => {
        if(err) console.log(err);
        //console.log(result[0].title);        
        //res.send(result);
        db.query(`UPDATE notice SET hit = ? WHERE date = ?`,
            [result[0].hit + 1, result[0].date],
            (err1, result1) => {
                if(err1){
                    console.log(err1);
                }
                res.send(result);
            })
            //Update user_info SET password = ? WHERE email = ?`
    });
});

app.post('/sendNotice', (req, res) => {
    //console.log(req.body);
    db.query(`INSERT INTO notice (title, date, content, hit, name) VALUES (?,?,?,?,?)`,
        [req.body.title, req.body.date, req.body.content, req.body.hit, req.body.name],
        (err, result) => {
            if(err){
                console.log(err);
            }
            res.send(result);
        });
});

app.post('/registerFind', (req, res) => {
    db.query(`SELECT * FROM user_info WHERE email = ?`, req.body.email, (err, result) => {
        if(err) console.log(err);
        if(result.length == 0) res.send({message: "this email is not registered! sign up for madcamp!"})
    })
})

app.post('/registerUpdate', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if(err){
            console.log(err);
        }

        db.query(`Update user_info SET password = ? WHERE email = ?`,
        [hash, email],
        (err, result) => {
            if(err){
                console.log(err);
                res.send({message: "Wrong register!"});
            }
            //console.log(result);
        });
    });
});

app.listen(3008, () => console.log('Node.js Server is running on port 3008...'));