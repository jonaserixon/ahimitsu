import React, { Component } from 'react';

import {Button, Panel, PanelGroup, Glyphicon, Image, PageHeader, Badge} from 'react-bootstrap';
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
                        <Image height={"400px"} src={TrackList[i].image} rounded />
                        <div>{TrackList[i].info}</div>
                        <div className="discography-streaming">
                            <div><a href="#">SoundCloud</a></div>
                            <div><a href="#">Apple Music</a></div>
                            <div><a href="#">Spotify</a></div>
                            <div><a href="#">YouTube</a></div>
                            <div><a href="#">Bandcamp</a></div>
                        </div>

                        <div>
                            <a href="#">
                                <Glyphicon glyph="glyphicon glyphicon-download-alt" />
                                Download
                            </a>
                        </div>

                        <div>
                            <a href="#">
                                <Glyphicon glyph="glyphicon glyphicon-credit-card" />
                                Buy
                            </a>
                        </div>
                    </Panel.Body>
                </Panel>
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

            </div>
        );
    }
}

export default Discography;
