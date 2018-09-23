import React, { Component } from 'react';
import {content} from '../content';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import bandcamp from '../icons/bandcamp_logo.svg';
import apple from '../icons/apple.svg';
import soundcloud from '../icons/soundcloud.svg';
import spotify from '../icons/spotify.svg';
import youtube from '../icons/youtube.svg';
import download from '../icons/download.png';
import Avatar from '@material-ui/core/Avatar';
import LyricModal from './LyricModal';
import UsageModal from './UsageModal';

const styles = theme => ({
    button: {
        fontWeight: 'bold', 
        color: 'white', 
        // width: '28vh', 
        fontAlign: 'center',
        marginBottom: '10px',
        position: 'relative'
    },
    header: {
        marginTop: '0px',
        fontSize: '5vh'
    }
});

class TrackPage extends Component {
    state = {
        isLyricsOpen: false,
        isUsageOpen: false
    };
  
    handleLyricsOpen = () => {
        this.setState({ isLyricsOpen: true });
    };
  
    handleLyricsClose = () => {
        this.setState({ isLyricsOpen: false });
    };

    handleUsageOpen = () => {
        this.setState({ isUsageOpen: true });
    };
  
    handleUsageClose = () => {
        this.setState({ isUsageOpen: false });
    };

    buildTrackButton(url, message, icon, buttonType) {
        const { classes } = this.props;
        let trackButton = <div>
            <a href={url} style={{textDecoration:'none'}}>
                <Button id='link-button' variant='contained' style={{backgroundColor: '#' + buttonType}}>
                <img src={icon} style={{width: '30px', position: 'absolute', left: '5px'}}/>
                    {message}
                </Button>
            </a>
        </div>;

        return trackButton;
    }

    renderLinks(track) {
        const linksToRender = [];

        if (track.spotify != null) linksToRender.push( this.buildTrackButton(track.spotify, 'Spotify', spotify, '419641') )
        if (track.soundcloud != null) linksToRender.push( this.buildTrackButton(track.soundcloud, 'SoundCloud', soundcloud, 'eb9316') )
        if (track.itunes != null) linksToRender.push( this.buildTrackButton(track.itunes, 'Apple Music', apple, '265a88') )
        if (track.youtube != null) linksToRender.push( this.buildTrackButton(track.youtube, 'YouTube', youtube, 'c12e2a') )
        if (track.bandcamp != null) linksToRender.push( this.buildTrackButton(track.bandcamp, 'Bandcamp', bandcamp, '2aabd2') )
        return linksToRender;
}

    render() {
        const { classes } = this.props;
        let track;
        for (let key in content) {
            if (content[key].url === this.props.match.params.id) {
                track = content[key];
            }
        }

        let links = this.renderLinks(track);

        return (
            <div className='TrackPage'>
            <LyricModal isOpen={this.state.isLyricsOpen} handleClose={this.handleLyricsClose} track={track} /> 
            <UsageModal isOpen={this.state.isUsageOpen} handleClose={this.handleUsageClose}/> 
                <h1 id="track-page-header" >A Himitsu</h1>
                <h2 id="track-page-subheader" >{track.title}</h2>
                <div id='track-container'>
                    <img src={track.image} style={{width: '270px'}}/>
                    {links}
                    <br/>
                    <br/>
                    <div>
                    <a href={track.google_drive} style={{textDecoration:'none'}}>
                    <Button variant='contained' color='default' id='link-button'>
                        <img src={download} style={{width: '30px', position: 'absolute', left: '5px'}}/>

                        Free Download
                    </Button>
                    </a>
                    </div>

                    {track.hasLyrics ? (<div>
                    <Button variant='contained' color='secondary' id='link-button' onClick={this.handleLyricsOpen}>
                        Lyrics
                    </Button>
                    </div>) : null}
                    
                    <br/>
                    <br/>
                    <div>
                    <Button variant='contained' color='primary' id='link-button' onClick={this.handleUsageOpen}>
                        Using this song
                    </Button>
                    </div>
                    <br/>
                    <br/>
                    <div id="footerDiv">
                        <a href="#">Visit main site</a>
                    </div>
                </div>
            </div>
        );
    };
}

TrackPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrackPage);
