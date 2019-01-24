import React, {Component} from 'react';
import './style.css';

class Login extends Component {
  render(){
    return(
      <div>
        <form id="regForm">
          <h1 className="regTag">Register</h1>
          <input type="text" className="input" placeholder="Fullname: " /><br/>
          <input type="text" className="input" placeholder="Address: " /><br/>
          <input type="text" className="input" placeholder="Phone: " /><br/>
          <input type="text" className="input" placeholder="Email" /><br/>
          <input type="text" className="input" placeholder="username: " /><br/>
          <input type="password" className="input" placeholder="password: " /><br/>
          <button className="reg-btn">Register</button>
        </form>
      </div>
    )
  }
}
export default Login;
