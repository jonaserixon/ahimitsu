import React, { Component } from 'react';
import {Glyphicon, PageHeader, Grid, Row, Col, Breadcrumb} from 'react-bootstrap';

import {information as TrackList} from './trackinformation';

class Track extends Component {
    constructor(props) {
        super(props);
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
        if (track.google_play != null) linksToRender.buy.push(<div><a href={track.soundcloud}>Google Play</a></div>);
        if (track.bandcamp != null) linksToRender.buy.push(<div><a href={track.youtube}>Bandcamp</a></div>);
        
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
                    <Col xs={3}>
                        <div>
                            <h3 className="discography-sub-header">
                            <Glyphicon glyph="glyphicon glyphicon-music" />
                                Lyrics
                            </h3>
                            <div><a href={track.lyrics}>Lyrics document</a></div>
                        </div>
                    </Col>
                }
            }
        }

        let links = this.renderLinks(track);

        return (
            <div className="Track">
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <Breadcrumb>
                                <Breadcrumb.Item href="/#home">A Himitsu</Breadcrumb.Item>
                                <Breadcrumb.Item href="/#discography">Discography</Breadcrumb.Item>
                                <Breadcrumb.Item active>{track.title}</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <a className="header-title" name={track.title}>
                            <PageHeader>
                                {track.title}  
                            </PageHeader>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <div>
                                <h3 className="discography-sub-header">
                                    <Glyphicon glyph="glyphicon glyphicon-play" />
                                    Stream
                                </h3>

                                {links.stream}
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div>
                                <h3 className="discography-sub-header">
                                    <Glyphicon glyph="glyphicon glyphicon-download-alt" />
                                    Download
                                </h3>
                                <div><a href={track.download}>Free Download</a></div>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div>
                                <h3 className="discography-sub-header">
                                    <Glyphicon glyph="glyphicon glyphicon-credit-card" />
                                    Buy
                                </h3>
                                {links.buy}
                            </div>
                        </Col>
                        {lyrics}
                    </Row>
                    <br/>
                    <Row>
                        <Col xs={12}>
                            <p>{track.info}</p>
                        </Col>
                    </Row>

                    <Row>
                    {/* <Col md={6} mdOffset={4}> */}
                        <Col xs={12}>
                            {/* <Image width={"300px"} src={track.image} responsive rounded /> */}
                            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src={track.sc_embed.substring(0, track.sc_embed.length - 12)}></iframe>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Track;
