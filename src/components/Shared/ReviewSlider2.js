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
             
                                <Row>
                                    {
                                     

                                        this.props.clients.map((client, key) =>
                                         
                                            <Col md="4" name="testi" key={key} md={this.state.cols} className="mt-4 pt-2">
                                              <Card className="work-process border-0 rounded shadow " name="cases">
                                                  <CardBody>
                                                      <img src={client.image} className="img-fluid avatar avatar-small center" alt=""/>
                                                      <p className="text-secondary mt-4 text-center font-weight-bold mb-0">W ciągu 12 miesięcy działań zwiększyliśmy: </p>
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
                                            </Col> 
                                        )
                                        
                                       
                                    }
                                    </Row>
                                
            </React.Fragment>
        );
    }
}

export default ReviewSlider2;