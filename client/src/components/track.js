import React, { Component } from 'react';

import {information as TrackList} from './trackinformation';

class Track extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.history.replaceState(null, null, window.location.pathname);

    }
    
    render() {

        let track;

        for (let key in TrackList) {
            if (TrackList[key].title === this.props.match.params.id) {
                track = TrackList[key];

                if (TrackList[key].lyrics) {
                    
                }
            }
        }

        return (
            <div className="Track">
                <h1>{track.title}</h1>
            </div>
        );
    }
}

export default Track;
