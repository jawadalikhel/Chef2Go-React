import React, {Component} from 'react';
import './editProfile.css';

class EditProfile extends Component{
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
  render(){
    return(
      <div>
        <form id="CreateContainer">
          <h2 className="regTag1">Edit Your Profile</h2>
          <input type="text" name="image" className="cinput" placeholder="Please upload a image of yourself"/>
          <input type="text" name="experience" className="cinput" placeholder="Years Of Experience"/>
          <input type="text" name="summary" className="cinput" placeholder="Say Something About You"/>

          <h2 className="regTag2">Edit MENU: </h2>
          <input type="text" name="starter" className="cinput" placeholder="Enter STARTER: " />
          <input type="text" name="main" className="cinput" placeholder="Enter MAIN: " />
          <input type="text" name="dessert" className="cinput" placeholder="Enter DESSERT: " />
          <input type="text" name="drink" className="cinput" placeholder="Enter DESSERT: " />
          <br/><br/><br/>
          <input type="text" name="email" className="cinput" placeholder="Email" />
          <input type="text" name="username" className="cinput" placeholder="username: " />
          <input type="password" name="password" className="cinput" placeholder="password: " />

          <button className="crte-btn">Update</button>
        </form>
      </div>
    )
  }
}
export default EditProfile;
