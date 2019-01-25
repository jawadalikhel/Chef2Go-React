import React, {Component} from 'react';

class Register extends Component{
  constructor(){
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      occpation: 'coustomer',
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

      const parsedResponse = registerResponse.json();
      console.log(parsedResponse, 'parsedResponse for register')
      if(parsedResponse.data === 'registration successful'){
        this.props.history.push('/');
        console.log('coustomer registeration went successful')
      }else{
        console.log('error registration unsuccessful');
      }
    } catch (err) {
      console.log(err, 'error in register coustomer')
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
        <form id="regForm" onSubmit={this.handleSubmit}>
          <h1 className="regTag">Welcome Coustomer Register Here</h1>
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
