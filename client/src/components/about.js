import React, { Component } from 'react';

import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron, Button, PageHeader, Image} from 'react-bootstrap';
import styled from 'styled-components';

import studioSetup from '../pics/studio.JPG';

class About extends Component {
    render() {
        return (
            <div className="About">
                <a className="header-title" name="about">
                    <PageHeader>
                        About me  

                    </PageHeader>
                </a>               
                
                <Image src={studioSetup} rounded />

                <p>
                    I started producing music the summer after I graduated from high school back in 2014
                </p>
            </div>
        );
    }
}

export default About;
