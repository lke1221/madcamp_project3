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
            user: 'lke001221@gmail.com'
            , pass: 'coavldjs10129!'
        }
    });

    let info = await transporter.sendMail({
        from: 'lke001221@gmail.com',
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
    database: 'login'
});

//db.connect();

app.post('/login', (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;

    // console.log("username:" + username);
    // console.log("password:" + password);

    db.query("INSERT INTO user_info (id, password) VALUES (?,?)", 
    [username, password], 
    (err, result)=>{
        console.log(err);
    });
});

app.listen(3008, () => console.log('Node.js Server is running on port 3008...'));

//db.end();