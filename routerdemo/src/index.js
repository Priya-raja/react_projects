import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"

import './App.css';
import Login from './Login'
// import App from './App';


ReactDOM.render(
  <Router> 
     {/* <App /> */}
     <Login />
  </Router>,
  document.getElementById('root')
);


