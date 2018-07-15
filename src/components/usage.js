import React, { Component } from 'react';

import {PageHeader, Image, Row, Col} from 'react-bootstrap';

class Usage extends Component {
    render() {
        return (
            <div className="Usage">
                <Row>
                    <Col md={12}>
                        <a className="header-title" name="usage">
                            <PageHeader>
                                Using my music  
                            </PageHeader>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p>All my music can be used in your videos on <strong>Youtube</strong>, <strong>Facebook</strong> and <strong>Instagram</strong>. You can even monetize your videos on youtube.</p>
                        <p>
                            But to be able to use my music you need to agree with the terms below and follow the steps:
                        </p>
                        <ul>
                            <li>You must give me credit when using my music (Example below)</li>
                            <li>You can not make claims that my music is yours</li>
                            <li>If you use my music outside YouTube, Facebook or Instagram you need to contact me in order to get a special permission or license</li>
                        </ul>
                        <h4>Credit example:</h4>
                        <p>Music by A Himitsu (https://www.youtube.com/channel/UCgFwu-j5-xNJml2FtTrrB3A)</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Usage;
