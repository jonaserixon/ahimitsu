import React, { Component } from 'react';

import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron, Button, PageHeader, Image, Panel, Grid, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import paypal from '../icons/paypal.svg';
import bandcamp from '../icons/bandcamp.svg';

class Donate extends Component {
    render() {
        return (
            <div className="Donate">
            
                <Grid>
                    <Row>
                        <Col>
                            <a className="header-title" name="donate">
                                <PageHeader>
                                    Donate
                                    {/* <small> Support me</small>   */}
                                </PageHeader>
                            </a>
                        </Col>
                    </Row>
                </Grid>

                <Grid>
            
                <Row>
                    <Col xs={12}>
                        <p>
                            If you want to support me more than just listening to my music
                             you could donate by using PayPal or buying my music in lossless 
                             quality from Bandcamp in a "Pay-What-You-Want"-pricing option.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <a href="https://www.paypal.me/ahimitsu">
                            <Image height={"30px"} src={paypal} />
                        </a>
                    </Col>
                </Row>
                <br>
                </br>
                <Row>
                    <Col xs={12}>
                        <a href="https://ahimitsu.bandcamp.com">
                            <Image height={"20px"} src={bandcamp} />
                        </a>
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
