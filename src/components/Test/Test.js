import React,{useState} from 'react';
import intro from '../images/intro.svg';
import Dropdown from 'react-dropdown';
import ReactDOM from 'react-dom'
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import DateTimePicker from 'react-datetime-picker'
  

function OverlayPC(props) {
  const [name, setName] = useState("");
  const [childname, setChildname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [value, onChange] = useState(new Date());
  return(
    <div className="overlay-box">
		  <div className="close-overlay" onClick={props.close}>X</div>
		  <div>
        
      <form >
              
                <input type='text' name='name' placeholder='Your Name?' className='name' autoComplete='off'
                   value={name}
                   onChange={(name)=> setName(name.target.value)} /> 

                    <input type='text' name='childname' placeholder='Your Child Name?' className='childname' autoComplete='off'
                      value={childname}
                      onChange={(childname)=> setChildname(childname.target.value)} /> 

                   <input type='text' name='email' placeholder='Your Email?' className='email' autoComplete='off'
                    value={email}
                   onChange={(email)=> setEmail(email.target.value)} /> 
               
                 <DateTimePicker className="datetime" placeholder="Meet Schedule"
                 onChange={onChange}
                 value={value} />

        <select className="division">
        <option value="Division">Division</option>

         <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>

           </select>
           <input type='integer' name='mobile' placeholder=' Mob. No.?' className='mob' autoComplete='off'
                    value={mobile}
                   onChange={(mobile)=> setMobile(mobile.target.value)} /> 

                   <input type='password' name='password' placeholder='Password' className='password' autoComplete='off'
                   value={password}
                   onChange={(password)=> setPassword(password.target.value)} />
                  
                  
                   </form>
                   <br></br>
                   <br></br>

                   <a href="#" className="btn3 btn-primary">SignUp</a>
       </div>
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
         { this.state.overlay && <OverlayPC close={this.toggleOverlay} />} 
       <div>
         <div className="centered">
           <div className="navlink" onClick={this.toggleOverlay}>Signup</div>
         </div>
       </div>
     </div>); 
  }
}

ReactDOM.render(
  <Test />,
  document.getElementById('root')
);
export default Test;