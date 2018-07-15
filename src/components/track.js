import React, { Component } from 'react';
import {Glyphicon, PageHeader, Grid, Row, Col, Button, Image, Modal} from 'react-bootstrap';
import {information as TrackList} from './trackinformation';
import styled from 'styled-components';

import bandcamp from '../icons/bandcamp_logo.svg';
import apple from '../icons/apple.svg';
import soundcloud from '../icons/soundcloud.svg';
import spotify from '../icons/spotify.svg';
import youtube from '../icons/youtube.svg';
import ccby from '../icons/ccby.svg';

const StyledButton = styled(Button)`
  border-radius: 20px
  width: 100%
  margin-bottom: 10px
  text-align: center
`;

const StyledButtonCover = styled(Button)`
    border-radius: 20px
    width: 150px
    margin-bottom: 10px
    text-align: center
`;

const widthIcon = '30px';

class Track extends Component {
    constructor(props) {
        super(props);

        this.handleShowLyrics = this.handleShowLyrics.bind(this);
        this.handleCloseLyrics = this.handleCloseLyrics.bind(this);
        this.handleShowTerms = this.handleShowTerms.bind(this);
        this.handleCloseTerms = this.handleCloseTerms.bind(this);
    
        this.state = {
          showLyrics: false,
          showTerms: false,
        };
    }

    handleCloseTerms() {
        this.setState({ showTerms: false });
    }

    handleShowTerms() {
        this.setState({ showTerms: true });
    }

    handleCloseLyrics() {
        this.setState({ showLyrics: false });
    }

    handleShowLyrics() {
        this.setState({ showLyrics: true });
    }

    componentDidMount() {
        // window.history.replaceState(null, null, window.location.pathname);
        // document.title = 'A Himitsu - ' + this.state.title;
    }

    buildTrackButton(url, message, icon, buttonType) {
        let trackButton = <div>
            <a href={url}>
                <StyledButton bsStyle={buttonType}>
                    <Row>
                        <Col xs={2}>
                            <Image className={"track-icon"} width={widthIcon} src={icon} />
                        </Col>
                        <Col xs={10}>
                            <p className="track-text">{message}</p>
                        </Col>
                    </Row>
                </StyledButton>
            </a>
        </div>;

        return trackButton;
    }

    renderLinks(track) {
        const linksToRender = [];

        if (track.spotify != null) linksToRender.push( this.buildTrackButton(track.spotify, 'Listen on Spotify', spotify, 'success') )
        if (track.soundcloud != null) linksToRender.push( this.buildTrackButton(track.soundcloud, 'Stream on SoundCloud', soundcloud, 'warning') )
        if (track.itunes != null) linksToRender.push( this.buildTrackButton(track.itunes, 'Listen on Apple Music', apple, 'primary') )
        if (track.youtube != null) linksToRender.push( this.buildTrackButton(track.youtube, 'Watch on YouTube', youtube, 'danger') )
        if (track.bandcamp != null) linksToRender.push( this.buildTrackButton(track.bandcamp, 'Support on Bandcamp', bandcamp, 'info') )
        return linksToRender;
    }
    
    render() {
        let track;
        let lyrics;

        for (let key in TrackList) {
            if (TrackList[key].url === this.props.match.params.id) {
                track = TrackList[key];

                if (TrackList[key].lyrics) {
                    lyrics =
                    <div>
                        <StyledButtonCover bsStyle="default" onClick={this.handleShowLyrics}>
                        <Glyphicon id="download-icon" glyph="glyphicon glyphicon-music" />
                            Lyrics
                        </StyledButtonCover>

                            <Modal show={this.state.showLyrics} onHide={this.handleCloseLyrics}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{track.title} lyrics</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p><strong>Lyrics and vocals by {track.lyrics_author}</strong></p>
                                    <p className="lyrics">{track.lyrics}</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.handleCloseLyrics}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                }
            }
        }

        let links = this.renderLinks(track);

        return (
            <div className="Track">
                <Grid>
                    <Row>
                        <Col>
                            <a className="header-title" name={track.title}>
                            <PageHeader className="track-header">
                                {track.title}
                                <br />
                                <small>A Himitsu</small>
                            </PageHeader>
                            </a>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={2}>

                        </Col>
                        <Col md={4}>
                            <div className="overlay-wrapper">
                                <a href={"/ahimitsu/#/tracks/" + track.url}>
                                    <Image src={track.image} thumbnail />
                                    <Glyphicon glyph={"glyphicon glyphicon-play-circle"} />
                                </a>
                            </div>

                            <p id="release-text">Released on {track.released}</p>
                        </Col>
                        <Col md={1}>
                        </Col>
                        <Col md={3}>
                            <h3 className="track-page-header">
                                Available on:
                            </h3>
                            
                            {links}
                            {/* <div>
                                <p>
                                    <strong>{track.title}</strong> is licensed under a   <a href="https://creativecommons.org/licenses/by/3.0/"><Image src={ccby} width={"15px"}/> Creative Commons license</a>
                                </p>
                            </div>
                            <br /> */}

                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                        </Col>
                        <Col md={4}>
                            <a href={track.download}>
                                <StyledButtonCover bsStyle="default">
                                    <Glyphicon id="download-icon" glyph="glyphicon glyphicon-download-alt" />
                                    Free Download
                                </StyledButtonCover>
                            </a>

                            {lyrics}

                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col md={12}>
                        <StyledButtonCover bsStyle="primary" onClick={this.handleShowTerms}>
                            <strong> Music terms of use </strong>
                        </StyledButtonCover>

                            <Modal show={this.state.showTerms} onHide={this.handleCloseTerms}>
                                <Modal.Header closeButton>
                                    <Modal.Title>A Himitsu music terms of use</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>All my music can be used in your videos on <strong>Youtube</strong>, <strong>Facebook</strong> and <strong>Instagram</strong>. You are even allowed to monetize your YouTube videos.</p>
                                    <p><strong>
                                        But to be able to use my music you need to agree with the terms below and follow the steps:
                                    </strong>
                                    </p>
                                    <ul>
                                        <li>You must give me credit when using my music (Example below)</li>
                                        <li>You can not make claims that my music is yours</li>
                                        <li>If you use my music outside YouTube, Facebook or Instagram you need to contact me in order to get a special permission or license</li>
                                    </ul>
                                    <br />
                                    <h4>Credit example:</h4>
                                    <p>Music by A Himitsu (https://www.youtube.com/channel/UCgFwu-j5-xNJml2FtTrrB3A)</p>
                                    <p>Or</p>
                                    <p>Music: A Himitsu + [Name of song] + [Link to any of my social medias]</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.handleCloseTerms}>Close</Button>
                                </Modal.Footer>
                            </Modal>    
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col md={12}>
                            <div className={"track-footer"}>
                                <a href="/ahimitsu">A Himitsu Official Website</a>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Track;
