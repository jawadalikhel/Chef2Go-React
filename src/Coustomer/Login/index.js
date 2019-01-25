import React, {Component} from 'react';
import './style.css';

class Login extends Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const loginResponse = await fetch('http://localhost:9000/auth/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        header: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await loginResponse.json();
      console.log(parsedResponse, 'this is parsedResponse')
      if(parsedResponse.data === 'register successful'){
        this.props.history.push('/profile');
      } else if(parsedResponse.data === 'password wrong'){
        alert('password wrong');
        console.log('password wrong');
      } else if(parsedResponse.data === 'username wrong'){
        alert('username wrong');
        console.log('username wrong')
      }
    } catch (err) {
      console.log(err, 'error in handleSubmit login')
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
          <h1>Welcome Coustomer, Login here</h1>
          <input type="text" onChange={this.handleChange}  name="username" className="input" placeholder="username" /><br/>
          <input type="password" onChange={this.handleChange} name="password" className="input" placeholder="password" /><br/>
          <button className="login-btn">Login</button>
        </form>

        <div id="help-div">
          <a href="/register">create account</a><br/>
          <a href="/#">need help</a><br/>
        </div>

      </div>
    )
  }
}
export default Login;
