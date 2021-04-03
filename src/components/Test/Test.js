import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import ReactDOM from 'react-dom'
import Button from "react-bootstrap/Button";
import DateTimePicker from'react-datetime-picker';

import './Test.css'

function SignUp(props) {
  const [name, setName] = useState("")
  const [childname, setChildname] = useState("")
  const [mobile, setMobile] = useState("")

 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [value, onChange] = useState(new Date());
 const history=useHistory();


 async function SignUp(){
  let item ={name,childname,email,value,mobile,password}
  console.warn(item)
  let result= await fetch("",{
    method:"POST",
    body:JSON.stringify(item),
    header:{
      "Content-Type":'application/json',
      "Accept":'application/json'
    }
  });
  result=await result.json();
  localStorage.setItem("user-info",JSON.stringify(result))
  history.push("")
}


  return(
    <div className="overlay-box">
		  <div className="close-overlay" onClick={props.close}>X</div>
      <div className="row">
      <div className="col-lg-10 col-md-10 col-sm-12">
          <form action="">
          <div>
              <input type="text" name="name" placeholder="Your Name" className="name1" autoComplete="off" 
              value={name}
              onChange={(name)=>setName(name.target.value)}/>
              </div>
              <div>
              <input type="text" name="childname" placeholder="Child Name" className="childname" autoComplete="off" 
              value={childname}
              onChange={(childname)=>setChildname(childname.target.value)}/>
               </div>
               <div>
              <input type="text" name="email" placeholder="Email" className="email1" autoComplete="off" 
              value={email}
              onChange={(email)=>setEmail(email.target.value)}/>
              </div>
<div className="row">
  <div className="col-lg-3 col-md-6 col-sm-12">
    <select  className="division">
      <option defaultValue="division">Division</option>
      <option value="1">Division-1</option>
      <option value="2">Division-2</option>
      <option value="3">Division-3</option>
      <option value="4">Division-4</option>
      <option value="5">Division-5</option>
      <option value="6">Division-6</option>
      <option value="7">Division-7</option>
        <option value="8">Division-8</option>
       </select></div>

    <div className="col-lg-3 col-md-6 col-sm-12">
                <DateTimePicker  className="value1"
                 onChange={onChange}
                 value={value}/>
            </div>
            </div>
            <div>
              <input type="integer" name="mobile" placeholder="Mob No." className="mobile" autoComplete="off" 
               value={mobile}
               onChange={(mobile)=>setMobile(mobile.target.value)}/>
               </div>
              <div>
              <input type="password" name="password" placeholder="Password" className="password1" autoComplete="off" 
               value={password}
               onChange={(password)=>setPassword(password.target.value)}/>
               </div>
           </form>

           </div>
           </div>
           <button onChange={SignUp}className="btn2 btn-outline-success">SignUp</button>

            </div>	 
  );  
}

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {overlay: false};
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }
  
  toggleOverlay() {
    this.setState(prevState => ({
      overlay: !prevState.overlay
    }));
  }
  
  render() {
     return(<div>
         { this.state.overlay && <div className="overlay" onClick={this.toggleOverlay}></div>}
         { this.state.overlay && <SignUp close={this.toggleOverlay} />} 
       <div>
         <h2>.</h2>
         <div className="centered">
           <button className="button btn-outline-primary" onClick={this.toggleOverlay}>SignUp</button>
         </div>
       </div>
     </div>); 
  }
}




export default Test;

