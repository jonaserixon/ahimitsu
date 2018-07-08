import React, { Component } from 'react';

import {Navbar, NavItem, Nav} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <hr/>
                <p>Website made by Jonas Erixon 2018 (<a href="https://github.com/jonaserixon">Github</a>)</p>
            </div>
        );
    }
}

export default Footer;
