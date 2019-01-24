import React, {Component} from 'react';
import './style.css';

class Login extends Component {
  render(){
    return(
      <div>
        <form id="form">
          <input type="text" className="input" placeholder="username" /><br/>
          <input type="password" className="input" placeholder="password" /><br/>
          <button className="login-btn">Login</button>
        </form>
      </div>
    )
  }
}
export default Login;
