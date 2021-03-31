import React,{useState} from 'react';
import intro from '../images/intro.svg';
import Dropdown from 'react-dropdown';
import ReactDOM from 'react-dom'
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import DateTimePicker from 'react-datetime-picker'

function Login(){
  
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

    return(
      <>
      <section className="section colored" id="contact-us">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <img src={intro} alt="" className="img-fluid" style={{width: '90%', height: '90%', marginLeft: '30px'}} />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <form action="">
              <div>
                <input type='text' name='email' placeholder='Email' id='email' autoComplete='off'
                   value={email}
                   onChange={(email)=> setEmail(email.target.value)} />
  </div></form>
  <form>
              <div>
                <input type='password' name='password' placeholder='Password' id='password' autoComplete='off'
                value={password}
                onChange={(password)=> setPassword(password.target.value)} />
                </div>
                <a href='#' id='btn9'className='btn9 btn-success'>Login</a>
            </form><br></br>
            <a id='signup' >Don't have account? </a>
        </div>
           </div>
              
    </div>
           </section>
           
          
        </>  
      
                    
    );
}
export default Login;