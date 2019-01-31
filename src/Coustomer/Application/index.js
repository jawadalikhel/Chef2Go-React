import React, {Component} from 'react';
import './application.css';
import List from '../List';

class Application extends Component{
  constructor(){
    super();
    this.state = {
      numpeople: '',
      address: '',
      date: '',
      time: '',
      card: '',
      expcard: '',
      cvv: '',
      additional: ''
    }
  }

  handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(this.state, ' this is the state')
    try {
      const applicationResponse = await fetch('http://localhost:9000/coustomer/create',  {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(applicationResponse, ' this is the response')

      const parsedResponse = await applicationResponse.json();
      console.log(parsedResponse, ' this is the parsedResponse JSON')

      this.setState({
        createdPostId: parsedResponse.data,
      })
      this.props.history.push('/' + this.state.createdPostId);
    } catch (err) {
      console.log(err, 'error in handleSubmit ')
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return(
      <div class="container">
        <form action="" onSubmit={this.handleSubmit}>

          <div class="row">
            <div class="col-25">
              <label for="country">Number OF PEOPLE</label>
            </div>
            <div class="col-75">
              <select onChange={this.handleChange} id="country" name="numpeople">
                <option value="1-2">1-2</option>
                <option value="2-10">2-10</option>
                <option value="20-25">10-25</option>
                <option value="25-40">25-40</option>
                <option value="40+">40+</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="address">Address</label>
            </div>
            <div class="col-75">
              <input type="text" onChange={this.handleChange} id="fname" name="address" placeholder="Your address.." />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="date">Date</label>
            </div>
            <div class="col-75">
              <input type="text" onChange={this.handleChange} id="lname" name="date" placeholder="Date: " />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="time">Time</label>
            </div>
            <div class="col-75">
              <input type="text" onChange={this.handleChange} id="lname" name="time" placeholder="Time: " />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="time">Card</label>
            </div>
            <div class="col-75">
              <input type="text" onChange={this.handleChange} id="lname" name="card" placeholder="Card: " />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="time">Exp. Date </label>
            </div>
            <div class="col-75">
              <input type="text" onChange={this.handleChange} id="lname" name="expcard" placeholder="Exp. Date: " />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="time">CVV </label>
            </div>
            <div class="col-75">
              <input type="text" onChange={this.handleChange} id="lname" name="cvv" placeholder="CVV: " />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="additional">Additional Info</label>
            </div>
            <div class="col-75">
              <textarea id="subject" onChange={this.handleChange} name="additional" placeholder="Write any additional instruction for the chef here..."></textarea>
            </div>
          </div>
          <div class="row">
            <input type="submit" value="BOOK THE CHEF NOW!" />
          </div>
        </form>

        <List data={this.state} />
      </div>
    )
  }
}

export default Application;
