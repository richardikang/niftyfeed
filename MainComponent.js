import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

const mapStateToProps = state => {
    return {
        comments: state.comments,
        favorites: state.favorites
    };
};

class Main extends Component {

    render() {
        
        const HomePage = () => {
            return (
                <Home />
            )
        }
    }
        
 }

 return (
    <div>
        <Header component={Header}/>
                    <Switch>
                        <Route path='/home' component={HomePage} />
                         <Route exact path='/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} /> } component={Contact} />
                        <Route exact path='/aboutus' component={About} />
                        <Redirect to='/home' />
                    </Switch>
        <Footer component={Footer}/>
    </div>
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));