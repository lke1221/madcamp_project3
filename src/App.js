import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Notice from './pages/notice';
import History from './pages/history';
import FAQ from './pages/faq';
import ContactUs from './pages/contactus';
import Application from './pages/application';
import Login from './pages/login';
import SignUp from './pages/signup';
import PostView from './pages/PostView'

class App extends Component {

  render () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/notice' component={Notice} />
        <Route path='/history' history={History}/>
        <Route path='/faq' component={FAQ} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/application' component={Application} />
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/postView/:no' component={PostView} />
      </Switch>
    </Router>
  );
}
}

export default App;