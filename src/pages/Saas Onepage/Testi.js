// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Components
import ReviewSlider2 from "../../components/Shared/ReviewSlider2";
import SectionTitle from "../../components/Shared/SectionTitle";

//Import Images
import client1 from "../../assets/images/client/Panek.png";
import client2 from "../../assets/images/client/amerigas.png";
import client3 from "../../assets/images/client/Szkola.png";
import client4 from "../../assets/images/client/04.jpg";
import client5 from "../../assets/images/client/05.jpg";
import client6 from "../../assets/images/client/06.jpg";

class Testi extends Component {
    state = {
        clients : [
            { id : 1,  image : client1,
                features: [
                    {title: "widocznośc serwisu panekcs.pl w TOP dla +41 nowych fraz kluczowych"},
                    {title: "wuch organiczny +96%"},
                    {title: "liczbę UU z bezpłatnych wyników wyszukiwania +93%"}

                ]
            },

            { id : 2, image : client2, 
                features:[
                    {title: "widoczność organiczną serwisu w Top10 +85% fraz więcej"},
                    {title: "ruch organiczny +103% sesji"},
                    {title: "ilość nowych użytkowników pochodzących z ruchu organicznego +124%" },
                ]
            },

            { id : 3, image : client3, 
                features:[
                    {title: "widoczność organiczną w Top10 +20 fraz więcej"},
                    {title: " Ilość ruchu organicznego +134%." },
                ]
            },
            // { id : 4, image : client4, name : "Jill Webb" , title: "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts." },
            // { id : 5, image : client5, name : " Dean Tolle" , title: "There is now an abundance of readable dummy texts. These are usually used when a text is required." },
            // { id : 6, image : client6, name : "Christa Smith" , title : "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero." },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section pt-0">
                    <Container>
                    <SectionTitle title="Case studies" desc="wyniki mówią same za siebie!" />
                        <Row>
                            <Col xs="12">
                                {/* review-slider */}
                                <ReviewSlider2 clients={this.state.clients} />
                            </Col>
                        </Row>

    
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default Testi;