import React, {Component} from 'react';
import './style.css';
import {Route, Switch} from 'react-router-dom';

import Nav from '../Nav';
import Welcome from '../Welcome';

import ChefLogin from '../Chef/ChefLogin';
import ChefRegister from '../Chef/ChefRegister';
import CreateChefProfile from '../Chef/CreateProfile';
import DisplayChefs from '../Chef/DisplayAllChefs';
import ShowChef from '../Chef/ShowPage';
import EditChef from '../Chef/EditProfile';


import CoustomerLogin from '../Coustomer/CoustomerLogin';
import CoustomerRegister from '../Coustomer/CoustomerRegister';
import CoustomerProfile from '../Coustomer/CoustomerProfile';

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
            <Route  path="/cdisplay" component={DisplayChefs} />

            <Route  path="/login" component={CoustomerLogin} />
            <Route  path="/register" component={CoustomerRegister} />
            <Route path="/cosprofile" component={CoustomerProfile} />

            <Route  path="/:id" component={ShowChef} />
            <Route  path="/editC" component={EditChef} />

          </Switch>
        </div>
      </div>
    )
  }
}
export default Main;
