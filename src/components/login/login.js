
import React,{useState} from 'react';
import intro from '../images/intro.svg';
import Dropdown from 'react-dropdown';
import ReactDOM from 'react-dom'
import  './login.css';
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import DateTimePicker from 'react-datetime-picker'
import { useHistory } from 'react-router';

const Login=()=>{
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history=useHistory();

  async function Login(){
    let item ={email,password}
    console.warn(item)
    let result= await fetch("http://443170d89235.ngrok.io/student/signup",{
      method:"POST",
      body:JSON.stringify(item),
      header:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    });
    result=await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push("file:///C:/Users/tauffiq/Desktop/NewEducation/examples/dashboard.html")
  }
  


  return(
    <div className="container-fluid" style={{height:'50%'}}>
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <img src={intro} alt="image" className="img-fluid img1"/>
        </div> 
        <div className="col-lg-6 col-md-6 col-sm-12">
          <form action="">
            <div>
              <input type="text" name="email" placeholder="Email" className="email" autoComplete="off" 
              value={email}
              onChange={(email)=>setEmail(email.target.value)}/>
              </div>
              
              <div>
              <input type="password" name="password" placeholder="Password" className="password" autoComplete="off" 
               value={password}
               onChange={(password)=>setPassword(password.target.value)}/>
            </div>
            <button onClick={Login}className="btn1 btn-outline-success">Login</button>
          </form>
          <p1 className="sign">Don't have account?</p1>
        </div>
    </div>
    </div>
  );
}
export default Login;