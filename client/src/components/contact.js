import React, { Component } from 'react';

import {PageHeader, Grid, Row, Col} from 'react-bootstrap';
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
            <Grid>
                <Row>
                    <Col xs={12}>
                        <p><strong>x.jonaz@gmail.com</strong></p>
                    </Col>
                    
                </Row>
                <Row>
                    {/* <p>Or message me on any of my social media profiles</p> */}
                    <Col xs={12}>
                        <p>
                            If you have any question regarding my song Adventures you should contact the record label at cody@argofox.com
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <p>
                            All of my music is released under the 
                            <a href="https://creativecommons.org/licenses/by/3.0/"> CC-BY license</a>, 
                            meaning that you are free to use it commercially IF you provide the necessary 
                            credits such as: <strong>Artist name</strong>, <strong>Track title</strong>, <strong>Link to my social media</strong>.
                        </p>
                    </Col>
                </Row>
            </Grid>
            </div>
        );
    }
}

export default Contact;
