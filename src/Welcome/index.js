import React, {Component} from 'react';
import './welcome.css';



class Welcome extends Component{
  render(){
    return(
      <div>
        <div className="loginDiv">
          <a href="/clogin">
            <button className="loginBtn"> If you are a chef come joing!!</button>
          </a>
          <a href="/#">
            <button className="loginBtn">Hire a chef!</button>
          </a>
        </div>
      </div>
    )
  }
}
export default Welcome;
