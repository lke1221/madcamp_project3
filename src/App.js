import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Notice from "./pages/notice";
import Pick from "./pages/pick";
import History from "./pages/history";
import FAQ from "./pages/faq";
import ContactUs from "./pages/contactus";
import Application from "./pages/application";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import PostView from "./pages/PostView";
import ChangePassword from "./pages/changepassword";
import NewNotice from "./pages/newnotice";
import EditNotice from "./pages/editnotice";
import { FooterContainer } from "./containers/footer";
import ScrollToTop from "./components/ScrollToTop";
import RealHistory from "./pages/RealHistory"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      onLogin: this.onLogin,
      onLogout: this.onLogout,
    };
  }

  onLogin = () => {
    this.setState({
      logged: true,
    });
  };

  onLogout = () => {
    this.setState({
      logged: false,
    });
  };

  componenetDidMount() {
    const email = window.sessionStorage.getItem("email");
    if (email) this.onLogin();
    else this.onLogout();
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/notice" component={Notice} />
            <Route path="/pick" component={Pick} />
            <Route path="/history" component={History} />
            <Route path="/faq" component={FAQ} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/application" component={Application} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/changepassword" component={ChangePassword} />
            <Route path="/postView/:no" component={PostView} />
            <Route path="/newnotice" component={NewNotice} />
            <Route path="/editnotice" component={EditNotice} />
            <Route path="/realhistory" component={RealHistory} />
          </Switch>
          <FooterContainer style={{ position: "absolute", bottom: 0 }} />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
