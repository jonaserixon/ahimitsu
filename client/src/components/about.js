import React, { Component } from 'react';

import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron, Button, PageHeader, Image, Panel, Grid, Row, Col} from 'react-bootstrap';

import studioSetup from '../pics/studio.JPG';
import ahimitsu1 from '../pics/ahimitsu1.jpg';

class About extends Component {
    render() {
        return (
            <div className="About">
            
                <Grid>
                    <Row>
                        <Col>
                            <a className="header-title" name="about">
                                <PageHeader>
                                    About me  
                                </PageHeader>
                            </a>
                        </Col>
                    </Row>
                </Grid>

                <Grid>
            
                <Row>
                    <Col xs={6}>
                        <Image rounded width={"500px"} src={studioSetup} alt={"My bedroom studio"} responsive />
                    </Col>
                    <Col xs={6}>
                        <p>
                            I first started writing music when I bought my first guitar back in 2011. 
                            But it was not until after I graduated high school in 2014 that I began producing my own music.
                            I began with a DAW called Reaper just so I could record myself playing guitar and add drum tracks over it for my band.
                            <br></br><br></br>
                            This later evolved into me finally downloading FL Studio 11 which turned out to be what is now A Himitsu.
                        </p>
                    </Col>
                    
                </Row>

                <Row>
                    {/* <Col xs={4}>
                        <Image width={"280px"} src={ahimitsu1} rounded />
                    </Col> */}
                </Row>

                {/* <Panel width={"400px"}>
                    <Panel.Heading>
                    <Panel.Title componentClass="h3">Music software that I use:</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <ul>
                            <li>FL Studio 11</li>
                            <li>Kontakt</li>
                        </ul>
                    </Panel.Body>
                </Panel> */}
            </Grid>
                <br>
                </br>
            </div>
        );
    }
}

export default About;
