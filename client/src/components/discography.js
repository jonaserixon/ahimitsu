import React, { Component } from 'react';

import {Button, Panel, PanelGroup, Glyphicon, Image, PageHeader, Badge, Grid, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import {information as TrackList} from './trackinformation';

const StyledPanelGroup = styled(PanelGroup)`
  margin: 0 auto
  text-align: center
`;

class Discography extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
                        <Col xs={4}>
                            <Image rounded height={"300px"} src={TrackList[i].image} responsive />
                        </Col>


                        <Col xs={2}>
                            <div className="discography-streaming">
                                <a href={"#"}>
                                    <Glyphicon glyph="glyphicon glyphicon-play" />
                                    Stream
                                </a>
                                <div><a href={TrackList[i].soundcloud}>SoundCloud</a></div>
                                <div><a href={TrackList[i].itunes}>Apple Music</a></div>
                                <div><a href={TrackList[i].spotify}>Spotify</a></div>
                                <div><a href={TrackList[i].youtube}>YouTube</a></div>
                                <div><a href={TrackList[i].bandcamp}>Bandcamp</a></div>
                            </div>
                        </Col>

                        <Col xs={2}>
                            <div>
                                <a href={TrackList[i].google_drive}>
                                    <Glyphicon glyph="glyphicon glyphicon-download-alt" />
                                    Download
                                </a>
                            </div>
                        </Col>

                        <Col xs={2}>
                            <div>
                                <a href={TrackList[i].buy}>
                                    <Glyphicon glyph="glyphicon glyphicon-credit-card" />
                                    Buy
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <div>{TrackList[i].info}</div>
                        </Col>
                    </Row>
                    </Panel.Body>
                </Panel>
            </Grid>
            )
        }

        return (
            <div className="Discography">
                <a className="header-title" name="discography">
                <PageHeader>
                    Discography  
                    <small> Collection of previously released tracks with download and streaming links</small>
                </PageHeader>
                </a>
                <StyledPanelGroup accordion id="accordion-example">
                    {discography}
                </StyledPanelGroup>
                <br>
                </br>
            </div>
        );
    }
}

export default Discography;
