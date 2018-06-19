import React, { Component } from 'react';

import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron, Button, PageHeader, Image, Panel, Grid, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import studioSetup from '../pics/studio.JPG';
import ahimitsu1 from '../pics/ahimitsu1.jpg';

class Donate extends Component {
    render() {
        return (
            <div className="Donate">
            
                <a className="header-title" name="donate">
                    <PageHeader>
                        Donate
                        <small> Support me</small>  
                    </PageHeader>
                </a>   

                <Grid>
            
                <Row>
                    <Col xs={12}>
                        <p>
                            If you want to support me more than just listening to my music
                             you could donate by using PayPal or buying my music in lossless 
                             quality on Bandcamp in a "pay-what-you-want"-pricing option.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <a href="https://www.paypal.me/ahimitsu">PayPal (Donate)</a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <a href="https://ahimitsu.bandcamp.com">Bandcamp (Pay-what-you-want)</a>
                    </Col>
                </Row>
            </Grid>
                <br>
                </br>
            </div>
        );
    }
}

export default Donate;
