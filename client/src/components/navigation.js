import React, { Component } from 'react';

import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
import styled from 'styled-components';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <Navbar fixedTop >
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="/#home">A Himitsu</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="/#discography">
                            Discography
                        </NavItem>
                        <NavItem eventKey={1} href="/#about">
                            About
                        </NavItem>
                        <NavItem eventKey={2} href="/#contact">
                         Contact
                        </NavItem>
                        <NavDropdown eventKey={3} title="Social media" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1} href="#">Facebook</MenuItem>
                        <MenuItem eventKey={3.2} href="#">Instagram</MenuItem>
                        <MenuItem eventKey={3.3} href="#">Twitter</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Email subscription</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="https://www.paypal.me/ahimitsu">
                        Donate/Support
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
