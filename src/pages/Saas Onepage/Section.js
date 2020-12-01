
import React, { Component } from 'react';
import Typist from 'react-typist';
import { Link } from 'react-router-dom';
import ScrollspyNav from './ScrollspyNav';

// Import  Images 
import rocket from '../../assets/images/home/rocket.svg';
import { Container, Row, Col, UncontrolledTooltip } from 'reactstrap';

//Import Images
import grzybki from "../../assets/images/home/hero/grzybki.png";
import ronson from "../../assets/images/home/hero/ronson.png";
import Amerigas from "../../assets/images/home/hero/Amerigas.png";
import css2 from "../../assets/images/home/hero/css2.png";
import w3c2 from "../../assets/images/home/hero/w3c2.png";
import ui2 from "../../assets/images/home/hero/ui2.png";


class Section extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <React.Fragment>

                <section className="bg-half-170 home-wrapper border-bottom d-table w-100" id="home">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={7} md={7}>
                                <div className="title-heading">
                                    <h1 className="font-weight-bold">Poznaj PremiumSEO</h1>
                                    
                                
                                    <h4 className="heading font-weight-bold mb-3">
                                    <Typist>
                                    <span className="element text-primary"> w Warszawie</span>
                                    <Typist.Backspace count={15} delay={800} />
                                    <span className="element text-primary">od Up&More !</span>
                                </Typist>
                                </h4>
                                    
                                    <p className="para-desc text-muted">PremiumSEO to pozycjonowanie dostosowane do realnych potrzeb Twojej firmy. Zarabiaj dziéki wysokim pozycjom!</p>
                                
                                    <div className="mt-4 pt-2"> 
                                    <ScrollspyNav
                                        scrollTargetIds={["demos"]}
                                        activeNavclassName="active"
                                        scrollDuration="800"
                                        headerBackground="true"
                                    >
                                        <a href="#demos" className="btn btn-primary rounded mouse-down mr-2 mb-2">Zacznij już teraz!</a>
                                        {/* <a href="https://1.envato.market/landrickreactjs" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded ml-1 mb-2">Download Now</a> */}
                                        </ScrollspyNav>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={5} md={5} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <img src={rocket} className="img-fluid mover" alt=""/>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* <div className="position-relative">
                    <div className="attach-icons-hero text-center py-5 py-sm-0">
                        <Link to="#" className="mr-1"><img src={grzybki} id="grzybki" className="img-fluid avatar  my-2 my-sm-0 mx-2 p-2 bg-white " alt=""/></Link>
                            <UncontrolledTooltip target="grzybki" placement="top">
                               Grzybki
                            </UncontrolledTooltip>
                        <Link to="#" className="mr-1"><img src={ronson} id="ronson" className="img-fluid avatar  my-2 my-sm-0 mx-2 p-2 bg-white" alt=""/></Link>
                            <UncontrolledTooltip target="ronson" placement="top">
                               Ronson
                            </UncontrolledTooltip>
                        <Link to="#" className="mr-1"><img src={Amerigas} id="Amerigas" className="img-fluid  my-2 my-sm-0 mx-2 p-2 bg-white " alt=""/></Link>
                            <UncontrolledTooltip target="Amerigas" placement="top">
                                Amerigas
                            </UncontrolledTooltip>
                        <Link to="#" className="mr-1"><img src={css2} id="css2" className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
                            <UncontrolledTooltip target="css2" placement="top">
                                Css
                            </UncontrolledTooltip>
                        <Link to="#" className="mr-1"><img src={w3c2} id="w3c2" className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
                            <UncontrolledTooltip target="w3c2" placement="top">
                                W3c Valid
                            </UncontrolledTooltip>
                        <Link to="#"><img src={ui2} id="ui2" className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
                            <UncontrolledTooltip target="ui2" placement="top">
                                Ui Kit
                            </UncontrolledTooltip>
                    </div>
                </div> */}
            </React.Fragment>
        );
    }
}

export default Section;
