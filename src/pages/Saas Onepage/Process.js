// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import { Container, Row, Col } from "reactstrap";

// //Import Icons
// import FeatherIcon from 'feather-icons-react';

// //Import Images
// import mobile from "../../assets/images/software/mobile01.png";

// class Process extends Component {
//     state = {
//         processes : [
//             { title : "Digital Marketing Solutions for Tomorrow" },
//             { title : "Our Talented & Experienced Marketing Agency" },
//             { title : "Create your own skin to match your brand" },
//         ]
//     }
//     render() {
//         return (
//             <React.Fragment>
//                 <Container className="mt-100 mt-60">
//                     <Row className="align-items-center">
//                         <Col lg="5" md="6">
//                             <img src={mobile} data-aos="fade-up" data-aos-duration="1800" className="img-fluid" alt=""/>
//                         </Col>

//                         <Col lg="7" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
//                             <div className="section-title ml-lg-5">
//                                 <h4 className="title mb-4" data-aos="fade-up" data-aos-duration="1000">Seamless Operation via Smart SEO</h4>
//                                 <p className="text-muted" data-aos="fade-up" data-aos-duration="1400">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
//                                 <ul className="list-unstyled feature-list mb-0 text-muted" data-aos="fade-up" data-aos-duration="1800">
//                                     {
//                                         this.state.processes.map((process, key) =>
//                                         <li key={key}>
//                                         <i>
//                                             <FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2 " />
//                                         </i>
//                                         {process.title}
//                                     </li>
//                                         )
//                                     }
//                                 </ul>
//                                 <div className="mt-4" data-aos="fade-up" data-aos-duration="2200">
//                                     <Link to="#" className="text-primary p-1 px-2 shadow rounded">Read More <i className="mdi mdi-chevron-right"></i></Link>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </React.Fragment>
//         );
//     }
// }


// export default Process;

import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Card, CardBody, Badge } from 'reactstrap';
import { Link } from "react-router-dom";
import classnames from 'classnames';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

class Process extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            successMsg : false
        }
        this.toggleTab = this.toggleTab.bind(this);
    }
    
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
              activeTab: tab
            });
          }
    }

    render() {
        return (
            <React.Fragment>
            <Container>
                {/* render Section title */}
                <SectionTitle title="Our Pricing Plans" desc=" that can provide everything you need to generate awareness, drive traffic, connect."/>

                <Row className="justify-content-center">
                    <Col xs={12} className="mt-4 pt-2">
                        <div className="text-center">
                            <Nav pills className="rounded-pill justify-content-center d-inline-block border" id="pills-tab" role="tablist">
                                <NavItem className="d-inline-block">
                                    <NavLink
                                    className={classnames({active: this.state.activeTab === '1'},"rounded-pill","monthly","px-3","py-2")}
                                    onClick={() => { this.toggleTab('1'); }}
                                    id="Monthly">Monthly</NavLink>
                                </NavItem>
                                <NavItem className="d-inline-block">
                                    <NavLink
                                    className={classnames({active: this.state.activeTab === '2'},"rounded-pill","yearly","px-3","py-2")}
                                    onClick={() => { this.toggleTab('2'); }}
                                    id="Yearly" >Yearly <Badge pill color="danger" className="ml-1">10% Off </Badge></NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </Col>
                    <Col lg={7} md={12} className="text-center">
                        <TabContent activeTab={this.state.activeTab} id="pills-tabContent">
                            <TabPane tabId="1">
                                <Row className="align-items-center">
                                    <Col md={6} xs={12} className="mt-4 pt-4 pl-md-0 pr-md-0">
                                        <Card className="pricing-rates starter-plan text-center shadow rounded border-0">
                                            <CardBody className="py-5">
                                                <h2 className="title text-uppercase text-primary mb-4">Starter</h2>
                                                <div className="d-flex justify-content-center mb-4">
                                                    <span className="h4 mb-0 mt-2">$</span>
                                                    <span className="price h1 mb-0">0</span>
                                                    <span className="h4 align-self-end mb-1">/mo</span>
                                                </div>

                                                <ul className="feature list-unstyled pl-0">
                                                    <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Full Access</li>
                                                    <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Source Files</li>
                                                    <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Free Appointments</li>
                                                    <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Enhanced Security</li>
                                                </ul>
                                                <Link to="#" className="btn btn-primary mt-4">Get Started</Link>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                    <Col md={6} xs={12} className="mt-4 pt-2 pt-md-4 pl-md-0 pr-md-0">
                                        <Card className="pricing-rates bg-light text-center shadow rounded border-0">
                                            <CardBody className=" py-5">
                                                <h2 className="title text-uppercase text-primary mb-4">Professional</h2>
                                                <div className="d-flex justify-content-center mb-4">
                                                    <span className="h4 mb-0 mt-2">$</span>
                                                    <span className="price h1 mb-0">59</span>
                                                    <span className="h4 align-self-end mb-1">/mo</span>
                                                </div>

                                                <ul className="feature list-unstyled pl-0">
                                                    <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Full Access</li>
                                                    <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Source Files</li>
                                                    <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Free Appointments</li>
                                                    <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Enhanced Security</li>
                                                </ul>
                                                <Link to="#" className="btn btn-primary mt-4">Try it now</Link>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </TabPane>

                            <TabPane tabId="2">
                                <Row className="align-items-center">
                                    <Col md={6} xs={12} className="mt-4 pt-4 pl-md-0 pr-md-0">
                                        <Card className="pricing-rates starter-plan text-center shadow rounded border-0">
                                            <CardBody className="py-5">
                                                <h2 className="title text-uppercase text-primary mb-4">Starter</h2>
                                                <div className="d-flex justify-content-center mb-4">
                                                    <span className="h4 mb-0 mt-2">$</span>
                                                    <span className="price h1 mb-0">9</span>
                                                    <span className="h4 align-self-end mb-1">/mo</span>
                                                </div>

                                                <ul className="feature list-unstyled pl-0">
                                                    <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Full Access</li>
                                                    <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Source Files</li>
                                                    <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Free Appointments</li>
                                                    <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Enhanced Security</li>
                                                </ul>
                                                <Link to="#" className="btn btn-primary mt-4">Get Started</Link>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                    <Col md={6} xs={12} className="mt-4 pt-2 pt-md-4 pl-md-0 pr-md-0">
                                        <Card className="pricing-rates bg-light text-center shadow rounded border-0">
                                            <CardBody className="py-5">
                                                <h2 className="title text-uppercase text-primary mb-4">Professional</h2>
                                                <div className="d-flex justify-content-center mb-4">
                                                    <span className="h4 mb-0 mt-2">$</span>
                                                    <span className="price h1 mb-0">49</span>
                                                    <span className="h4 align-self-end mb-1">/mo</span>
                                                </div>

                                                <ul className="feature list-unstyled pl-0">
                                                    <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Full Access</li>
                                                    <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Source Files</li>
                                                    <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Free Appointments</li>
                                                    <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Enhanced Security</li>
                                                </ul>
                                                <Link to="#" className="btn btn-primary mt-4">Try it now</Link>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
        );
    }
}

export default Process;