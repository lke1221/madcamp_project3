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
        if(err) console.log(err);
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