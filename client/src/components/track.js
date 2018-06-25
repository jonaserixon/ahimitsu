import React, { Component } from 'react';
import {Glyphicon, PageHeader, Grid, Row, Col, Button, Image, Modal} from 'react-bootstrap';
import {information as TrackList} from './trackinformation';
import styled from 'styled-components';

import bandcamp from '../icons/bandcamp_logo.svg';
import apple from '../icons/apple.svg';
import soundcloud from '../icons/soundcloud.svg';
import spotify from '../icons/spotify.svg';
import youtube from '../icons/youtube.svg';

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

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
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

        if (track.itunes != null) linksToRender.push( this.buildTrackButton(track.itunes, 'Listen on Apple Music', apple, 'primary') )
        if (track.spotify != null) linksToRender.push( this.buildTrackButton(track.spotify, 'Listen on Spotify', spotify, 'success') )
        if (track.soundcloud != null) linksToRender.push( this.buildTrackButton(track.soundcloud, 'Listen on SoundCloud', soundcloud, 'warning') )
        if (track.bandcamp != null) linksToRender.push( this.buildTrackButton(track.bandcamp, 'Support on Bandcamp', bandcamp, 'info') )
        if (track.youtube != null) linksToRender.push( this.buildTrackButton(track.youtube, 'Listen on YouTube', youtube, 'danger') )
        
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
                        <StyledButtonCover bsStyle="primary" onClick={this.handleShow}>
                        <Glyphicon id="download-icon" glyph="glyphicon glyphicon-music" />
                            Lyrics
                        </StyledButtonCover>

                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{track.title} lyrics</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p><strong>Lyrics and vocals by {track.lyrics_author}</strong></p>
                                    <p className="lyrics">{track.lyrics}</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.handleClose}>Close</Button>
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
                            <PageHeader>
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
                                <a href={"/#/tracks/" + track.url}>
                                    <Image src={track.image} thumbnail />
                                    <Glyphicon glyph={"glyphicon glyphicon-play-circle"} />
                                </a>
                            </div>

                            <p id="release-text" >Released on {track.released}</p>
                        </Col>
                        <Col md={1}>
                        </Col>
                        <Col md={3}>
                            <h3 className="track-page-header">
                                {/* <Glyphicon glyph="glyphicon glyphicon-play" /> */}
                                <strong>{track.title}</strong> available on
                            </h3>
                            
                            {links}

                            <br />

                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                        </Col>
                        <Col md={4}>
                            <a href={track.download}>
                                <StyledButtonCover bsStyle="primary">
                                    <Glyphicon id="download-icon" glyph="glyphicon glyphicon-download-alt" />
                                    Free Download
                                </StyledButtonCover>
                            </a>

                            {lyrics}
                            <br />

                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className={"track-footer"}>
                                <a href="/">A Himitsu Official Website</a>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Track;
