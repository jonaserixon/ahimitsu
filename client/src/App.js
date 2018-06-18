import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import Discography from './components/discography';
import Contact from './components/contact';
import Navigation from './components/navigation';
import Track from './components/track';
import Footer from './components/footer';

import Main from './container/main';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navigation />

                    <Switch>
                        <Route path="/tracks/:id" component={Track} />
                        <div className="container">
                            <Route path="*" component={Main} />
                        </div>
                    </Switch>

                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
