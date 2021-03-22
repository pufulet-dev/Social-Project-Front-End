import React, {Component} from 'react';
import './IncidentPage.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import LabelIcon from './LabelIcon.png';

class IncidentPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mainImage: "https://pixnio.com/free-images/2019/02/07/2019-02-07-09-14-13-1200x900.jpg",
            incidentDescription: [
                "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.", 
                "The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.",
            ],
            nrOfLikes: "Confirm",
            nrOfComments: "63",
            heartCSSclasses: "heartPic"
        };

        this.handleHeartClick = this.handleHeartClick.bind(this);
    }

    handleHeartClick() {
        let value = "", heartState = "";
        if (this.state.nrOfLikes === "Confirm") {
            value = "45";
            heartState = "heartPic heartClicked"
        } else { 
            value = "Confirm";
            heartState = "heartPic";
        }
        this.setState({
            nrOfLikes: value,
            heartCSSclasses: heartState,
        });
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <div className="incidentPageWrapper">
                    {/* COLUMN 1 */}
                    <div className="column1">
                        <img 
                            className="mainImage"
                            src={this.state.mainImage} />
                        <div className="labelsWrapper">
                            <img className="labelIcon" src={LabelIcon} />
                            <p className="labels"> Street Lights, Broken Lights, LPA, Local Public Administration, Studentilor Street </p>
                        </div>
                        <div className="incidentDescription">
                            <p>{this.state.incidentDescription[0]}</p>
                            <p>{this.state.incidentDescription[1]}</p>
                            <p>{this.state.incidentDescription[0]}</p>
                        </div>
                        {/* LIKES AND COMMENTS */}
                        <div className="likesAndComments">
                            <div onClick={this.handleHeartClick} className="heart" >
                                <img 
                                    src="https://i.pinimg.com/originals/cc/e9/a9/cce9a9a4a3d74bfce45f8b568d8c6e6d.png"
                                    className={this.state.heartCSSclasses} />
                                <p> {this.state.nrOfLikes} </p>
                            </div>
                            <div className="comment">
                                <img
                                    src="https://static.thenounproject.com/png/638755-200.png"
                                    className="commentPic" />
                                <p> {this.state.nrOfComments} </p>
                            </div>
                        </div>
                    </div>
                    {/* COLUMN 2 */}
                    <div className="column2">
                        {/* SEARCH SECTION */}
                        <div className="searchSectionWrapper">
                            <p className="rightBarTitles">Search</p>
                            <div className="searchBarWrapper">
                                <input type="text" placeholder="Search Keywords..." />
                                <button>
                                    <img src="https://www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png" />
                                </button>
                            </div>
                        </div>
                        {/* INCIDENT DETAILS */}
                        <div className="incidentDetailsWrapper">
                            <p className="rightBarTitles">Incident Detalis</p>
                            <div className="detailColumns">
                                <div className="detailName">
                                    <p>Location</p>
                                    <p>Incident Type</p>
                                    <p>Views</p>
                                    <p>Assigned To</p>
                                    <p>Confirmations</p>
                                </div>
                                <div className="details">
                                    <p>Studentilor 7/1, Chisinau</p>
                                    <p>Broken Lights</p>
                                    <p>18</p>
                                    <p>Local Administration</p>
                                    <p>5</p>
                                </div>
                            </div>
                        </div>
                        {/* RECENT INCIDENTS */}
                        <div className="recentIncidentsWrapper">
                            <p className="rightBarTitles">Recent Incidents</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default IncidentPage;
