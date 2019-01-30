import React, {Component} from 'react';
import DisplayChef from '../Chef/DisplayAllChefs';
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
    console.log(parsedResponse, 'Mirza');
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

        <div className="">
          <a href="/clogin">
            <button className=""> If you are a chef come joing!!</button>
          </a>
        </div><br/>

        <div>
          <a href="/cregister">
            <button className=""> Become a chef</button>
          </a>
        </div>

        <div>
          <a href="/login">
            <button className="">Hire a chef!</button>
          </a>
        </div>

        <div>
          <a href="/register">
            <button className="">Register to Hire a chef!</button>
          </a>
        </div>

        <div id="">
          <DisplayChef chefs={this.state.chefs} />
        </div>

      </div>
    )
  }
}
export default Welcome;
