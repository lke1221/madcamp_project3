const express = require('express');
const mysql = require('mysql');
const nodemailer = require('nodemailer'); 
const cors = require('cors');

const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

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
            , pass: ''
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
    database: 'myDb'
});

app.post('/register', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const position = req.body.position;

    console.log(email + " / " + password + " / " + name + " / " + position);

    db.query(`INSERT INTO user_info (email, password, name, position) VALUES (?,?,?,?)`,
    [email, password, name, position],
    (err, result) => {
        if(err) {console.log(err); res.send({message: "Wrong register!"});}
        console.log(result);
    });
})

app.post('/login', (req, res) => {
    const email = req.body.email;

    console.log(email)

    db.query(`SELECT * FROM user_info WHERE email = ?`, email, (err, result) => {
        if(err) console.log(err);
        //console.log(result);

        if(result.length > 0){
            if(result[0].password == req.body.password){
                //console.log(result);
                res.send(result);
            }
            else{
                //console.log("Wrong password!")
                res.send({message: "Wrong password!"});
            }
        } else {
            //console.log("User doesn't exist!")
            res.send({message: "User doesn't exist!"});
        }
    });
});

app.listen(3008, () => console.log('Node.js Server is running on port 3008...'));