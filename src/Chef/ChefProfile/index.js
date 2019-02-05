import React, {Component} from 'react';
import List from '../List';

class ChefProfile extends Component{
  constructor(){
    super();
    this.state = {
      dataLoaded: false,
      list: []
    }
  }
  getList = async () =>{
    const list = await fetch('http://localhost:9000' + this.props.match.url);
    console.log(list, ' this is list ')
    const listParsedJson = await list.json();
    console.log(listParsedJson, ' this is listParsedJson in ChefProfile')
    return listParsedJson;
  }

  componentDidMount(){
    this.getList().then((list) =>{
      console.log(list.data, ' this is list');
      this.setState({list: list.data, dataLoaded: true})
    }).catch((err) =>{
      console.log(err, 'error in componentDidMoun in ChefProfile')
    })
  }
  render(){
    console.log(this.props.match.url, "the props mathched the url")
    return(
      <div>
        hi
      </div>
    )
  }
}
export default ChefProfile;
