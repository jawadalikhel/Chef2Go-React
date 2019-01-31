import React, {Component} from 'react';
import './style.css';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      occupation: 'chef'
    }
  }


  handleSubmit = async (e) =>{
    try {
      e.preventDefault();
        const loginResponse = await fetch('http://localhost:9000/auth/login', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(this.state),
          headers:{
            'Content-Type': 'application/json'
            }
        });
      console.log(loginResponse, ' this is loginResponse')

      const parsedResponse = await loginResponse.json();
      console.log(parsedResponse, ' this is our parsed data at login');
      this.setState({
        createdPostId: parsedResponse.data
      })

      if(parsedResponse.data === 'login successful'){
        this.props.history.push('/');
        console.log('going to welcome page')
      } else if(parsedResponse.data === 'username wrong'){
        alert('Incorrect Username. please try again or register');
      } else if(parsedResponse.data === 'password wrong'){
        alert('Incorrect Password')
      }
    } catch (err) {
      console.log(err,' error in handleSubmit login')
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <div>

        <form id="form" onSubmit={this.handleSubmit}>
          <h1>Welcome chef, Login here</h1>
          <input type="text" onChange={this.handleChange} name="username" className="input" placeholder="username" /><br/>
          <input type="password" onChange={this.handleChange} name="password" className="input" placeholder="password" /><br/>
          <button className="login-btn">Login</button>
        </form>

        <div >
          <a id="help-div" href="/cregister">create account</a><br/>
          <a id="help-div" href="/cNeedHelp">need help</a>
        </div>

      </div>
    )
  }
}
export default Login;
