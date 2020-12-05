import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Label, Input, Col, FormGroup,Modal, Alert, ModalHeader, ModalBody, Form, Row } from "reactstrap";
import ScrollspyNav from "./scrollSpy";


//Import Images
import logodark from "../../assets/images/up-more-logo.png";
import mobileNotification from "../../assets/images/illustrator/Mobile_notification_SVG.svg";
import FeatherIcon from 'feather-icons-react';








class NavbarPage extends Component {
    constructor(props){
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
            navItems : [
                { id: 1 , idnm : "home", navheading: "Start" },
                { id: 3 , idnm : "service", navheading: "Usługi" },
                { id: 3 , idnm : "testimonial", navheading: "Case studies" },
                { id: 4 , idnm : "pricing", navheading: "Cennik" },
                { id: 6 , idnm : "contact", navheading: "Kontakt" },
                ],
                isOpen : false, 
        };
        this.toggleLine = this.toggleLine.bind(this);
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
    toggleLine() {
        this.setState(prevState => ({  isOpen: !prevState.isOpen }));
    }
    
    render() {
        //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
        let targetId = this.state.navItems.map((item) => {
            return(
                item.idnm
            )
        });
        return (
            <React.Fragment>
                    <header id="topnav" className="defaultscroll sticky">
                            <Container>
                            <div>
                                <Link className="logo" to="#">
                                    <img src={logodark} height="50" alt=""/>
                                </Link>
                            </div>                  
                            <div className="buy-button">
                                <Link to="#" onClick={this.togglemodal} className="btn btn-primary">Zacznij teraz</Link>
                            </div>
                            <div className="menu-extras">
                                        <div className="menu-item">
                                            <Link to="#" onClick={ this.toggleLine } className={this.state.isOpen ? "navbar-toggle open" : "navbar-toggle" } >
                                                <div className="lines">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </Link>
                                        </div>
                            </div>
                                    <ScrollspyNav
                                        scrollTargetIds={targetId}
                                        scrollDuration="800"
                                        headerBackground="false"
                                        activeNavClass="active"
                                    >
                                    <div id="navigation" style={{ display : this.state.isOpen ? "block" : "none" }}>
                                        <ul className="navigation-menu">
                                            {this.state.navItems.map((item, key) => (
                                                <li key={key} className={item.navheading === "Home" ? "has-submenu active" : "has-submenu" } >
                                                    <a href={"#" + item.idnm} > {item.navheading}</a>
                                                </li>
                                            ))} 
                                        </ul>
                                    </div>
                                    </ScrollspyNav>
                            </Container>
                        </header>
                        
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

export default NavbarPage;