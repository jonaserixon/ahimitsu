import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';

import Home from '../components/home';
import Discography from '../components/discography';
import About from '../components/about';
import Contact from '../components/contact';
import Donate from '../components/donate';
import Footer from '../components/footer';
import Navigation from '../components/navigation';

class Container extends Component {
    render() {
        return (
            <div className="Container">
                <Navigation />
                <Home />
                <Discography />
                <About />
                <Contact />
                <Donate />
                <Footer />
            </div>
        );
    }
}

export default Container;
