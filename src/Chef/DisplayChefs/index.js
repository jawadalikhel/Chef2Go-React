import React, {Component} from 'react';
import './style.css';

class DisplayChefs extends Component{
  constructor(){
    super();
  }
  render(){
    const showChefs = this.props.chefs.map((chef, i) =>{
      console.log(showChefs)
      return(
        <div key={chef._id} id="chef" className="chefContainer">
          <div>
            <h4>This is chef: {chef.username}</h4>
            <h4>Years of experience: {chef.experience}</h4><br/>
          </div>
        </div>
      )
    })
    return(
      <div>
        <div>
          {showChefs}
        </div><br/>
      </div>
    )
  }
}
export default DisplayChefs;
