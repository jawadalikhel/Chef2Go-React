import React, {Component} from 'react';
import './register.css';

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
      occupation: 'coustomer'
    }
  }

  handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const registerResponse = await fetch('http://localhost:9000/auth/register', {
        method: 'POST',
        credential: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await registerResponse.json();
      if(parsedResponse.data === 'registration successful'){
        this.props.history.push('/')
      } else {
        console.log('error in coustomer registeration')
      }

      console.log(parsedResponse, ' this is coustomer parsedResponse')
    } catch (err) {
      console.log(err, 'error in handleSubmit coustomer register')
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
        <form id="cregForm" onSubmit={this.handleSubmit}>
          <h1 className="cregTag1">Welcome Register Here To Hire a Chef</h1><br/><br/><br/>
          <div className="cinputInfo">
            <input type="text" onChange={this.handleChange} name="fullname" className="cinput" placeholder="Enter your fullname " /><br/>
            <input type="text" onChange={this.handleChange} name="address" className="cinput" placeholder="Enter you address" /><br/>
            <input type="text" onChange={this.handleChange} name="phone" className="cinput" placeholder="Enter your phone number " /><br/>

            <input type="text" onChange={this.handleChange} name="email" className="cinput" placeholder="Enter you email" /><br/>
            <input type="text" onChange={this.handleChange} name="username" className="cinput" placeholder="Create a Username" /><br/>
            <input type="password" onChange={this.handleChange} name="password" className="cinput" placeholder="Ceate a Password " /><br/>
            <button className="creg-btn">Register</button>
          </div>
        </form>
      </div>
    )
  }
}
export default Register;
