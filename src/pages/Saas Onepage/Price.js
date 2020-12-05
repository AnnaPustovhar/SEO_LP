import React, { Component } from 'react';
import { Container, Row, Col, Badge, Modal,Alert, Card, CardBody, ModalHeader, ModalBody, Form, FormGroup, Input, Button, Label  } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import Pricing from "../../components/Shared/PricingBox";
import mobileNotification from "../../assets/images/illustrator/Mobile_notification_SVG.svg";

class Price extends Component {
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
        this.state = {
            pricings : [
                { id : 1, title : "Flat fee",  duration : "Miesięczny abonament:", buttonText: "Skorzystaj już teraz", btnLink: "", isActive : true,
                    features : [
                        {title : "Stała stawka przez cały czas trwania umowy"},
                        {title : "Niższy, lączny roczny koszt działań niż w przypadku success fee"},
                    ]
                },
                { id : 2, title : "Flat fee + success fee", duration : "Miesięczny abonament + rozliczenie za efekt:", buttonText: "Skorzystaj już teraz", btnLink: "", isActive : true, 
                    features : [
                        {title : "Niższa stała część miesięcznej faktury"},
                        {title : "Rosnąca kwota faktury wraz ze wzrostem pozycji strony"},
                    ]
                },
               
            ],
        }
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
                <section className="section" id="pricing">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="Nasze modele rozliczeń" desc=" Poznaj nasze modele rozliczeń i wybierz rozwiązanie najlepsze dla siebie" />

                        <Row id="pricing">
                            <Pricing pricings={this.state.pricings} />
                        </Row>
                    </Container>
                </section>
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

export default Price;