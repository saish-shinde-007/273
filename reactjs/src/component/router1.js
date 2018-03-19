import React, {Component} from 'react';
import {Route,Router, Switch} from 'react-router-dom';
import login from "./login";
import Signup from "./Signup";
import Home from "./Home";
import postproject from "./postproject";
import profile from "./profile";

import bids from "./bids";
import myproject from "./myproject";
import history from "./history";
import dashboard from "./dashboard";

class router1 extends Component {
    render() {
        return (
            <Router history={history}>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route  path='/login' component={login}/>
                <Route  path='/signup' component={Signup}/>
                <Route  path='/profile' component={profile}/>
                <Route path='/postproject' component={postproject}/>
                <Route path='/myproject' component={myproject}/>
                <Route  path='/dashboard' component={dashboard}/>
                <Route  path='/bids' component={bids}/>
            </Switch>
            </Router>
        );

    }
}
export default router1;