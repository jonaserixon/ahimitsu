import React, { Component } from 'react';

import {Panel, PanelGroup, Glyphicon, Image, PageHeader, Badge, Grid, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import {information as TrackList} from './trackinformation';

const StyledPanelGroup = styled(PanelGroup)`
  margin: 0 auto
  text-align: center
`;

class Discography extends Component {
    constructor(props) {
        super(props);
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
        let discography = [];
        
        for (let i in TrackList) {
            let links = this.renderLinks(TrackList[i]);

            discography.push(
                <Panel eventKey={i}>
                    <Panel.Heading>
                    <Panel.Title toggle>
                        <Glyphicon glyph="glyphicon glyphicon-music" id="discography-glyphicon" />
                        <a name={TrackList[i].title} href="#"><strong>{TrackList[i].title}</strong></a>
                        <Badge pullRight>{i}</Badge>
                        <p className="discography-date" >{TrackList[i].released}</p>
                    </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>

                    <Row>
                        <div className="discography-row">
                            <Col md={3}>
                                <Image width={"150px"} height={"150px"} src={TrackList[i].image} rounded />
                            </Col>

                            <Col md={3}>
                                <div>
                                    <h3 className="discography-sub-header">
                                        <Glyphicon glyph="glyphicon glyphicon-play" />
                                        Stream
                                    </h3>
                                    {links.stream}
                                </div>
                            </Col>

                            <Col md={3}>
                                <div>
                                    <h3 className="discography-sub-header">
                                        <Glyphicon glyph="glyphicon glyphicon-download-alt" />
                                        Download
                                    </h3>

                                    <div><a href={TrackList[i].download}>Free Download</a></div>
                                </div>
                            </Col>

                            <Col md={3}>
                                <div>
                                    <h3 className="discography-sub-header">
                                        <Glyphicon glyph="glyphicon glyphicon-credit-card" />
                                        Buy
                                    </h3>
                                    {links.buy}
                                </div>
                            </Col>
                        </div>
                    </Row>
                    <Row>
                        <Col md={12}>

                            <a className={"fullscreen"} href={"/ahimitsu/#/tracks/" + TrackList[i].url}>
                                <Glyphicon glyph="glyphicon glyphicon-new-window" />
                                Track Page
                            </a>
                        </Col>
                    </Row>
                    </Panel.Body>
                </Panel>
            )
        }

        return (
            <div className="Discography">
                <Row>
                    <Col>
                        <a className="header-title" name="discography">
                        <PageHeader>
                            Discography  
                        </PageHeader>
                        </a>
                    </Col>
                </Row>

                <StyledPanelGroup accordion id="accordion-example">
                    {discography}
                </StyledPanelGroup>
            </div>
        );
    }
}

export default Discography;
