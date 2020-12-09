import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

//Import Images
import img1 from "../../assets/images/client/majestic1.png";
import img2 from "../../assets/images/client/screamingfrog1.png";
import img3 from "../../assets/images/client/semrush1.png";
import img4 from "../../assets/images/client/searchconsole1.png";
import img5 from "../../assets/images/client/senuto1.png";
import img6 from "../../assets/images/client/whitepress1.png";
import img7 from "../../assets/images/client/analityka1.png";
import img8 from "../../assets/images/client/unamo1.png";

class Tools extends Component {
    render() {
        return (
            <React.Fragment>
                <Col name="tools">
                        <Row className="justify-content-center" >
                            <Col id="tool1" lg="2" md="2" xs="6" className="text-center">
                                <img src={img1} className=" avatar avatar-ex-md" alt=""/>
                            </Col>

                            <Col id="tool2" lg="2" md="2" xs="6" className="text-center">
                                <img src={img2} className=" avatar avatar-ex-md " alt=""/>
                            </Col>
                            
                            <Col id="tool3" lg="2" md="2" xs="6" className="text-center ">
                                <img src={img3} className="avatar avatar-ex-md" alt=""/>
                            </Col>
                            
                            <Col id="tool4" lg="2" md="2" xs="6" className="text-center  ">
                                <img src={img4} className="avatar avatar-ex-md" alt=""/>
                            </Col>
                            
                        </Row>

                        <Row className="justify-content-center" id="tools">
                            
                            
                             <Col id="tool5" lg="2" md="2" xs="6" >
                                <img src={img5} className="avatar avatar-ex-md" alt=""/>
                            </Col>
                            <Col id="tool6" lg="2" md="2" xs="6" >
                                <img src={img6} className="avatar avatar-ex-md" alt=""/>
                            </Col>
                            <Col id="tool7" lg="2" md="2" xs="6" >
                                <img src={img7} className="avatar avatar-ex-md" alt=""/>
                            </Col>
                            
                            <Col id="tool8" lg="2" md="2" xs="6" >
                                <img src={img8} className="avatar avatar-ex-md" alt=""/>
                            </Col>
                        </Row> 
                        </Col>
            </React.Fragment>
        );
    }
}

export default Tools;