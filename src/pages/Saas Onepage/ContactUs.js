import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Alert, Form, Label, Input, FormGroup, Card, CardBody } from "reactstrap";

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

class ContactUs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            successMsg : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({successMsg : true});
    };
    
    render() {
        return (
            <React.Fragment>
            <Container>
                {/* section title */}
                <SectionTitle title="Masz pytania? Napisz do nas!"  />

                <Row className="align-items-center">
                    <Col lg="5" md={{size:6, order:1}} xs={{order:2}} className="mt-4 pt-2">
                        <Card className="rounded shadow border-0" data-aos="fade-up" data-aos-duration="1000">
                            <CardBody>
                                
                                
                                <div className="custom-form bg-white">
                                    <div id="message"></div>
                                    <Alert color="info" isOpen={this.state.successMsg} toggle={()=>{ this.setState({successMsg : !this.state.successMsg}) }}>
                                        Wiadomośc wysłana
                                    </Alert>
                                    <Form method="post" onSubmit={this.handleSubmit} name="contact-form" id="contact-form">
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup className="position-relative">
                                                    <Label>Imię <span className="text-danger">*</span></Label>
                                                    <i><FeatherIcon icon="user" className="fea icon-sm icons" /></i>
                                                    <Input name="name" id="name" type="text" className="form-control pl-5" placeholder="Imię :"/>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="position-relative">
                                                    <Label>E-mail <span className="text-danger">*</span></Label>
                                                    <i><FeatherIcon icon="mail" className="fea icon-sm icons" /></i>
                                                    <Input name="email" id="email2" type="email" className="form-control pl-5" placeholder="Twój e-mail :"/>
                                                </FormGroup> 
                                            </Col>
                                            <Col lg="12">
                                                <FormGroup className="position-relative">
                                                    <Label>Wiadomość</Label>
                                                    <i><FeatherIcon icon="message-circle" className="fea icon-sm icons" /></i>
                                                    <textarea name="comments" id="comments" rows="4" className="form-control pl-5" placeholder="Twoja wiadomość. P. S. : podaj nazwę firmy - będzie nam łatwiej się odnieść do Twojego pytania :"></textarea>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="12" className="text-center">
                                                <Input type="submit" id="submit" name="send" className="submitBnt btn btn-primary btn-block" value="Wyślij wiadomość"/>
                                                <div id="simple-msg"></div>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="7" md={{size:6, order:2}} xs={{order:1}} className="mt-4 pt-2 order-1 order-md-2">
                        <div className="title-heading ml-lg-4">
                            <h4 className="mb-4" data-aos="fade-up" data-aos-duration="1000">Dane kontaktowe</h4>
                            {/* <p className="text-muted" data-aos="fade-up" data-aos-duration="1400">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p> */}
                            <Card className="border-0 bg-transparent">
                                <CardBody className="p-0">
                                    <div className="contact-detail d-flex align-items-center mt-3" data-aos="fade-up" data-aos-duration="1200">
                                        <div className="icon">
                                            <i><FeatherIcon icon="mail" className="fea icon-m-md text-dark mr-3" /></i>
                                        </div>
                                        <div className="content overflow-hidden d-block">
                                            <h6 className="font-weight-bold mb-0">E-mail</h6>
                                            <Link to="#" className="text-primary">hello@upmore.pl</Link>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card className="border-0 bg-transparent">
                                <CardBody className="p-0">
                                    <div className="contact-detail d-flex align-items-center mt-3" data-aos="fade-up" data-aos-duration="1200">
                                        <div className="icon">
                                            <i><FeatherIcon icon="phone" className="fea icon-m-md text-dark mr-3" /></i>
                                        </div>
                                        <div className="content overflow-hidden d-block">
                                            <h6 className="font-weight-bold mb-0">Telefon</h6>
                                            <Link to="#" className="text-primary">537 690 900</Link>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card className="border-0 bg-transparent">
                                <CardBody className="p-0">
                                    <div className="contact-detail d-flex align-items-center mt-3" data-aos="fade-up" data-aos-duration="1200">
                                        <div className="icon">
                                            <i><FeatherIcon icon="map-pin" className="fea icon-m-md text-dark mr-3" /></i>
                                        </div>
                                        <div className="content overflow-hidden d-block">
                                            <h6 className="font-weight-bold mb-0">Lokalizacja</h6>
                                            <Link to="#" className="text-primary">Sprawdź na mapie</Link>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                            
                            <Card className="border-0 bg-transparent">
                                <CardBody className ="p-0">
                                <ul className="contact-detail d-flex align-items-center mt-3" data-aos="fade-up" data-aos-duration="1200">
                                    <li className="list-inline-item mb-0"><Link to="#" className="fea icon-m-md text-dark mr-3"><i><FeatherIcon icon="facebook" className="fea icon-sm fea-social" /></i></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="#" className="fea icon-m-md text-dark mr-3"><i><FeatherIcon icon="instagram" className="fea icon-sm fea-social" /></i></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="#" className="fea icon-m-md text-dark mr-3"><i><FeatherIcon icon="linkedin" className="fea icon-sm fea-social" /></i></Link></li>
                                    
                                </ul>
                                </CardBody>
                           
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
        );
    }
}

export default ContactUs;