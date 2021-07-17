const express = require('express');
const mysql = require('mysql');

const app = express();

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