import React, {Component} from 'react';
import './edit.css';

class EditProfile extends Component {

  render(){
    return(
      <div>
        <form id="regForm">
          <h1 className="regTag1">Welcome Chef Edit Your Profile</h1><br/><br/><br/>
          <div className="inputInfo">
            <h2 className="regTag2">About You</h2>
            <input type="text" name="picture" className="input" placeholder="upload a picture of yourself: " /><br/>
            <input type="text" name="experience" className="input" placeholder="Enter you experience:" /><br/>
            <input type="text" name="about" className="input" placeholder="say something about yourself: " /><br/>

            <h2 className="regTag3">Menu Of The Week</h2>
            <input type="text" name="starter" className="input" placeholder="Starter: " /><br/>
            <input type="text" name="main" className="input" placeholder="Main: " /><br/>
            <input type="text" name="dessert" className="input" placeholder="Dessert: " /><br/>
            <input type="text" name="drink" className="input" placeholder="Drink: " /><br/>

            <input type="text" name="email" className="input" placeholder="Email" /><br/>
            <input type="text" name="username" className="input" placeholder="username: " /><br/>
            <input type="password" name="password" className="input" placeholder="password: " /><br/>
            <button className="reg-btn">Submit Edit</button>
          </div>
        </form>
      </div>
    )
  }
}
export default EditProfile;
