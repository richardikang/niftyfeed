import React, { useState, Fragment }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import Login from './Login';
// import Logout from './Logout';
import Registration from './Registration'

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

        return (
            <Fragment>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/niftyfeed-logo.png" alt="NiftyFeed" className="Logo"/></NavbarBrand>
                        <NavbarToggler onClick={toggleNav} />
                        <Collapse isOpen={isNavOpen} navbar className="Nav-Item">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="Nav-Home" to="/">
                                    Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="Nav-About" to="/about">
                                    About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="Nav-Contact" to="/contact">
                                    Contact
                                    </NavLink>
                                </NavItem>
                                </Nav>
                        </Collapse>
                    </div>
                            <Login />
                    {/* <Logout /> */}
                    <Registration />
                </Navbar>
            </Fragment>
        );
}

export default Header;