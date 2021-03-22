import React, {Component} from  'react';
import './AllIncidents.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import IncidentCard from "../../components/IncidentCard/IncidentCard";
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';

class AllIncidents extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            listOfCardsInfo: [
                {
                    photo: "https://pixnio.com/free-images/2019/02/07/2019-02-07-09-14-13-1200x900.jpg",
                    title: "Felinare defecte",
                    location: "Chisinau",
                    description: "Pe strada Burebista din Chisinau este lipsa de iluminare stradala din cauza ca felinarele sunt defecte.",
                    id: "kajfhq21"
                },
                {
                    photo: "https://pixnio.com/free-images/2019/02/07/2019-02-07-09-14-13-1200x900.jpg",
                    title: "Felinare defecte",
                    location: "Chisinau",
                    description: "Pe strada Burebista din Chisinau este lipsa de iluminare stradala din cauza ca felinarele sunt defecte.",
                    id: "kajfhq21"
                },
                {
                    photo: "https://pixnio.com/free-images/2019/02/07/2019-02-07-09-14-13-1200x900.jpg",
                    title: "Felinare defecte",
                    location: "Chisinau",
                    description: "Pe strada Burebista din Chisinau este lipsa de iluminare stradala din cauza ca felinarele sunt defecte.",
                    id: "kajfhq21"
                },
                {
                    photo: "https://pixnio.com/free-images/2019/02/07/2019-02-07-09-14-13-1200x900.jpg",
                    title: "Felinare defecte",
                    location: "Chisinau",
                    description: "Pe strada Burebista din Chisinau este lipsa de iluminare stradala din cauza ca felinarele sunt defecte.",
                    id: "kajfhq21"
                },
                {
                    photo: "https://pixnio.com/free-images/2019/02/07/2019-02-07-09-14-13-1200x900.jpg",
                    title: "Felinare defecte",
                    location: "Chisinau",
                    description: "Pe strada Burebista din Chisinau este lipsa de iluminare stradala din cauza ca felinarele sunt defecte.",
                    id: "kajfhq21"
                },
                {
                    photo: "https://pixnio.com/free-images/2019/02/07/2019-02-07-09-14-13-1200x900.jpg",
                    title: "Felinare defecte",
                    location: "Chisinau",
                    description: "Pe strada Burebista din Chisinau este lipsa de iluminare stradala din cauza ca felinarele sunt defecte.",
                    id: "kajfhq21"
                }
            ],
            clickedViewButton: false,
        };

        this.redirectToIncidentPage = this.redirectToIncidentPage.bind(this);
    };

    redirectToIncidentPage() {
        // change path
        console.log("success");
        this.props.history.push('/incident-page')
    };

    render() {
        let cards = (
            <div className="tableOfCards">
                {
                    this.state.listOfCardsInfo.map(card => {
                        return <IncidentCard 
                        title={card.title}
                        photo={card.photo}
                        location={card.location}
                        description={card.description}
                        id={card.id}
                        callback={this.redirectToIncidentPage} />
                    })
                }
            </div>
        );

        return (
            <div className="allIncidentsWrapper">
                <NavigationBar />
                <a href="/search-incident" className="searchAnIncident">Search an incident!</a>
                <h1 className="allIncidentsTitle">All Incidents</h1>
                <p className="mostWatchedIncidents">Most watched incidents</p>
                {cards}
            </div>
        );
    }
};

export default withRouter(AllIncidents);