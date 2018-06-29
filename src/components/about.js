import React, { Component } from 'react';

import {PageHeader, Image, Grid, Row, Col} from 'react-bootstrap';

import studioSetup from '../pics/studio.JPG';

class About extends Component {
    render() {
        return (
            <div className="About">
            
                <Grid>
                    <Row>
                        <Col md={12}>
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
                    <Col md={6}>
                        <Image rounded width={"500px"} src={studioSetup} alt={"My bedroom studio"} responsive />
                    </Col>
                    <Col md={6}>
                        <p>
                            I first started writing music when I bought my first guitar back in 2011. 
                            But it was not until after I graduated high school in 2014 that I began producing my own music.
                            I began with a DAW called Reaper just so I could record myself playing guitar and add drum tracks over it for my band.
                            <br></br><br></br>
                            This later evolved into me finally downloading FL Studio 11 which turned out to be what is now A Himitsu.
                        </p>
                    </Col>
                </Row>
            </Grid>
                <br>
                </br>
            </div>
        );
    }
}

export default About;
