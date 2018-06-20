import React, { Component } from 'react';

import {Button, Panel, PanelGroup, Glyphicon, Image, PageHeader, Badge, Grid, Row, Col, Modal} from 'react-bootstrap';
import styled from 'styled-components';

import {information as TrackList} from './trackinformation';

import StreamModal from './streamModal';

const StyledPanelGroup = styled(PanelGroup)`
  margin: 0 auto
  text-align: center
`;

class Discography extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let discography = [];
        for (let i in TrackList) {
            discography.push(
            <Grid>
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
                        <Col xs={2}>
                            <Image width={"150px"} height={"150px"} src={TrackList[i].image} rounded responsive />
                        </Col>

                        <Col xs={2}>
                            <div>
                                <h3 className="discography-sub-header">
                                    <Glyphicon glyph="glyphicon glyphicon-play" />
                                    Stream
                                </h3>

                                <div><a href={TrackList[i].soundcloud}>SoundCloud</a></div>
                                <div><a href={TrackList[i].itunes}>Apple Music</a></div>
                                <div><a href={TrackList[i].spotify}>Spotify</a></div>
                                <div><a href={TrackList[i].youtube}>YouTube</a></div>
                                <div><a href={TrackList[i].bandcamp}>Bandcamp</a></div>
                            </div>
                        </Col>

                        <Col xs={2}>
                            <div>
                                <h3 className="discography-sub-header">
                                    <Glyphicon glyph="glyphicon glyphicon-download-alt" />
                                    Download
                                </h3>

                                <div><a href={TrackList[i].google_drive}>Google Drive</a></div>
                                <div><a href={TrackList[i].download}>Stereload</a></div>
                                <div><a href={TrackList[i].bandcamp}>Bandcamp</a></div>
                            </div>
                        </Col>

                        <Col xs={2}>
                            <div>
                                <h3 className="discography-sub-header">
                                    <Glyphicon glyph="glyphicon glyphicon-credit-card" />
                                    Buy
                                </h3>

                                <div><a href={TrackList[i].itunes}>iTunes</a></div>
                                <div><a href={TrackList[i].bandcamp}>Bandcamp</a></div>
                                <div><a href={TrackList[i].google_play}>Google Play</a></div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2}>
                            <div>{TrackList[i].info}</div>
                        </Col>
                        <Col xs={10}>
                            <a className={"fullscreen"} href={"/#/tracks/" + TrackList[i].title}><Glyphicon title={"Fullscreen"} glyph="glyphicon glyphicon-fullscreen" /></a>
                        </Col>
                    </Row>
                    </Panel.Body>
                </Panel>
            </Grid>
            )
        }

        return (
            <div className="Discography">
                <Grid>
                    <Row>
                        <Col>
                            <a className="header-title" name="discography">
                            <PageHeader>
                                Discography  
                                {/* <small> Collection of previously released tracks with download and streaming links</small> */}
                            </PageHeader>
                            </a>
                        </Col>
                    </Row>
                </Grid>

                <StyledPanelGroup accordion id="accordion-example">
                    {discography}
                </StyledPanelGroup>
                <br/>
            </div>
        );
    }
}

export default Discography;
