import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Login from './LoginComponent';
import Registration from './RegistrationComponent';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
          isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }  

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>NiftyFeed</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/niftyfeed-logo.png" height="30" width="30" alt="NiftyFeed" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar className="NavItem">
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                        Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/about">
                                        About
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contact">
                                        Contact Us
                                        </NavLink>
                                    </NavItem>
                                    </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Login />
                <Registration />
            </React.Fragment>
        );
    }
}

export default Header;