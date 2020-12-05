import React, { Component } from 'react';
import { Card, CardBody, Row, Col } from "reactstrap";

import FeatherIcon from 'feather-icons-react';

class ReviewSlider2 extends Component {
  constructor(props) {
    super(props);
    this.state={
      cols:4,
        step1 : true,
        step2 : false
    }
    this.updateWindowSize.bind(this);
  }
  

  updateWindowSize = () => {
    if (window.outerWidth >= 1230) {
        this.setState({ itemCount: 3, cols: 4 });
    }
    else if (window.outerWidth >= 970 && window.outerWidth < 1230) {
        this.setState({ itemCount: 2, cols: 6 });
    }
    else if (window.outerWidth <= 970) {
        this.setState({ itemCount: 1, cols: 12 });
    }
  }

  componentDidMount() {
      window.addEventListener("resize", this.updateWindowSize);
      this.updateWindowSize();
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
      window.removeEventListener("resize",this.updateWindowSize);
  }
    
    render() {
        return (
            <React.Fragment>
                <Row className="mt-4 pt-2">
                <Col lg="12" className={this.props.colClass} >
                          <div id="customer-testi" className="owl-carousel owl-theme owl-loaded owl-drag">
                                <div className="owl-stage-outer">
                                    <div className="owl-stage">
                                <Row>
                                    {
                                      this.state.step1 === true ?

                                        this.props.clients.map((client, key) =>
                                          key >= 0 && key <=2 ?
                                            <Col name="testi" key={key} md={this.state.cols} className="mb-1">
                                              <Card className="pricing-rates business-rate shadow bg-white border-0 rounded " name="cases">
                                                  <CardBody>
                                                      <img src={client.image} style={{height:65, width:130}} className="img-fluid avatar avatar-small   center" alt=""/>
                                                      <p className="text-secondary mt-4 text-center font-weight-bold mb-0">W ciągu 12 miesięcy działań zwiększyliśmy: {client.title} </p>
                                                      {/* <h6 className="text-primary"> {client.name}</h6> */}
                                                      
                                                     
                                                      <ul className="feature list-unstyled pl-0">
                                                         {
                                                            client.features.map((feature, key) =>
                                                               <li key={key} className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>{feature.title}</li>
                                                             ) 
                                                         } 
                                                     </ul>

                                                    
                                                     
                                                  </CardBody>
                                              </Card>
                                            </Col> : null
                                        )
                                        :
                                        this.props.clients.map((client, key) =>
                                        key >= 3 && key <=5 ?
                                            <Col key={key} md={this.state.cols} className="mb-1">
                                              <Card className="customer-testi border-0 text-center" name="cases">
                                                  <CardBody>
                                                      <img src={client.image} style={{height:65, width:65}} className="img-fluid avatar avatar-small rounded-circle mx-auto shadow" alt=""/>
                                                      <p className="text-muted mt-4">" {client.title} "</p>
                                                      <h6 className="text-primary">- {client.name}</h6>
                                                  </CardBody>
                                              </Card>
                                            </Col> : null
                                        )
                                    }
                                    </Row>
                                </div>
                                </div>
                                    <div className="custom-owl-dots">
                                                   <button type="button" onClick={() => {  this.setState({ step1 : true, step2 : false }) } }  className={this.state.step1 ? "indicator-active" : "indicator-inactive"} ></button>
                                                   <button type="button" onClick={() => {  this.setState({ step1 : false, step2 : true }) } } className={this.state.step2 ? "indicator-active" : "indicator-inactive"} ></button>
                                    </div>
                                </div>
                                </Col>
                                </Row>
            </React.Fragment>
        );
    }
}

export default ReviewSlider2;