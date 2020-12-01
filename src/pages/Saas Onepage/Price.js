import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import Pricing from "../../components/Shared/PricingBox";

class Price extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pricings : [
                { id : 1, title : "Flat fee",  duration : "Miesięczny abonament:", buttonText: "Skorzystaj już teraz", btnLink: "", isActive : true,
                    features : [
                        {title : "Stała stawka przez cały czas trwania umowy"},
                        {title : "Niższy, lączny roczny koszt działań niż w przypadku success fee"},
                    ]
                },
                { id : 2, title : "Flat fee + success fee", duration : "Niższy miesięczny abonament + rozliczenie za efekt:", buttonText: "Skorzystaj już teraz", btnLink: "", isActive : true, 
                    features : [
                        {title : "Niższa stała część miesięcznej faktury"},
                        {title : "Rosnąca kwota faktury wraz ze wzrostem pozycji strony"},
                    ]
                },
               
            ],
        }
    }
    
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
            </React.Fragment>
        );
    }
}

export default Price;