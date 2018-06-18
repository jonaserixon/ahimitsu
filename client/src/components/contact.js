import React, { Component } from 'react';

import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron, Button, PageHeader} from 'react-bootstrap';
import styled from 'styled-components';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <a className="header-title" name="contact">
                    <PageHeader>
                        Contact  
                        <small> Regarding my music</small>
                    </PageHeader>
                </a>               
                <p>Email: x.jonaz@gmail.com</p>
                <p>Or message me on any of my social media profiles</p>
                <p>If you have any question regarding my song Adventures you should contact the record label at cody@argofox.com</p>
            </div>
        );
    }
}

export default Contact;
