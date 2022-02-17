import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Demo from '../pages/Demo';
import Account from '../pages/Accountwizard';
import Registration from './Registration';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';

const Main = () => {
    return (
        <div>
            <Router>
                <>
                    <Switch>
                        <Route path="/registration" component={Registration} />
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/forgotpassword" component={ForgotPassword} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/demo" component={Demo} />
                        <Route exact path="/Account" component={Account} />
                        <Route path="/" component={Home} />
                    </Switch>
                </>
            </Router>
        </div>
    )
}

export default Main;
