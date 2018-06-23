import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Track from './components/track';
import Main from './container/main';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/tracks/:id" component={Track} />
                        <div className="container">
                            <Route path="*" component={Main} />
                        </div>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
