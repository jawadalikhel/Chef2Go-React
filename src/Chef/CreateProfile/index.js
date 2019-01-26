import React, {Component} from 'react';
import './createProfile.css';

class CreateProfile extends Component{
  constructor(){
    super();
    this.state = {
      picture: '',
      experience: '',
      about: '',
      starter: '',
      main: '',
      dessert: '',
      drink: '',
      email: '',
      username: '',
      password: '',
      occupation: 'chef'
    }
  }

  handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      console.log(this.state, 'this is the state')
      const registerResponse = await fetch('http://localhost:9000/auth/register', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = registerResponse.json();
      if(parsedResponse.data === 'registration successful'){
        this.props.history.push('/');
        console.log('registration successful')
      }else {
        console.log('registration failed')
      }
    } catch (err) {
      console.log(err, 'error in handleSubmit in CreateProfile')
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
        <form onSubmit={this.handleSubmit} id="CreateContainer">
          <h2 className="regTag1">ABOUT YOU</h2>
          <input type="text" onChange={this.handleChange} name="image" className="cinput" placeholder="Please upload a image of yourself"/>
          <input type="text" onChange={this.handleChange} name="experience" className="cinput" placeholder="Years Of Experience"/>
          <input type="text" onChange={this.handleChange} name="summary" className="cinput" placeholder="Say Something About You"/>

          <h2 className="regTag2">MENU YOU CAN COOK</h2>
          <input type="text" onChange={this.handleChange} name="starter" className="cinput" placeholder="Enter STARTER: " />
          <input type="text" onChange={this.handleChange} name="main" className="cinput" placeholder="Enter MAIN: " />
          <input type="text" onChange={this.handleChange} name="dessert" className="cinput" placeholder="Enter DESSERT: " />
          <input type="text" onChange={this.handleChange} name="drink" className="cinput" placeholder="Enter DESSERT: " />
          <br/><br/><br/>
          <input type="text" onChange={this.handleChange} name="email" className="cinput" placeholder="Email" />
          <input type="text" onChange={this.handleChange} name="username" className="cinput" placeholder="username: " />
          <input type="password" onChange={this.handleChange} name="password" className="cinput" placeholder="password: " />

          <button className="crte-btn">REGISTER</button>
        </form>
      </div>
    )
  }
}
export default CreateProfile;



// <form id="createProfile">
//   <h1 className="regTag1">CREATE NEW ACCOUNT</h1>
//   <input type="text" name="expreience" className="cinput" placeholder="Years Of Experience"/><br/>
//   <input type="text" name="summary" className="cinput" placeholder="Say Something About You"/><br/>
//   <h2 className="regTag2">MENU YOU CAN COOK</h2><br/>
//   <input type="text" name="starter" className="cinput" placeholder="Enter STARTER: " /><br/>
//   <input type="text" name="main" className="cinput" placeholder="Enter MAIN: " /><br/>
//   <input type="text" name="dessert" className="cinput" placeholder="Enter DESSERT: " /><br/>
//   <input type="text" name="drink" className="cinput" placeholder="Enter DESSERT: " /><br/>
//   <button className="crte-btn">SUBMIT</button>
// </form>
