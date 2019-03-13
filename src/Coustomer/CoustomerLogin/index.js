import React, {Component} from 'react';
import './login.css';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
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
      console.log(loginResponse, ' this is loginRespons')
      console.log('ZILCH')

      const parsedResponse = await loginResponse.json();
      console.log(parsedResponse, ' this is our parsed data at login');
      if(parsedResponse.data === 'login successfu'){
        this.props.history.push('/application');
        console.log('going to welcome page')
      } else if(parsedResponse.data === 'username wrong'){
        alert('Incorrect Username. please try again or register');
      } else if(parsedResponse.data === 'password wrong'){
        alert('Incorrect Password')
      }
    } catch (err) {
      console.log(err.message,' error in handleSubmit login')
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
          <h1>Welcome, Login here to hire a chef</h1>
          <input type="text" onChange={this.handleChange} name="username" className="" placeholder="username" /><br/>
          <input type="password" onChange={this.handleChange} name="password" className="" placeholder="password" /><br/>
          <button className="login-btn">Login</button>
        </form>

        <div >
          <a id="help-div" href="/register">create account</a><br/>
          <a id="help-div" href="/cNeedHelp">need help</a>
        </div>

      </div>
    )
  }
}
export default Login;
