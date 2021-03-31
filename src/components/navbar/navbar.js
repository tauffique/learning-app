import React from 'react';
import physics from '../images/physics.svg'

const Navbar=()=>{
    return(
<>
  
<header id="navbar" className="fixed-top">
  <div className="row">
    <div className="col-md-12">
 
        <div className="container">
          <div className="col-md-10  " >
          <div className="logo float-left">
            
  
            <h1 className="text-light"><a href="#header"><span>New Education</span></a></h1> 
          </div></div>
          <div className="col-md-12 pl-1">
          <nav className="main-nav float-right d-none d-lg-block">

            <ul>
              <li className="active"><a href="#intro">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#program">Program</a></li>
              <li><a href="#login">Login</a></li>
              <li><a href="#freetrail">Free trial</a></li>
            </ul>
          </nav></div>
        </div></div></div>
      </header>
</>
    );
}
export default Navbar;