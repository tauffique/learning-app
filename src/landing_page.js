
  
import React ,{Component} from 'react';
import {NavLink,Redirect,Route, Switch} from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import  "./components/navbar/navbar.css";
import Login from "./components/login/login";
import Enroll from "./components/enroll/enroll.js";
import "./components/enroll/enroll.css"
import Commit from "./components/commit/commit.js"
import "./components/commit/commit.css"
import Enrollment from './components/enrollment/enrollment';
import  './components/enrollment/enrollment.css';
import './components/login/login.css';
import Service from './components/service/service'
import Services from './components/service/service.css'
import  "./components/footer/footer.css"
import Footer from "./components/footer/footer.js"
import Para from './components/paragraph/para';
import Card from './components/card/card'
import Sdata from './components/card/sdata'
import Test from './components/Test/Test'





const  Landing_page=()=> {
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

export default Landing_page;

