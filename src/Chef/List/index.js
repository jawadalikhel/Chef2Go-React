import React, {Component} from 'react';
import './list.css';

class List extends Component{
  constructor(props){
    super(props);
    this.state = {
      _id: this.props.data._id,
      list: [],
    }
  }

  getList = async () =>{
    try {
      const getItem = await fetch('http://localhost:9000/chef/' + this.state._id, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const getItemJson = getItem.json();
      return getItemJson;

    } catch (err) {
      console.log(err, 'error in getList at List comp')
    }
  }

  componentDidMount(){
    this.getList().then((list) =>{
      this.setState({list: list.data})
    }).catch((err) =>{
      console.log(err, 'error in componentDidMount in List Comp')
    })
  }
  render(){

    return(
      <div id="profileContainer">
        <div className="z">
          <img className='chefImag' src={this.state.list.picture}/><br/>
          <h2>Chef {this.state.list.username}</h2>
          <p>Experience: {this.state.list.experience}</p>
          <p>About Me: {this.state.list.about}</p>
          <h1>This Weeks Menu</h1>
          <p>Starter: {this.state.list.starter}</p>
          <p>Main: {this.state.list.main}</p>
          <p>Dessert: {this.state.list.dessert}</p>
          <p>Drink: {this.state.list.drink}</p>
        </div>
        <a href="/login">Hire this chef</a>
      </div>
    )
  }
}
export default List;
