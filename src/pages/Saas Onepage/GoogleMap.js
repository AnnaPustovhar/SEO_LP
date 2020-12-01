import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class GoogleMap extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="mt-100 mt-60" fluid>
                        <Row>
                            <Col xs="12" className="p-0">
                                <div className="map">
                                    <iframe title="uniqueTitle" src="https://maps.google.com/maps?q=krasickiego%2011%2C%20warszawa&t=&z=17&ie=UTF8&iwloc=&output=embed" style={{border:"0"}} allowFullScreen></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </React.Fragment>
        );
    }
}

export default GoogleMap