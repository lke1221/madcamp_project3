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

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null,
      usingemail: false,
      number: "",
      inputnumber: "",
      password: null,
      position: "admin",
      reenter_password: null,
      message:"",
      formErrors: {
        name: "",
        email: "",
        password: "",
        reenter_password: "",
        inputnumber: ""
      }
    };
  }

  sendEmail = e => {
    e.preventDefault();
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

  signup = () => {
    //const a = this.state.name;
    //this.setState({name:b})

    //console.log(this.state.email + " / " + this.state.password + " / " + this.state.name + " / " + this.state.position);
    if(this.state.formErrors.name=="" && this.state.formErrors.email=="" && this.state.formErrors.password=="" &&
      this.state.formErrors.reenter_password=="" && this.state.formErrors.inputnumber=="" && this.state.inputnumber!=""){
        axios.post('http://localhost:3008/register', {
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          position: this.state.position
        }).then((response)=>{
          if(response.data.message) {
            this.setState({message: response.data.message});
          } else {
            const {history} = this.props;
            history.push('/');
          }
        });
      }
      else{
        console.log("can't signup");
      }
  };

  //e라는 코드를 입력했을 때
  // email_verif = e => {
  //   axios.post('http://localhost:3008/register', { e }).then((response)=>{
  //           console.log(response);
  //       });
  // }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state) && (this.state.number == this.state.inputnumber)) {
      this.setState({usingemail : true});
      console.log(`
        --SUBMITTING--
        Name: ${this.state.name}
        Email: ${this.state.email}
        Password: ${this.state.password}
        인증번호 맞다
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name =
          value.length < 2 ? "minimum 2 characaters required" : "";
        break;
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
        case "inputnumber":
          formErrors.inputnumber =
            value==this.state.number ? "" : "인증번호가 잘못되었습니다";
          break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
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
                fontWeight: "bold"}}>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="name">
              <div style={{
                marginBottom: 20,
                paddingVertical: 8,
                color: "#20232a",
                fontSize: 20,
                fontWeight: "bold"}}>
                <label htmlFor="name">Name</label>
              </div>
              <input
                className={formErrors.name.length > 0 ? "error" : null}
                type="text"
                name="name"
                noValidate
                onChange={this.handleChange}
                style={{height:"40px",
                  width: "400px",
                  fontSize: 18}}
              />
              <div>
              {formErrors.name.length > 0 && (
                <span className="errorMessage">{formErrors.name}</span>
              )}
              </div>
            </div>
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
                  fontSize: 18}}
              />
              <button onClick={this.sendEmail} style={{marginLeft:15,
                                                fontSize:20,
                                                backgroundColor: "green",
                                                color: "white"}}> 인증 </button>
              <div>
              {formErrors.email.length > 0 && (
                <span className="errorMessage" style={{marginTop: 10}}>{formErrors.email}</span>
              )}
              </div>
            </div>
            <div>
              <div className="inputnumber">
              <input
                type="number"
                name="inputnumber"
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
            <div className="position">
              <div style={{
                marginTop: 20,
                marginBottom: 20,
                paddingVertical: 8,
                color: "#20232a",
                fontSize: 20,
                fontWeight: "bold"}}>
                <label htmlFor="position">Position</label>
              </div>
              <div className="container p-5">
                <select
                  className="custom-select"
                  value={this.position}
                  onChange={(e) => {
                  const selectedPosition = e.target.value;
                  this.setState({position: selectedPosition});
                  }}
                  style = {{width: "400px", height: "40px", fontSize: 18}}
                >
                  <option value="admin">Admin</option>
                  <option value="student">Student</option>
                </select>
                {this.position}
              </div>
            </div>
            <div className="createAccount"
              style={{marginTop: 20}}>
                <button type="submit" onClick={this.signup} style={{height:"50px", 
                                      width:"200px",
                                      marginTop: 30,
                                      fontSize: 20,
                                      backgroundColor: "green",
                                      color: "white"}}>Create Account</button>
            </div>
            <div style={{//height:"40px", 
                  marginTop: 15,
                  marginBottom: 30,
                  color: "blue"}}>
              <Link to="/login">
                <small style={{fontSize: 18, textDecorationLine: 'underline'}}>Already Have an Account?</small>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;