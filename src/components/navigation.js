import React, { Component } from 'react';

import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fixedTop: true
        }
    }

    componentWillMount() {
        if (window.innerWidth < 400) {
            this.setState({fixedTop: false});
            return;
        }
        this.setState({fixedTop: true});
    }

    render() {
        return (
            <div className="Navigation">
                <Navbar fixedTop={this.state.fixedTop} >
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
                            <MenuItem eventKey={3.1} href="https://www.facebook.com/ahimitsu">Facebook</MenuItem>
                            <MenuItem eventKey={3.2} href="https://www.instagram.com/a_himitsu/">Instagram</MenuItem>
                            <MenuItem eventKey={3.3} href="https://twitter.com/ahimitsu1">Twitter</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>x.jonaz@gmail.com</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#donate">
                            Donate
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
