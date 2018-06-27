import React, { Component } from 'react';

import {Navbar, NavItem, Nav} from 'react-bootstrap';

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
