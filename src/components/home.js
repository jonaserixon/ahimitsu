import React, { Component } from 'react';

import {Grid, Row, Col, Carousel} from 'react-bootstrap';

import ahimitsu from '../pics/ahimitsu.jpg';
import twoplaces from '../pics/two.jpg';
import inmyhead from '../pics/inmyhead.jpg';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Carousel>
                    <Carousel.Item>
                        <a name="home" href="/">
                            <img width={1300} height={600} alt="1300x600" src={ahimitsu} />
                        </a>
                        <Carousel.Caption>
                            <h3>A Himitsu</h3>
                            <p>Official website</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a name="home" href="/tracks/I Should Let You Go">
                            <img width={1300} height={600} alt="1300x600" src={inmyhead} />
                        </a>
                        <Carousel.Caption>
                            <h1>This is all in my head 『EP』</h1>
                            <p>3-track EP available on all common music stores</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a name="home" href="/tracks/Two Places">
                            <img width={1300} height={600} alt="1300x600" src={twoplaces} />
                        </a>
                        <Carousel.Caption>
                            <h1>Two Places</h1>
                            <p>Available on all music platforms</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Home;
