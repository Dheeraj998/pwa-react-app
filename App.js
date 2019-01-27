import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import {Router,Route,browserHistory,IndexRoute} from 'react-router';
//import login from './components/login';
//import Content from './components/Content';
import Login from './pages/Login';
import './App.css';
import Application from './pages/Application';

class App extends Component {
  render() {
    return (
     <div>
       <div>
       <Router>
       <div>
         <Route exact path="/" component={Login}/>
         <Route exact path="/application" component={Application}/>
       
         </div>
     </Router>
     </div>
     <div>
       <Router exact path="/Application" component={Application}/> 
     </div>
  </div>
    );
  }
}

export default App;
