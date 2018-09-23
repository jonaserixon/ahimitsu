import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import TrackPage from './components/TrackPage';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/tracks/:id" component={TrackPage} />
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
