import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function Login() {
    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    
    const login = () => {
        axios.post('http://localhost:3008/login', {
            username: inputId,
            password: inputPw,
        }).then((response)=>{
            console.log(response);
        });
    };

    return(
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' onChange={(e)=>{setInputId(e.target.value);}} />
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' onChange={(e)=>{setInputPw(e.target.value);}} />
            </div>
            <div>
                <button type='button' onClick={login}>Login</button>
            </div>
            <div>
                <Link to="/signup">
                    <button type='button'>Sign Up</button>
                </Link>
            </div>
        </div>
    )


}

export default Login;