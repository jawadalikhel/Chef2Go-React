import React, {Component} from 'react';
import './style.css';
import ShowPage from '../ShowPage';
import { Link } from 'react-router-dom';

class DisplayChefs extends Component{
  render(){
    const showChefs = this.props.chefs.map((chef, i) =>{
      console.log(showChefs)
      return(
        <div className="chef">
          <Link to={'/' + chef._id} className="" key={chef._id}>
            <img className="chefImg" src={chef.picture}/>
            <p className="">This is chef {chef.username}</p>
          </Link>
        </div>
      )
    })

    if(showChefs)
    console.log(showChefs, ' this is showChefs');
    return(
      <div>
        <div id="wrapper">
          {showChefs}
        </div>
      </div>
    )
  }
}
export default DisplayChefs;
