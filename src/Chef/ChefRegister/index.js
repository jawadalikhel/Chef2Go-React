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
        this.props.history.push('/')
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
          <h1 className="regTag1">Welcome Chef Register Here</h1><br/><br/><br/>
          <div className="inputInfo">
            <h2 className="regTag2">About You</h2>
            <input type="text" onChange={this.handleChange} name="picture" className="input" placeholder="upload a picture of yourself: " /><br/>
            <input type="text" onChange={this.handleChange} name="experience" className="input" placeholder="Enter you experience:" /><br/>
            <input type="text" onChange={this.handleChange} name="about" className="input" placeholder="say something about yourself: " /><br/>

            <h2 className="regTag3">Menu Of The Week</h2>
            <input type="text" onChange={this.handleChange} name="starter" className="input" placeholder="Starter: " /><br/>
            <input type="text" onChange={this.handleChange} name="main" className="input" placeholder="Main: " /><br/>
            <input type="text" onChange={this.handleChange} name="dessert" className="input" placeholder="Dessert: " /><br/>
            <input type="text" onChange={this.handleChange} name="drink" className="input" placeholder="Drink: " /><br/>

            <input type="text" onChange={this.handleChange} name="email" className="input" placeholder="Email" /><br/>
            <input type="text" onChange={this.handleChange} name="username" className="input" placeholder="username: " /><br/>
            <input type="password" onChange={this.handleChange} name="password" className="input" placeholder="password: " /><br/>
            <button className="reg-btn">Register</button>
          </div>
        </form>
      </div>
    )
  }
}
export default Register;
