import './App.css';
import React ,{Component} from 'react';
import {NavLink,Redirect,Route, Router, Switch} from 'react-router-dom';
import Landing_page from "./landing_page"
import Student from './sdashboard/Student-dashboard';






const  App=()=> {
  return (
<Router>
  <div className="App">
  <Switch>
    <Route path="/landing_page" exact component={Landing_page}/>
    <Route path="/student" component={Student} />
  </Switch>
  </div>
</Router>
  );
}

export default App;

