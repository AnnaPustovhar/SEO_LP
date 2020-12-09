import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Badge, Modal,Alert, Card, CardBody, ModalHeader, ModalBody, Form, FormGroup, Input, Button, Label } from "reactstrap";


//Import Icons
import FeatherIcon from 'feather-icons-react';

import mobileNotification from "../../assets/images/illustrator/Mobile_notification_SVG.svg";


class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal : false,
        }
        this.togglemodal.bind(this);
        this.state = {
            successMsg : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    handleSubmit(event) {
        event.preventDefault();
        this.setState({successMsg : true});
    };
    render() {
        return (
            <React.Fragment>
                    {
                        this.props.pricings.map((pricing, key) =>
                            <Col name="pricing" lg="6" md="6" xs="16" key={key} className="mt-4 pt-2">
                                <Card name="pricingbox" className={ pricing.isActive ? "pricing-rates business-rate shadow bg-white border-0 rounded" : "pricing-rates business-rate shadow bg-light border-0 rounded"}>
                                    <CardBody>
                                    <h2 className={pricing.isActive ? "title text-uppercase text-primary mb-4" : "title text-uppercase mb-4"}>{pricing.title}</h2>
                                    <div className="d-flex mb-4" name="pricingsection">
                                        <span className="h4 mb-0 mt-2"></span>
                                        <span className="price h1 mb-0">{pricing.price}</span>
                                        <span className="h5 align-self-end mb-1">{pricing.duration}</span>
                                    </div>
                                    
                                    <ul className="feature list-unstyled pl-0">
                                        {
                                            pricing.features.map((feature, key) =>
                                                <li key={key} className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>{feature.title}</li>
                                            )
                                        }
                                    </ul>
                                    <Link to="#" onClick={this.togglemodal} className="btn btn-success mt-4">{pricing.buttonText}</Link>
                                    </CardBody>
                                </Card>
                            </Col>                        
                        )
                    }

<Modal isOpen={this.state.modal} role="dialog" centered={true} id="trialform">
                                    <Alert color="info" isOpen={this.state.successMsg} toggle={()=>{ this.setState({successMsg : !this.state.successMsg}) }}>
                                        Wiadomośc wysłana
                                    </Alert>
                        <ModalHeader  toggle={this.togglemodal}>
                            Opowiedz nam o potrzebach Twojego biznesu !My znajdziemy rozwiązanie!
                        </ModalHeader>
                        <ModalBody>
                            <div className="feature-form">
                                <img src={mobileNotification} alt=""/>
    
                               
                               
                                <div className="custom-form bg-white">
                                <div id="message"></div>
                              
                                    <Form method = "post" onSubmit={this.handleSubmit} name="contact-form" id="contact-form">
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup className="position-relative">
                                                    <Label>Imię</Label>
                                                    <i><FeatherIcon icon="user" className="fea icon-sm icons" /></i>
                                                    <Input name="name" id="name" type="text" className="form-control pl-5" placeholder="Imię :"/>
                                                </FormGroup>
                                            </Col>
    
                                            <Col lg="6">
                                                <FormGroup className="position-relative">
                                                    <Label>E-mail  </Label>
                                                    <i><FeatherIcon icon="mail" className="fea icon-sm icons" /></i>
                                                    <Input name="email" id="email2" type="email" className="form-control pl-5" placeholder="Twój e-mail :"/>
                                                </FormGroup>
                                            </Col>
    
                                            <Col lg="12">
                                                <FormGroup className="position-relative">
                                                    <Label>Wiadomość</Label>
                                                    <i><FeatherIcon icon="message-circle" className="fea icon-sm icons" /></i>
                                                    <textarea name="comments" id="comments" rows="4" className="form-control pl-5" placeholder="Twoja wiadomość. P. S. : podaj nazwę firmy - będzie nam łatwiej się odnieść do Twojego pytania :"></textarea>
                                                    {/* <Input type="password" className="form-control pl-5" placeholder="Twoja wiadomość. P. S. : Podaj nazwę firmy. Będzie nam łątwiej się odnieść do Twojego pytania." required=""/> */}
                                                </FormGroup>
                                            </Col>
    
                                            {/* <Col lg="12" className="mt-2 mb-0">
                                                <Button color="primary" className="w-100">Wyślij wiadomość</Button>
                                            </Col> */}
                                             <Col sm="12" className="text-center">
                                                <Input type="submit" id="submit" name="send" className="submitBnt btn btn-primary btn-block" value="Wyślij wiadomość"/>
                                                <div id="simple-msg"></div>
                                            </Col>
                                        </Row>
                                    </Form>                                    
                                </div>
                            </div>
                        </ModalBody>
            </Modal>
            </React.Fragment>

        );
    }
}

export default Pricing;