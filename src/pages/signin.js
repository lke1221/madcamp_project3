import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function SignIn() {
    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
    }

    // 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        axios.get('/user_inform/login')
        .then(res => console.log(res))
        .catch()
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])

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
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} style={{height:"40px",
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
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} style={{height:"40px",
                  width: "400px",
                  fontSize: 18,
                  marginBottom: 40}}/>
            </div>
            <div>
                <button type='button' onClick={onClickLogin} style={{height:"40px", 
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

// const SignIn = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '90vh'
//       }}
//     >
//       <h1>Sign In</h1>
//     </div>
//   );
// };

export default SignIn;