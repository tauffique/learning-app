import './App.css';
import React ,{Component} from 'react';
import {NavLink,Redirect,Route, Router, Switch} from 'react-router-dom';
import Landing_page from "./landing_page"
import Student from './Student-dashboard';
import Dashboard from './Teacher-dashboard/dashboard';






const  App=()=> {
  return (
  <div className="App">
<Dashboard></Dashboard>
    </div>
  );
}

export default App;

