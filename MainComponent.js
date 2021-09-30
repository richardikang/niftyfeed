
import React from 'react'
import Home from './HomeComponent';
import About from './AuthenticationComponent'
// import Contact from './ContactComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Dashboard from './Dashboard';
import { Switch, Route, Redirect } from 'react-router-dom';


function Main() {

    return (
        <div>
            <Header />
               <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/dashboard'><Dashboard/></Route>
                    {/* <Route exact path='/contact' render={() => <Contact  /> } /> */}
                    <Route exact path='/about' render={() => <About /> } />
                    <Redirect to='/home' />
                </Switch>     
            <Footer />
        </div>
    )
}

export default Main
