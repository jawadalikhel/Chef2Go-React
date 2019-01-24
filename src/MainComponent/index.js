import React, {Component} from 'react';
import './style.css';
import {Route, Switch} from 'react-router-dom';
import Nav from '../Nav';
import Welcome from '../Welcome';
import ChefLogin from '../Chef/ChefLogin';
import ChefRegister from '../Chef/ChefRegister';
import ChefProfile from '../Chef/ChefProfile';

class Main extends Component{
  render(){
    return(
      <div>
        <Nav />
        <div>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route  path="/clogin" component={ChefLogin} />
            <Route  path="/cregister" component={ChefRegister} />
            <Route  path="/cprofile" component={ChefProfile} />
          </Switch>
        </div>
      </div>
    )
  }
}
export default Main;
