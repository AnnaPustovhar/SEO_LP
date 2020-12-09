import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";

//Import Icons
import FeatherIcon from 'feather-icons-react';

class FooterWithoutMenuLightSocialOnly extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <footer className={"footer footer-bar " + this.props.class}>
                    <Container className="text-center">
                        <Row className="align-items-center">
                            <Col sm="6">
                                <div className="text-sm-left">
                                    <p className="mb-0">© 2014-20 Up&More. Developed by <a href="https://upmore.pl/?gclid=Cj0KCQiA5bz-BRD-ARIsABjT4ngvyXUM_dd8mzfI-WbXBwWzfuK96KXI6CNGoXLI0KUetgZF0gmAtEkaAuC7EALw_wcB" target="_blank"  rel="noopener noreferrer"  className="text-success">Up&More</a>.</p>
                                </div>
                            </Col>

                            <Col sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <ul className="list-unstyled social-icon social text-sm-right mb-0">
                                    <li className="list-inline-item mb-0"><a href="https://www.facebook.com/upmorepl" target="_blank"   rel="noopener noreferrer" className="rounded mr-1"><i><FeatherIcon icon="facebook" className="fea icon-sm fea-social" /></i></a></li>
                                    <li className="list-inline-item mb-0"><a href="https://www.instagram.com/agencja_upmore/" target="_blank"   rel="noopener noreferrer"  className="rounded mr-1"><i><FeatherIcon icon="instagram" className="fea icon-sm fea-social" /></i></a></li>
                                    <li className="list-inline-item mb-0"><a href="https://pl.linkedin.com/company/up&more" target="_blank"   rel="noopener noreferrer"  className="rounded mr-1"><i><FeatherIcon icon="linkedin" className="fea icon-sm fea-social" /></i></a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </React.Fragment>
        );
    }
}

export default FooterWithoutMenuLightSocialOnly;
