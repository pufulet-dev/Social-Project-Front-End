import React, {Component} from  'react';
import './AllIncidents.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import IncidentCard from "../../components/IncidentCard/IncidentCard";
import { connect } from 'react-redux';

class AllIncidents extends Component {
    state = {
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
    };

    render() {
        let cards = (
            <div className="tableOfCards">
                {
                    this.state.listOfCardsInfo.map((card, index) => {
                        return <IncidentCard 
                        title={card.title}
                        photo={card.photo}
                        location={card.location}
                        description={card.description}
                        id={card.id} />
                    })
                }
            </div>
        );
        return (
            <div className="allIncidentsWrapper">
                <NavigationBar />
                <h1 className="allIncidentsTitle">All Incidents</h1>
                <p className="mostWatchedIncidents">Most watched incidents</p>
                {cards}
                <h1>this is a test: {this.props.ctr} </h1>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        ctr: state.counter,        
    };
}

export default connect(mapStateToProps)(AllIncidents);