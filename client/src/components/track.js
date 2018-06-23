import React, { Component } from 'react';
import {Glyphicon, PageHeader, Grid, Row, Col, Breadcrumb, Button, Image, Modal} from 'react-bootstrap';
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
    width: 100%
    margin-bottom: 10px
    text-align: center
`;

class Track extends Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
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
    }

    renderLinks(track) {
        const linksToRender = {
            stream: [],
            buy: []
        }

        //Stream
        if (track.itunes != null) linksToRender.stream.push(<div><a href={track.itunes}>Apple Music</a></div>);
        if (track.soundcloud != null) linksToRender.stream.push(<div><a href={track.soundcloud}>SoundCloud</a></div>);
        if (track.youtube != null) linksToRender.stream.push(<div><a href={track.youtube}>YouTube</a></div>);
        if (track.spotify != null) linksToRender.stream.push(<div><a href={track.spotify}>Spotify</a></div>);

        //Buy
        if (track.itunes != null) linksToRender.buy.push(<div><a href={track.itunes}>iTunes</a></div>);
        if (track.google_play != null) linksToRender.buy.push(<div><a href={track.google_play}>Google Play</a></div>);
        if (track.bandcamp != null) linksToRender.buy.push(<div><a href={track.bandcamp}>Bandcamp</a></div>);
        
        return linksToRender;
    }
    
    render() {
        let track;
        let lyrics;

        for (let key in TrackList) {
            if (TrackList[key].title === this.props.match.params.id) {
                track = TrackList[key];


                if (TrackList[key].lyrics) {
                    lyrics = 
                    <div>
                        <StyledButtonCover bsStyle="default" onClick={this.handleShow}>
                            Lyrics
                        </StyledButtonCover>

                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{track.title} lyrics</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h4>
                                        Text in a modal
                                    </h4>

                                    <p>
                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                    </p>

                                    <hr />

                                    <h4>
                                        Overflowing text to show scroll behavior
                                    </h4>

                                    <p>
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                        ac consectetur ac, vestibulum at eros.
                                    </p>

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
                                <a href={"/#/tracks/" + track.title}>
                                    <Image src={track.image} thumbnail />
                                    <Glyphicon glyph={"glyphicon glyphicon-play-circle"} />
                                </a>
                            </div>

                            <p id="release-text" >Released on {track.released}</p>
                        </Col>
                        <Col md={4}>
                            <h3 className="track-page-header">
                                {/* <Glyphicon glyph="glyphicon glyphicon-play" /> */}
                                <strong>{track.title}</strong> available on
                            </h3>
                            
                            <div><StyledButton bsStyle="primary">
                            <Row>
                                <Col xs={2}>
                                    <Image className={"track-icon"} width={"100%"} src={apple} />
                                </Col>
                                <Col xs={10}>
                                    <p className="track-text">Listen on Apple Music</p>
                                </Col>
                            </Row>

                            </StyledButton></div>
                            
                            <div><StyledButton bsStyle="success">
                                <Row>
                                    <Col xs={2}>
                                        <Image className={"track-icon"} width={"100%"} src={spotify} />
                                    </Col>
                                    <Col xs={10}>
                                        <p className="track-text">Listen on Spotify</p>
                                    </Col>
                                </Row>
                            </StyledButton></div>

                            <div><StyledButton bsStyle="warning">
                                <Row>
                                    <Col xs={2}>
                                        <Image className={"track-icon"} width={"100%"} src={soundcloud} />
                                    </Col>
                                    <Col xs={10}>
                                        <p className="track-text">Listen on SoundCloud</p>
                                    </Col>
                                </Row>
                            </StyledButton></div>

                            <div><StyledButton bsStyle="info">
                                <Row>
                                    <Col xs={2}>
                                        <Image className={"track-icon"} width={"100%"} src={bandcamp} />
                                    </Col>
                                    <Col xs={10}>
                                        <p className="track-text">Support on Bandcamp</p>
                                    </Col>
                                </Row>
                            </StyledButton></div>

                            <div><StyledButton bsStyle="danger">
                                <Row>
                                    <Col xs={2}>
                                        <Image className={"track-icon"} width={"100%"} src={youtube} />
                                    </Col>
                                    <Col xs={10}>
                                        <p className="track-text">Listen on YouTube</p>
                                    </Col>
                                </Row>
                            </StyledButton></div>

                            <br />
                            <br />
                            <br />

                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                        </Col>
                        <Col md={4}>
                        <StyledButtonCover bsStyle="default">Free Download</StyledButtonCover>
                        {lyrics}
                        </Col>
                    </Row>
                    <Row>
                        <p>Footer bar här, med länk till main webbsidan</p>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Track;
