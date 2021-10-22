import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import About from './About';
import Contact from './Contact';
import Home from './Home';
import Header from './Header';

const Main = () => {
    return (
        <div className="Home">
            <Header />
            <Router>
                <>
                    <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                        <Redirect to='/home' />
                    </Switch>
                </>
            </Router>
        </div>
    )
}

export default Main;

/*
Move Contact and About to pages
Format/Fix any errors that eslint will throw
Fix the login form
Get rid of packages you're not using
Fix layout styles
Start using git on a daily basis
Get rid of hookrouter and just use the basic implementatio from react-router-dom

*/