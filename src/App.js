import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import FAQ from './pages/faq';
import Notice from './pages/notice';
import ContactUs from './pages/contactus';
import Application from './pages/application';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/notice' component={Notice} />
        <Route path='/faq' component={FAQ} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/application' component={Application} />
      </Switch>
    </Router>
  );
}

export default App;