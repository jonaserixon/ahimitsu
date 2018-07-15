import React, { Component } from 'react';

import {PageHeader, Row, Col} from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <Row>
                    <Col>
                        <a className="header-title" name="contact">
                            <PageHeader>
                                Contact  
                            </PageHeader>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <p><strong>x.jonaz@gmail.com</strong></p>
                    </Col>
                    
                </Row>
                <Row>
                    <Col xs={12}>
                        <p>
                            If you have any question regarding my song Adventures you should contact the record label at cody@argofox.com
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <p>
                        </p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Contact;
