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
    const showChefs = await fetch('http://localhost:9000/chef/chefs', {
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
            <button className=""> Chef Login</button>
          </a>
        </div><br/>

        <div>
          <a href="/login">
            <button className="">Coustomer Login</button>
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
