import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function Login({history}) {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPw, setInputPw] = useState('');
    var user_name='';
    var user_email='';
    var user_position='';
    const [message, setMessage] = useState('');
    
    const login = () => {
      /*window.sessionStorage.setItem('email', 'koreacomputer19@korea.ac.kr');
      window.sessionStorage.setItem('name', '이권은');
      window.sessionStorage.setItem('position', 'admin');
      document.location.href="/";*/
        axios.post('http://172.10.18.166:80/login', {
            email: inputEmail,
            password: inputPw,
        }).then((response)=>{
            if(response.data.message) {
                setMessage(response.data.message);
            } else {
                user_name = response.data[0].name;
                user_email = response.data[0].email;
                user_position = response.data[0].position;

                window.sessionStorage.setItem('email', user_email);
                window.sessionStorage.setItem('name', user_name);
                window.sessionStorage.setItem('position', user_position);
                document.location.href="/";
                //onLogin();
            }
        });
    };

    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
            //height: '90vh'
          }}>
            <div>
                <h2 style={{marginBottom: 50,
                marginTop: 80,
                paddingVertical: 8,
                borderWidth: 4,
                borderColor: "#20232a",
                borderRadius: 6,
                //backgroundColor: "#61dafb",
                color: "#20232a",
                textAlign: "center",
                fontSize: 30,
                fontWeight: "bold"}}>Login</h2>
            </div>
            <div>
                <label htmlFor='input_id' style={{
                marginBottom: 20,
                paddingVertical: 8,
                color: "#20232a",
                fontSize: 20,
                fontWeight: "bold"}}>ID : </label>
                <input type='text' name='input_id' onChange={(e)=>{setInputEmail(e.target.value);}} style={{height:"40px",
                  width: "400px",
                  fontSize: 18,
                  marginBottom: 40}}/>
            </div>
            <div>
                <label htmlFor='input_pw' style={{
                marginBottom: 20,
                paddingVertical: 8,
                color: "#20232a",
                fontSize: 20,
                fontWeight: "bold"}}>PW : </label>
                <input type='password' name='input_pw' onChange={(e)=>{setInputPw(e.target.value);}} style={{height:"40px",
                  width: "400px",
                  fontSize: 18,
                  marginBottom: 40}}/>
            </div>
            <div>
              {message.length > 0 && (
                <span className="errorMessage">{message}</span>
              )}
            </div>
            <div>
                <button type='button' onClick={login} style={{height:"40px", 
                                                                width:"180px",
                                                                marginTop: 20,
                                                                marginBottom:20,
                                                                fontSize: 20,
                                                                backgroundColor: "black",
                                                                color: "white",
                                                                borderRadius: 5}}>Login</button>
            </div>
            <div style={{//height:"40px", 
                  marginTop: 15,
                  marginBottom: 15,
                  color: "blue"}}>
              <Link to="/signup">
                <small style={{fontSize: 18, textDecorationLine: 'underline'}}>New to madcamp? Sign Up</small>
              </Link>
            </div>
            <div style={{//height:"40px", 
                  marginTop: 10,
                  marginBottom: 30,
                  color: "blue"}}>
              <Link to="/changepassword">
                <small style={{fontSize: 18, textDecorationLine: 'underline'}}>Can't remember your password? Change Password</small>
              </Link>
            </div>
        </div>
    
    )


}

export default Login;