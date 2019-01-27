import React, {Component} from 'react';
import DisplayChef from '../Chef/DisplayChefs';
import './welcome.css';



class Welcome extends Component{
  constructor(){
    super();
    this.state = {
      chefs: [],
    }
  }

  getChef = async () =>{
    const showChefs = await fetch('http://localhost:9000/chef/allChefs', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedResponse = await showChefs.json();
    return parsedResponse;

    console.log(parsedResponse, 'these are chefs ')
  }

  componentDidMount(){
    this.getChef().then((chef) =>{
      this.setState({chefs: chef.data})
    }).catch((err) =>{
      console.log(err, 'error in componentDidMount')
    })
  }



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

        <div id="displayChef">
          <DisplayChef chefs={this.state.chefs} />
        </div>
      </div>
    )
  }
}
export default Welcome;
