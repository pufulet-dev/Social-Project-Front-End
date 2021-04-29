import React, {Component} from 'react';
import './IncidentPage.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import CommentBox from "../../components/CommentBox/CommentBox.js";
import RecentIncidentCard from "../../components/RecentIncidentCard/RecentIncidentCard.js";
import LabelIcon from './LabelIcon.png';
import RelatedPost from '../../components/RelatedPostCard/RelatedPostCard.js';

class IncidentPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listOfComments: [
                {
                    profilePic: "https://ps.w.org/wp-user-avatar/assets/icon-256x256.png?rev=1755722",
                    authorsName: "Lorenzo Peterson",
                    date: "15th August, 2019 at 01:25 pm",
                    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
                
                },
                {
                    profilePic: "https://ps.w.org/wp-user-avatar/assets/icon-256x256.png?rev=1755722",
                    authorsName: "Tammy Camacho",
                    date: "6th May, 2020 at 10:25 pm",
                    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
                
                },
            ],
            listOfRecentIncidents: [
                {
                    image: "https://pixnio.com/free-images/2019/02/07/2019-02-07-09-14-13-1200x900.jpg",
                    title: "Something doesn't work",
                    date: "13th March, 2019",
                },
                {
                    image: "https://static.automarket.ro/img/db/article/044/501/155139l.jpg?ts=1336054667",
                    title: "Problem",
                    date: "26th October, 2020",
                },
                {
                    image: "https://pixnio.com/free-images/2019/02/07/2019-02-07-09-14-13-1200x900.jpg",
                    title: "Something doesn't work",
                    date: "13th March, 2019",
                },
            ],    
            listOfRelatedPosts: [
                {
                    image: "https://pixnio.com/free-images/2019/02/07/2019-02-07-09-14-13-1200x900.jpg",
                    likes: "34",
                    comments: "23",
                    name: "Street Ilumination Work Stopped",
                },
                {
                    image: "https://pixnio.com/free-images/2019/02/07/2019-02-07-09-14-13-1200x900.jpg",
                    likes: "12",
                    comments: "65",
                    name: "Stolen Bulbs"
                },
            ], 
            mainImage: "https://pixnio.com/free-images/2019/02/07/2019-02-07-09-14-13-1200x900.jpg",
            incidentDescription: [
                "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.", 
                "The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.",
            ],
            listOfTags: [
                "INCIDENTS", "LPA", "STREET", "ILUMINATION", "BULBS", "BROKEN",
                "BULBS", "LIGHTS", "ACTION", "RESPONSIBLE", "ACTIVIST"
            ],
            nrOfLikes: "Confirm",
            nrOfComments: "63",
            heartCSSclasses: "heartPic",
            nameOfIncidentsAuthor: "Kevin Black",
            dateOfIncidentAdd: "12th December, 2020",
        };

        this.handleHeartClick = this.handleHeartClick.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
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

        const comments = (
            <div>
                {
                    this.state.listOfComments.map((comment, index) => {
                        return <CommentBox 
                            image={comment.profilePic}
                            name={comment.authorsName}
                            date={comment.date}
                            key={comment.index}
                            text={comment.text}
                        />
                    })
                }
            </div>
        );

        const recentIncidents = (
            <div>
                {
                    this.state.listOfRecentIncidents.map((card, index) => {
                        return <RecentIncidentCard 
                            image={card.image}
                            title={card.title}
                            date={card.date}
                            key={card.index}
                        />
                    })
                }
            </div>
        );

        const relatedPosts = (
            <div>
                {
                    this.state.listOfRelatedPosts.map((post, index) => {
                        return <RelatedPost 
                            image={post.image}
                            name={post.name}
                            likes={post.likes}
                            comments={post.comments}
                            key={post.index}
                            className="singleRelatedPost"
                        />
                    })
                }
            </div>
        );

        return (
            <div>
                <NavigationBar />
                {/* TITLE OF INCIDENT */}
                <div className="nameOfIncident">Broken Street Lights</div>
                <div className="aboutIncidentsAuthor">
                    <img 
                        src="https://icons-for-free.com/iconfiles/png/512/person+user+icon-1320166085409390336.png"
                        className="icon1" />
                    <p> {this.state.nameOfIncidentsAuthor} </p>
                    <img 
                        src="https://images.echocommunity.org/85032db6-de87-47fc-abaf-d1fa3a5f498f/calendar-icon-marketing-image.png?w=1200"
                        className="icon2" />
                    <p> {this.state.dateOfIncidentAdd} </p>
                </div>
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
                        {/* COMMENTS */}
                        <p className="commentTitle">Comments</p>
                        <div>
                            {comments}
                        </div>
                        {/* RELATED POSTS */}
                        <p className="commentTitle">Related Posts :</p>
                        <div className="relatedPostsWrapper">
                            {relatedPosts}
                        </div>
                        {/* LEAVE A COMMENT */}
                        <p className="commentTitle">Leave a Comment :</p>
                        <p className="registerLabel yourComment">Your Comment</p>
                        <div className="addIncidentDescription">
                            <img 
                                className="descriptionIcon addCommentIcon"
                                src="https://img.icons8.com/ios/452/speech-bubble--v2.png">    
                            </img>
                            <textarea rows="10" className="addIncidentTextarea addCommentField"></textarea>
                        </div>
                        <button className="sendMessageButton">Send Message</button>
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
                            {recentIncidents}
                        </div>
                        {/* TAGS */}
                        <div className="tagsWrapper">
                            <p className="rightBarTitles">Tags Cloud</p>
                            <div className="tags">
                                {
                                    this.state.listOfTags.map((tag, index) => {
                                        return (<div className="tagCard"> {tag} </div>)
                                    })
                                }
                            </div>
                        </div>
                        {/* <br /> */}
                        {/* SOCIAL MEDIA */}
                        <div className="incidentPageSocialMedia">
                            <div className="rightBarTitles">Follow us :</div>
                            <div className="socialMediaSection">
                                <img    
                                    className="" 
                                    src="https://www.flaticon.com/svg/vstatic/svg/2111/2111392.svg?token=exp=1617877307~hmac=995ac1fb15ca3921ac402ffbda191234" />
                                <img 
                                    className=""
                                    src="https://www.flaticon.com/svg/vstatic/svg/1384/1384031.svg?token=exp=1617877997~hmac=ec31b55e3544656f8c234fe42436a662" />    
                                <img 
                                    className=""
                                    src="https://www.flaticon.com/svg/vstatic/svg/733/733635.svg?token=exp=1617877997~hmac=da7c7527629d2c4041e5e9510770a83e" />
                                <img 
                                    className=""
                                    src="https://www.flaticon.com/svg/vstatic/svg/1384/1384028.svg?token=exp=1617878169~hmac=578cd5f6b09851901ef0b9801e04b2f7" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default IncidentPage;
