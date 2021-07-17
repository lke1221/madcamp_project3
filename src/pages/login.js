import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function Login() {
    const [inputEmail, setInputEmail] = useState('')
    const [inputPw, setInputPw] = useState('')
    
    const login = () => {
        axios.post('http://localhost:3008/login', {
            email: inputEmail,
            password: inputPw,
        }).then((response)=>{
            console.log(response);
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
                <button type='button' onClick={login} style={{height:"40px", 
                                                                width:"180px",
                                                                marginTop: 20,
                                                                marginBottom:20,
                                                                fontSize: 20,
                                                                backgroundColor: "green",
                                                                color: "white"}}>Login</button>
            </div>
            <div style={{//height:"40px", 
                  marginTop: 15,
                  marginBottom: 30,
                  color: "blue"}}>
              <Link to="/signup">
                <small style={{fontSize: 18, textDecorationLine: 'underline'}}>New to madcamp? Sign Up</small>
              </Link>
            </div>
        </div>
    
    )


}

export default Login;