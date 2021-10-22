import React, { useState, Fragment }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
                        <Collapse isOpen={isNavOpen} navbar className="NavItem">
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
            </Fragment>
        );
}

export default Header;