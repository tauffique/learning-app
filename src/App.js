import './App.css';
import React ,{Component} from 'react';
import {NavLink,Redirect,Route, Switch} from 'react-router-dom';
import Main from "./components/main"
import Navbar from "./components/navbar/navbar";
import Navbarr from "./components/navbar/navbar.css";
import Login from "./components/login/login";
import Enroll from "./components/enroll/enroll.js";
import Enrollm from "./components/enroll/enroll.css"
import Commit from "./components/commit/commit.js"
import Commitm from "./components/commit/commit.css"
import Enrollment from './components/enrollment/enrollment';
import Enrollments from './components/enrollment/enrollment.css';
import Logins from './components/login/login.css';
import Service from './components/service/service'
import Services from './components/service/service.css'
import Footerm from "./components/footer/footer.css"
import Footer from "./components/footer/footer.js"
import Para from './components/paragraph/para';
import Card from './components/card/card'
import Sdata from './components/card/sdata'
import Test from './components/Test/Test'
import Tests from './components/Test/Test.css'





const  App=()=> {
  return (
<>    

    <Navbar></Navbar>
    <Enroll></Enroll>
    <Commit></Commit>
    <Para></Para>
    <Enrollment></Enrollment>
    <Service></Service>
    <Login></Login>
    <Test></Test>
    <Footer></Footer>
    </>
  );
}

export default App;
