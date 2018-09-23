import React, { Component } from 'react';
import Discography from './Discography';
import Navigation from './Navigation';
import UseMusic from './UseMusic';
import Contact from './Contact';

class Container extends Component {
    render() {
        return (
            <div className="Container">
                <Navigation />
                <Discography />
                <UseMusic />
                <Contact />
            </div>
        );
    }
}

export default Container;