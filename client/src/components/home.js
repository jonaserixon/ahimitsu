import React, { Component } from 'react';

import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron, Button, Image, Grid, Row, Col, Carousel, Panel, Well, PageHeader} from 'react-bootstrap';
import styled from 'styled-components';

import reminisce from '../pics/reminisce.jpg';
import ahimitsu from '../pics/ahimitsu.jpg';
import twoplaces from '../pics/two.jpg';

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
                        <h1>A Himitsu</h1>
                        <p>Official website</p>
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
                    <Carousel.Item>
                        <a name="home" href="/tracks/Reminisce">
                            <img width={1300} height={600} alt="1300x600" src={reminisce} />
                        </a>
                        <Carousel.Caption>
                        <h1>Reminisce EP</h1>
                        <p>3-track EP available on all common music stores</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br>
                </br>

                <a className="header-title" name="home">
                <PageHeader>
                    A Himitsu  
                    <small> Official Website</small>
                </PageHeader>
                </a>
                <p>
                    I made this website in order to collect all the various links for streaming, 
                    downloading, buying and supporting in one place. It gets so spread out and 
                    confusing when you need to navigate to every single social media in order to access everything.
                </p>

                <br>
                </br>
                
            </div>
        );
    }
}

export default Home;
