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
                                {/* <Link to="#" onClick={this.togglemodal} className="btn btn-primary">Zacznij teraz</Link> */}
                                <ScrollspyNav
                                                    scrollTargetIds={["contact"]}
                                                    activeNavClass="active"
                                                    scrollDuration="800"
                                                    headerBackground="true"
                                                   >
                                                     <a href="#contact" className="btn btn-primary mt-2 mr-2 mouse-down">
                                                         Zacznij teraz
                                                      </a> 
                                                    
                                                  </ScrollspyNav>
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
                        
                                    
            </React.Fragment>
        );
    }
}

export default NavbarPage;