import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import ReactDOM from 'react-dom'
import Button from "react-bootstrap/Button";
import DateTimePicker from'react-datetime-picker';

import './Test.css'

function SignUp(props) {
  const [name, setName] = useState("")
  const [parentname, setParentname] = useState("")
  const [phoneno, setPhoneno] = useState("")
 const [classno, setClassno] = useState("")
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [value, onChange] = useState(new Date());
 const history=useHistory();


 async function SignUp(){
  let item ={name,parentname,email,value,phoneno,password,classno}
  console.warn(item)
  let result= await fetch("http://443170d89235.ngrok.io/student/signup",{
    action:'POST',
   
  });
  result=await result.json();
  localStorage.setItem("user-info",JSON.stringify(result))
  history.push("http://443170d89235.ngrok.io/student/signup")
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
              onChange={(e)=>setName(e.target.value)}/>
              </div>
              <div>
              <input type="text" name="parentname" placeholder="Child Name" className="childname" autoComplete="off" 
              value={parentname}
              onChange={(e)=>setParentname(e.target.value)}/>
               </div>
               <div>
              <input type="text" name="email" placeholder="Email" className="email1" autoComplete="off" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}/>
              </div>
<div className="row">
  <div className="col-lg-3 col-md-6 col-sm-12">
    <select  className="division"  name="classno">
      <option  defaultValue="division">Division</option>
      <option value="1">Division-1</option>
      <option value="2">Division-2</option>
      <option value="3">Division-3</option>
      <option value="4">Division-4</option>
      <option value="5">Division-5</option>
      <option value="6">Division-6</option>
      <option value="7">Division-7</option>
        <option value="8">Division-8</option>
        value={classno}
        onChange{(e)=>setClassno(e.target.value)}
       </select></div>

    <div className="col-lg-3 col-md-6 col-sm-12">
                <DateTimePicker  className="value1"
                 onChange={onChange}
                 value={value}/>
            </div>
            </div>
            <div>
              <input type="integer" name="phoneno" placeholder="Mob No." className="mobile" autoComplete="off" 
               value={phoneno}
               onChange={(e)=>setPhoneno(e.target.value)}/>
               </div>
              <div>
              <input type="password" name="password" placeholder="Create a password" className="password1" autoComplete="off" 
               value={password}
               onChange={(e)=>setPassword(e.target.value)}/>
               </div>
           </form>

           </div>
           </div>
           <button onClick={SignUp}className="btn2 btn-outline-success">SignUp</button>

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
           <button className="button1 btn-outline-primary" onClick={this.toggleOverlay}>SignUp</button>
         </div>
       </div>
     </div>); 
  }
}




export default Test;

