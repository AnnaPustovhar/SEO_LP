import React, { Component } from 'react';
import { Container } from "reactstrap";

//Import Images
import pen from "../../assets/images/icon/pen.svg";
import video from "../../assets/images/icon/video.svg";
import intellectual from "../../assets/images/icon/intellectual.svg";
import user from "../../assets/images/icon/user.svg";
import calendar from "../../assets/images/icon/calendar.svg";
import sandClock from "../../assets/images/icon/sand-clock.svg";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import Feature from "../../components/Shared/Feature";

class Features extends Component {
    state = {
        features : [
            { id : 1, imgUrl : pen , title : "Audyt SEO", description : "Opracujemy i wdrożymy zalecenia optymalizacyjme do Twojego serwisu www ( z pomocą zespołu Up&More to proste!)."},
            { id : 2, imgUrl : video, title : "Rozwój treści", description : "Przeprowadzimy audyt treści w serwisie i przygotujemy zoptymalizowane treści (sami zajmiemy się ich rozwojem i publikacją!)" },
            { id : 3, imgUrl : intellectual, title : "Strategia linkowania", description : "Opracujemy i wdrożymy strategię pozyskiwania wysokiej jakości linków do domeny (cały proces po naszej stronie, dzięki czemu dbamy o każdy element SEO" },
            { id : 4, imgUrl : user, title : "Elastyczność działań", description : "Wiemy, że biznes działa w zmiennych warunkach i naszym celem jest maksymalne dopasowanie realizowanych działąń do Twoich nowych potrzeb (w każdej chwili możemy zmienić zakres, strategię i nakłady!" },
            { id : 5, imgUrl : calendar, title : "Optymalizacja konwersji", description : "W ramach dodatkowego wsparcia wykonujemy analizy użytkowników i żródeł ruchu, konwersji i kompleksowe audyty UX (na pokładzie Up&More czekają na Ciebie specjaliści z zakresu analityli, developmentu czy strategii, gotowi do przygotowania dodatkowych prac, abyś mogł skupić się na swoim biznesie!)" },
            { id : 6, imgUrl : sandClock, title : "Tutaj fajnie było by coś też dać :))))", description : "Najlepsze SEO w Warszawie blah blah" },
        ]
    }

    render() {
        return (
            <React.Fragment>
            <Container>
                {/* section title */}
                <SectionTitle title="Jak działa SEO Premium w Up&More?" desc="Up&More to pierwsza w Polsce agencja SEO Premium. Bez rozwiązań pakietowych, ale z kompleksowym podejściem SEO łączącym elementy techniczne, content marketing i ePR. Poznaj nas i dowiedz się więcej!" />

                {/* feature box */}
                <Feature featureArray={this.state.features}/> 
            </Container>
            </React.Fragment>
        );
    }
}

export default Features;