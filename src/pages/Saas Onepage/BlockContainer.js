import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Badge, Modal,Alert, Card, CardBody, ModalHeader, ModalBody, Form, FormGroup, Input, Button, Label } from "reactstrap";

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Image
import mobileNotification from "../../assets/images/illustrator/Mobile_notification_SVG.svg";
import marketing from "../../assets/images/illustrator/Marketing_strategy_SVG.svg";
import deal from "../../assets/images/hosting/deal-hend.png";
import SectionTitle from "../../components/Shared/SectionTitle";

class BlockContainer extends Component {
     
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
            <Container className="mt-4 mt-60">
                <div className="p-4 rounded bg-light shadow" data-aos="fade-up" data-aos-duration="1800">
                    <Row className="align-items-center">
                        <Col sm="7">
                            <div className="text-sm-left">
                                <h5 className="mb-0">Opowiedz nam o potrzebach swojego biznesu.</h5>
                                <p className="para-desc text-muted">My znajdziemy rozwiązanie!</p>
                            </div>
                        </Col>
    
                        <Col sm="5" className="mt-4 mt-sm-0">
                            <div className="text-sm-right">
                                <Link to="#" onClick={this.togglemodal} id="aaa" className="btn btn-success rounded mouse-down mr-2 mb-2">Napisz do nas!</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

            
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

export default BlockContainer;