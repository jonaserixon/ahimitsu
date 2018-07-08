import React, { Component } from 'react';

import {PageHeader, Image, Grid, Row, Col} from 'react-bootstrap';

import paypal from '../icons/paypal.svg';
import bandcamp from '../icons/bandcamp.svg';

class Donate extends Component {
    render() {
        return (
            <div className="Donate">
                <Row>
                    <Col md={12}>
                        <a className="header-title" name="donate">
                            <PageHeader>
                                Donate / Support
                            </PageHeader>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p>
                            If you want to support me more than just listening to my music
                             you could donate by using PayPal or buying my music in lossless 
                             quality from Bandcamp in a "Pay-What-You-Want"-pricing option.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <a href="https://www.paypal.me/ahimitsu">
                            <Image height={"30px"} src={paypal} />
                        </a>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={12}>
                        <a href="https://ahimitsu.bandcamp.com">
                            <Image height={"20px"} src={bandcamp} />
                        </a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Donate;
