import React, {Component} from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.ac.kr$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  Object.values(formErrors).forEach(val => {
    val.length>0 && (valid=false)
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      usingemail: false,
      number: "",
      inputnumber: "",
      password: null,
      reenter_password: null,
      formErrors: {
        email: "",
        password: "",
        reenter_password: "",
        inputnumber: ""
      }
    };
  }

  sendEmail = e => {
    e.preventDefault();

    //check if email exist in DB
    axios.post('http://localhost:3008/registerFind', {
      email: this.state.email,
    }).then((response)=>{
      console.log(response.data.message);
      this.state.formErrors.email = response.data.message.length > 0 ?  response.data.message : "";
      //return;
    });
    //this.state.formErrors = '';

    console.log(this.state.email);
    const data = {
        email: this.state.email           //입력한 email state값
    }

    fetch('http://localhost:3008/sendEmail',{
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(json => {
        this.setState({
            number: json.number,       //number이름의 state값에 생성한 인증번호를 받아왔따
        })

        console.log(this.state.number);
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state) && (this.state.number == this.state.inputnumber)) {
      this.setState({usingemail : true});
      axios.post('http://localhost:3008/registerUpdate', {
        email: this.state.email,
        password: this.state.password,
      }).then((response)=>{
          console.log(response.data.message);
      });
      console.log(`
        --SUBMITTING--
        Name: ${this.state.name}
        Email: ${this.state.email}
        Password: ${this.state.password}
        인증번호 맞다
      `);
      const {history} = this.props;
      history.push('/');
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "학교 메일 주소를 입력해주세요";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        formErrors.reenter_password=
          value===this.state.reenter_password ? "" : "비밀번호가 다릅니다"
        break;
        case "reenter_password":
          formErrors.reenter_password =
            value===this.state.password ? "" : "비밀번호가 다릅니다";
          break;
        case "inputnumber":
          formErrors.inputnumber =
            value==this.state.number ? "" : "인증번호가 잘못되었습니다";
          break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }); //, () => console.log(this.state)
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper"       
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //height: '90vh'
      }}>
        <div className="form-wrapper">
          <h1 style={{marginBottom: 50,
                marginTop: 80,
                paddingVertical: 8,
                borderWidth: 4,
                borderColor: "#20232a",
                borderRadius: 6,
                //backgroundColor: "#61dafb",
                color: "#20232a",
                textAlign: "center",
                fontSize: 30,
                fontWeight: "bold"}}>Change Password</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <div style={{
                marginTop: 20,
                marginBottom: 20,
                paddingVertical: 8,
                color: "#20232a",
                fontSize: 20,
                fontWeight: "bold"}}>
                <label htmlFor="email">Email</label>
              </div>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
                style={{height:"40px",
                  width: "400px",
                  fontSize: 18,
                  marginBottom: 10}}
              />
              <button onClick={this.sendEmail} style={{marginLeft:15,
                                                fontSize:20,
                                                backgroundColor: "green",
                                                color: "white"}}> 인증 </button>
              <div>
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
              </div>
            </div>
            <div>
              <div className="inputnumber">
              <input
                type="text"
                name="inputnumber"
                placeholder="인증번호 6자리"
                noValidate
                onChange={this.handleChange}
                style={{height:"40px",
                  width: "400px",
                  fontSize: 18}}
              />
              <div>
              {formErrors.inputnumber.length > 0 && (
                <span className="errorMessage">{formErrors.inputnumber}</span>
              )}
              </div>
              </div>
            </div>
            <div className="password">
              <div style={{
                marginTop: 20,
                marginBottom: 20,
                paddingVertical: 8,
                color: "#20232a",
                fontSize: 20,
                fontWeight: "bold"}}>
                <label htmlFor="password">Password</label>
              </div>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
                style={{height:"40px",
                  width: "400px",
                  fontSize: 18}}
              />
              <div>
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
              </div>
            </div>
            <div className="reenter_password">
              <div style={{
                marginTop: 20,
                marginBottom: 20,
                paddingVertical: 8,
                color: "#20232a",
                fontSize: 20,
                fontWeight: "bold"}}>
                <label htmlFor="reenter_password">Re-enter Password</label>
              </div>
              <input
                className={formErrors.reenter_password.length > 0 ? "error" : null}
                type="password"
                name="reenter_password"
                noValidate
                onChange={this.handleChange}
                style={{height:"40px",
                  width: "400px",
                  fontSize: 18}}
              />
              <div>
              {formErrors.reenter_password.length > 0 && (
                <span className="errorMessage">{formErrors.reenter_password}</span>
              )}
              </div>
            </div>
            <div className="createAccount"
              style={{marginTop: 20}}>
                <button type="submit" /*onClick={this.signup}*/ style={{height:"50px", 
                                      width:"200px",
                                      marginTop: 30,
                                      fontSize: 20,
                                      backgroundColor: "green",
                                      color: "white"}}>Submit</button>
            </div>
            <div style={{//height:"40px", 
                  marginTop: 15,
                  marginBottom: 30,
                  color: "blue"}}>
              <Link to="/login">
                <small style={{fontSize: 18, textDecorationLine: 'underline'}}>Remembered your Account?</small>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ChangePassword;