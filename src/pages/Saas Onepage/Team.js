import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import TeamBox from "../../components/Shared/TeamBox";

//Import Images
import image1 from "../../assets/images/client/01.png";
import image2 from "../../assets/images/client/02.png";
import image3 from "../../assets/images/client/03.png";
import image4 from "../../assets/images/client/04.png";

class Team extends Component {
    state = {
        candidates : [
            { id : 1, image : image1, name : "Piotr Starzyński", designation : "CEO", salary : "2300",
                socialIds : [
                    { icon : "facebook", link : "#" },
                    { icon : "instagram", link : "#" },
                    { icon : "twitter", link : "#" },
                    { icon : "linkedin", link : "#" },
                ]
            },
            { id : 2, image : image2, name : "Tomasz Starzyński", designation : "CEO", salary : "1950", link : "",
                socialIds : [
                    { icon : "facebook", link : "#" },
                    { icon : "instagram", link : "#" },
                    { icon : "twitter", link : "#" },
                    { icon : "linkedin", link : "#" },
                ]
            },
            { id : 3, image : image3, name : "Adriana Napiórkowska", designation : "Senior SEO Specialist", salary : "2540", link : "",
                socialIds : [
                    { icon : "facebook", link : "#" },
                    { icon : "instagram", link : "#" },
                    { icon : "twitter", link : "#" },
                    { icon : "linkedin", link : "#" },
                ]
            },
            { id : 4, image : image4, name : "Anna Pustovhar", designation : "Junior SEO&Analytics Specialist", salary : "2190", link : "",
                socialIds : [
                    { icon : "facebook", link : "#" },
                    { icon : "instagram", link : "#" },
                    { icon : "twitter", link : "#" },
                    { icon : "linkedin", link : "#" },
                ]
            },
        ]
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="Nasi specjalisci" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            {/* teambox */}
                            <TeamBox candidates={this.state.candidates} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Team;