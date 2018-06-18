import React, { Component } from 'react';

import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron, Button, PageHeader, Image, Panel} from 'react-bootstrap';
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

                <Panel>
                    <Panel.Heading>
                    <Panel.Title componentClass="h3">Music software</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <ul>
                            <li>FL Studio 11</li>
                            <li>Kontakt</li>
                        </ul>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default About;
