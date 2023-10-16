import React, {Component} from  'react';
import './AllIncidents.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar.js';
import IncidentCard from "../../components/IncidentCard/IncidentCard.js";
// import peopleImage from './SearchIncidentPhoto.png';
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';

class AllIncidents extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            listOfCardsInfo: [
                {
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRvM1Ae6POc1iCXvHeEGOGtKHSxeAq05w4Q&usqp=CAU",
                    title: "Felinare defecte",
                    location: "Chisinau",
                    description: "Pe strada Burebista din Chisinau este lipsa de iluminare stradala din cauza ca felinarele sunt defecte.",
                    id: "kajfhq21"
                },
                {
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRvM1Ae6POc1iCXvHeEGOGtKHSxeAq05w4Q&usqp=CAU",
                    title: "Felinare defecte",
                    location: "Chisinau",
                    description: "Pe strada Burebista din Chisinau este lipsa de iluminare stradala din cauza ca felinarele sunt defecte.",
                    id: "kajfhq21"
                },
                {
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRvM1Ae6POc1iCXvHeEGOGtKHSxeAq05w4Q&usqp=CAU",
                    title: "Felinare defecte",
                    location: "Chisinau",
                    description: "Pe strada Burebista din Chisinau este lipsa de iluminare stradala din cauza ca felinarele sunt defecte.",
                    id: "kajfhq21"
                },
                {
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRvM1Ae6POc1iCXvHeEGOGtKHSxeAq05w4Q&usqp=CAU",
                    title: "Felinare defecte",
                    location: "Chisinau",
                    description: "Pe strada Burebista din Chisinau este lipsa de iluminare stradala din cauza ca felinarele sunt defecte.",
                    id: "kajfhq21"
                },
                {
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRvM1Ae6POc1iCXvHeEGOGtKHSxeAq05w4Q&usqp=CAU",
                    title: "Felinare defecte",
                    location: "Chisinau",
                    description: "Pe strada Burebista din Chisinau este lipsa de iluminare stradala din cauza ca felinarele sunt defecte.",
                    id: "kajfhq21"
                },
                {
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRvM1Ae6POc1iCXvHeEGOGtKHSxeAq05w4Q&usqp=CAU",
                    title: "Felinare defecte",
                    location: "Chisinau",
                    description: "Pe strada Burebista din Chisinau este lipsa de iluminare stradala din cauza ca felinarele sunt defecte.",
                    id: "kajfhq21"
                },
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

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        let cards = (
            <div className="tableOfCards">
                {
                    this.state.listOfCardsInfo.map((card, index, array) => {
                        return <IncidentCard 
                        title={card.title}
                        photo={card.photo}
                        location={card.location}
                        description={card.description}
                        id={card.id}
                        key={card.index}
                        callback={this.redirectToIncidentPage} />
                    })
                }
            </div>
        );

        return (
            <div className="allIncidentsWrapper" >
                <NavigationBar />
                <div className="searchIncidentWrapper" >
                    <div className="addIncident" >
                        <a href="/add-incident" className="start">
                            Start
                        </a>
                        <span>Add</span>
                        <span>new</span>
                        <span className="incident">incident</span>
                        <span>now!</span>
                    </div>
                    <p className="searchText" >Search reported incidents using the filters below.</p>
                    <span className="filtersWrapper" >
                        <input 
                            type="text" 
                            placeholder="Reported By" 
                            className="reportedByInput registerInput" />
                        <select className="reportedBySelect">
                            <option> Location </option>
                            <option> Anenii Noi </option>
                            <option> Basarabeasca </option>
                            <option> Bălți </option>
                            <option> Bender </option>
                            <option> Briceni </option>
                            <option> Cahul </option>
                            <option> Cantemir </option>
                            <option> Călărași </option>
                            <option> Căușeni </option>
                            <option> Ceadîr-Lunga </option>
                            <option> Chișinău </option>
                            <option> Cimișlia </option>
                            <option> Comrat </option> 
                            <option> Criuleni </option>
                            <option> Dondușeni </option>
                            <option> Drochia </option>
                            <option> Dubăsari </option>
                            <option> Edineț </option>
                            <option> Fălești </option>
                            <option> Florești </option>
                            <option> Glodeni </option>
                            <option> Hîncești </option>
                            <option> Ialoveni </option>
                            <option> Leova </option>
                            <option> Nisporeni </option>
                            <option> Ocnița </option>
                            <option> Orhei </option>
                            <option> Rezina </option>
                            <option> Rîșcani </option>
                            <option> Sîngerei </option>
                            <option> Soroca </option>
                            <option> Strășeni </option>
                            <option> Șoldănești </option>
                            <option> Ștefan Vodă </option>
                            <option> Taraclia </option>
                            <option> Telenești </option>
                            <option> Tiraspol </option>
                            <option> Ungheni </option>
                            <option> U.T.A.G. </option>
                            <option> U.T.A.N. </option>
                        </select>
                        <select className="reportedBySelect">
                            <option> Category </option>
                            <option> Alimentation </option>
                            <option> Comunication </option>
                        </select>
                        <button className="searchButton" > 
                            <a href="/all-incidents">
                                Search
                            </a>
                        </button>
                    </span>
                    <p className="quoteAndAuthor">
                            <span className="quote"> Lasting solution to many social problems will be found only as we each learn to say, 'I am society'. </span>
                            <span className="quoteAuthor"> Mal Fletcher </span>
                    </p>
                    {/* <img src={peopleImage} className="peopleImage" /> */}
                </div>
                <h1 className="allIncidentsTitle">All Incidents</h1>
                <p className="mostWatchedIncidents">Most watched incidents</p>
                {cards}
                {/* <img src={peopleImage} className="peopleImage" /> */}
            </div>
        );
    }
};

export default withRouter(AllIncidents);