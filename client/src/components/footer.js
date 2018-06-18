import React, { Component } from 'react';

import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
import styled from 'styled-components';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <Navbar >
                    <Nav>
                        <NavItem>
                            Website developed using ReactJS and Bootstrap by Jonas Erixon (<a href="https://github.com/jonaserixon">Github</a>)
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Footer;
