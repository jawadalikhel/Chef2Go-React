import React, {Component} from 'react';
import './style.css';
import {Route, Switch} from 'react-router-dom';
import Nav from '../Nav';
import Welcome from '../Welcome';
import ChefLogin from '../Chef/ChefLogin';
import ChefRegister from '../Chef/ChefRegister';
import ChefProfile from '../Chef/ChefProfile';

import CoustomerLogin from '../Coustomer/Login';
import CoustomerRegister from '../Coustomer/Register';
import CoustomerProfile from '../Coustomer/Profile';

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

            <Route  path="/login" component={CoustomerLogin} />
            <Route  path="/register" component={CoustomerRegister} />
            <Route  path="/profile" component={CoustomerProfile} />
          </Switch>
        </div>
      </div>
    )
  }
}
export default Main;
