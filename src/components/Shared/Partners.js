import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

//Import Images
import img1 from "../../assets/images/client/ronson.png";
import img2 from "../../assets/images/client/grzybki.png";
import img3 from "../../assets/images/client/h+h.png";
import img4 from "../../assets/images/client/autoplaza.png";
import img5 from "../../assets/images/client/kangu.png";
import img6 from "../../assets/images/client/ekopark.png";

class Partners extends Component {
    render() {
        return (
            <React.Fragment>
                        <Row className="justify-content-center" id="partners">
                            <Col id="partner1" lg="2" md="2" xs="6" className="text-center">
                                <img src={img1} className="avatar avatar-ex-md" alt=""/>
                            </Col>

                            <Col id="partner2" lg="2" md="2" xs="6" className="text-center">
                                <img src={img2} className="avatar avatar-ex-md" alt=""/>
                            </Col>
                            
                            <Col id="partner3" lg="2" md="2" xs="6" className="text-center  mt-4 mt-sm-0">
                                <img src={img3} className="avatar avatar-ex-md" alt=""/>
                            </Col>
                            
                            <Col id="partner4" lg="2" md="2" xs="6" className="text-center  mt-4 mt-sm-0">
                                <img src={img4} className="avatar avatar-ex-md" alt=""/>
                            </Col>
                            
                            <Col id="partner5" lg="2" md="2" xs="6" className="text-center  mt-4 mt-sm-0">
                                <img src={img5} className="avatar avatar-ex-md" alt=""/>
                            </Col>
                            
                            <Col id="partner6" lg="2" md="2" xs="6" className="text-center  mt-4 mt-sm-0">
                                <img src={img6} className="avatar avatar-ex-md" alt=""/>
                            </Col>
                        </Row>
            </React.Fragment>
        );
    }
}

export default Partners;