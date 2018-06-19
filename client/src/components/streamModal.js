import React, { Component } from 'react';
import {Button, Panel, PanelGroup, Glyphicon, Image, PageHeader, Badge, Grid, Row, Col, Modal} from 'react-bootstrap';

class StreamModal extends Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: props.show
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div className="StreamModal">
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Stream {this.props.title} here</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Streams</h4>
                        <div><a href={this.props.soundcloud}>SoundCloud</a></div>
                        <div><a href={this.props.itunes}>Apple Music</a></div>
                        <div><a href={this.props.spotify}>Spotify</a></div>
                        <div><a href={this.props.youtube}>YouTube</a></div>
                        <div><a href={this.props.bandcamp}>Bandcamp</a></div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default StreamModal;
