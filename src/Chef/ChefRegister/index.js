import React, {Component} from 'react';
import './style.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      address: '',
      phone: '',
      email: '',
      username: '',
      password: '',
      occupation: 'chef'
    }
  }
  handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const registerResponse = await fetch('http://localhost:9000/auth/register', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const parsedResponse = await registerResponse.json();
      if(parsedResponse.data === 'registration successful'){
        this.props.history.push('/cprofile')
        console.log('registration went successful')
      }
    } catch (err) {
      console.log(err, 'error in ')
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.name, ' this is .name')
  }
  render(){
    return(
      <div>
        <form id="regForm" onSubmit={this.handleSubmit}>
          <h1 className="regTag">Welcome Chef Register Here</h1>
          <input type="text" onChange={this.handleChange} name="email" className="input" placeholder="Email" /><br/>
          <input type="text" onChange={this.handleChange} name="username" className="input" placeholder="username: " /><br/>
          <input type="password" onChange={this.handleChange} name="password" className="input" placeholder="password: " /><br/>
          <button className="reg-btn">Register</button>
        </form>
      </div>
    )
  }
}
export default Register;
// <input type="text" onChange={this.handleChange} name="fullname" className="input" placeholder="Fullname: " /><br/>
// <input type="text" onChange={this.handleChange} name="address" className="input" placeholder="Address: " /><br/>
// <input type="text" onChange={this.handleChange} name="phone" className="input" placeholder="Phone: " /><br/>
