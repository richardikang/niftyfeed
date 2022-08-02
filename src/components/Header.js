import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navigate = useNavigate();

  return (
    <Headerstyle>
      <div>
        <Navbar dark sticky="top" expand="md">
          <div>
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="/assets/images/niftyfeed-logo.png"
                alt="NiftyFeed"
                className="Logo"
              />
            </NavbarBrand>
          </div>
          <div>
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
            <div>
              <button onClick={() => navigate("/login")}>Login</button>
            </div>
            <button onClick={() => navigate("/registration")}>
              New Account
            </button>
          </div>
        </Navbar>
      </div>
    </Headerstyle>
  );
};

const Headerstyle = styled.div`
  /* flex-shrink: 0;
  display: flex; */
  justify-content: center;
  padding-right: 260px;

  /* img {
    width: 35%;
    padding-bottom: 150px;
  } */

  /* & > div {
    flex: 1;
  } */

  /* Navbar {
    display: flex;
    flex-direction: row;
    gap: 10px;
  } */
  //
`;
// //   const

// //   .right-navbar-container {
// //     flex: 10%;
// //     display: flex;
// //     justify-content: flex-end;
// //     padding-left: 200px;
// //     gap: 100px;
// //   }
// //   .Logo {
// //     width: 160%;
// //   }
// //   .Nav-Item {
// //     text-align: center;
// //   }

export default Header;
