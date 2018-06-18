import React, { Component } from 'react';

import Home from '../components/home';
import Discography from '../components/discography';
import About from '../components/about';
import Contact from '../components/contact';

class Container extends Component {
    render() {
        return (
            <div className="Container">
                <Home />
                <Discography />
                <About />
                <Contact />
            </div>
        );
    }
}

export default Container;
