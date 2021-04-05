import React ,{Component} from 'react';
import {NavLink,Redirect,Route, Switch} from 'react-router-dom';
import Navbars from './navbar';
import Sidebar from './sidebar';
import Card2 from './card2/card2';
import Footer from '../components/footer/footer';





const  Student=()=> {
  return (
<>    
<Navbars></Navbars>   
<Sidebar></Sidebar>
<Card2></Card2>
<Footer></Footer>
    </>
  );
}

export default Student;

