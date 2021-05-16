import React, {Component} from 'react';
import './PersonalCabUser.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import RelatedPost from '../../components/RelatedPostCard/RelatedPostCard.js';
import Context from '../../store/context.js';
import axios from 'axios';
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaSnapchat} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";

class PersonalCabUser extends Component {

    static contextType = Context;

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            username: "Ionel Ceban",
            instagram: "ionel.ceban123",
            userBiography: "I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.",
            userEmail: "kristajoseph0203@mail.com",
            userLocation: "Chisinau, Moldova",
            userPhoneNumber: "(+12) 1254-56-4896",
            nrOfFollowers: "102",
            nrOfFollowing: "205",
            incidentsAdded: "7",
            incidentsAddedByUser: [
                {
                    image: "https://pixnio.com/free-images/2019/02/07/2019-02-07-09-14-13-1200x900.jpg",
                    title: "Something doesn't work",
                    likes: "25",
                    comments: "32",
                },
                {
                    image: "https://static.automarket.ro/img/db/article/044/501/155139l.jpg?ts=1336054667",
                    title: "Problem",
                    likes: "133",
                    comments: "983",
                },
            ]
        };
    };


    componentDidMount () {
        // let isMounted = true;

        this.myRef.current.scrollTo(0, 0);

        const {state} = this.context;

        const options = {
            headers: {
                'Authorization': state.authorizationToken,
                // 'Access-Control-Allow-Origin': '*'
            }
        };

        console.log('Tokenul:');
        console.log(state.authorizationToken);

        axios
            .get(`${state.path}/app-api/account/cab`, options)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    };

    render () {

        let progressPercentage = Math.round(parseInt(this.state.incidentsAdded) / 48 * 100);
        let widthValue = progressPercentage + "%";

        let trackBarWidth = {
            width: widthValue,
        }

        return (
            <div className="userCabFullWrapper" ref={this.myRef}>
                <NavigationBar />
                <div className="userCabWrapper">
                    <div className="userHeader">
                        <img
                            className="profilePic" 
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <div className="nameSocialMedia">
                            <p className="personalCabUsername"> {this.state.username} </p>
                            <div className="socialMedia">
                                <img 
                                    className="socailMediaIcon"
                                    src="https://image.flaticon.com/icons/png/512/87/87390.png" />
                                <p className="socialMediaProfile"> {this.state.instagram} </p>
                            </div>
                        </div>
                    </div>
                    <div className="userCabColumnsWrapper">
                        {/* COLUMN 1 */}
                        <div className="columnStatistics">
                            <p className="leftBarTitles">Followers :</p>
                            <div className="followStatistic">
                                <div className="followersWrapper">
                                    <img 
                                        className="followersIcon"
                                        src="https://cdn0.iconfinder.com/data/icons/ecommerce-line-8/64/addfriend_add_friend_follow_user_buyer-512.png" />
                                    <div className="followCount"> {this.state.nrOfFollowers} </div>
                                    <p className="followTitle">Followers</p>
                                </div>
                                <div className="followingWrapper">
                                    <img 
                                        className="followingIcon"
                                        src="https://static.thenounproject.com/png/2086891-200.png" />
                                    <div className="followCount"> {this.state.nrOfFollowing} </div>
                                    <p className="followTitle">Following</p>
                                </div>
                            </div>
                            <p className="leftBarTitles">Incidents :</p>
                            <div className="progressWrapper">
                                <p>Progress</p>
                                <div> {this.state.incidentsAdded} / 48 </div>
                            </div>
                            <div className="progressBar">
                                <div className="progressTrack" style={trackBarWidth}>
                                    {/* progress bar */}
                                </div>
                            </div>
                            {/* SOCIAL MEDIA */}
                            <div className="leftBarTitles">Follow us :</div>
                            <div className="socialMediaSection">
                                <FaFacebook className="followUsIcon" />
                                <FaInstagram className="followUsIcon" />
                                <FaTwitter className="followUsIcon" />
                                <FaSnapchat className="followUsIcon" />
                            </div>
                        </div>
                        {/* COLUMN 2 */}
                        <div className="columnAbout">
                            <div className="leftBarTitles"> {this.state.username} </div>
                            <div className="userBiography"> {this.state.userBiography} </div>
                            <br />
                            <div className="leftBarTitles"> Personal Details : </div>
                            <div className="personalDetailsWrapper">
                                <div className="personalDetailsCard">
                                    <img src="data:image/png;base64,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" />
                                    <div className="personalDetailsText">
                                        <p>Email :</p>
                                        <div> {this.state.userEmail} </div>
                                    </div>
                                </div>
                                <div className="personalDetailsCard">
                                    <img src="https://previews.123rf.com/images/ahasoft2000/ahasoft20001703/ahasoft2000170301366/73993632-globe-vector-icon-flat-gray-symbol-pictogram-is-isolated-on-a-white-background-designed-for-web-and-.jpg" />
                                    <div className="personalDetailsText">
                                        <p>Username :</p>
                                        <div> {this.state.username} </div>
                                    </div>
                                </div>
                                <div className="personalDetailsCard">
                                    <img src="https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-1-1/32/location-gray-512.png" />
                                    <div className="personalDetailsText">
                                        <p>Location :</p>
                                        <div> {this.state.userLocation} </div>
                                    </div>
                                </div>
                                <div className="personalDetailsCard">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEX///+AgIB9fX38/Py9vb2BgYH6+vrx8fGFhYX29vbu7u56enqnp6eOjo6Kiorq6urb29vOzs6enp6zs7OlpaWXl5etra3k5OTT09OUlJTa2trIyMjDw8O5ubloQfJ4AAAIcUlEQVR4nN1d2ZaiMBCVCnvYUUCB///NAacd225ZUqlIZe7LPI0ntxNqX04nVYigKMu+i32h/F9tgIjLCuQdYV0ERx+HHnF/AXC+IJ1zFx19ImLckvAfvxmQjfHRZyLFkL7wmyl6SX70qegQjeFPgjPHy39DMU5+07tTTP8Tiu3lzQV+UWyPPhwBxO26RHB+qPZTFOUvGfNC8Wz7QxX9OxnzHY3duj9yvQ2Cjjf6R59SA3HjbfCbKfZHHxOP9rzNb1b91kqbYkWIvlC82vlORbclY54UGxu9KdFvypgnwvLo46pD9M5+gjYqfn9TDf6AbVpR9JkSv/md2vUplqoEJ3lqlfV2y9Se6J1ibZHKaFdt7UWK3dHn3o140R1cZ5jaImxEgyI4v9Ojj74TPZLghOLos+9CgZAyj0usbAihRhX+Ch1vOPr4O+DucAiXL/HK33i7oRTFk2LDXSkGiRZBx8mYK0VRhnoEHTjzVoq5jpj5C6/nbIGLQZff7ClyzkjFO+My6xQ5a4xB6hNkbZ5GumLmL+R4NJFFkFzhhJDrJQo9Zf+E5PoldkQEJ9uNpwEuzlQMHY9n9LRVDj4tAs5Hk3kLLafiB0OWue9A32B7wnOPpvMGHd0jnS4x4edECZeQIMs0hrZj+IqQn5tYUKn7L/BT+j2dJJ0B7KoXopr2CoFdsi2m1BUzw4qbH1xQ6oo7Q265tpL2Cvkx9F0i15Atw4hWGzL8DgOKENQLw4SZLM1pIjTfGNbMnOCW+DN0gJtz0VEzZJe+oIqyPcBO0JyIbTZ+mVJBbbOxqx4SuPKSZXCTM3Sx4L+AKzNlODGktbvl7WhCvyBICXIsHBKkj5RjsQIlQ4+ddz+DkGFYcyRIyNAbWRIkZOgycykeEDTOEwDbShMajQ8MA90PCBIXn2Gu4h8oLG/mjd3agSgImTfnj5oeMGQ9UyH6QK/HUKYFVyH6wE2LoWQXs/gNnVgbOCPzFzpDI14KKV8t+A0aMe+LHT0W6LwFWELw5CPVBWSWEDyJEsdQ8ixge4cbqlBBJtzV4BO4jsOQsa39EwGm9FLW9lzhJGoQDENbxMwdiGYZ3p0Vv4Co+oLGAmvtCUQ/ELgMQ7/L8NVTiDBYJGgm9OofItvI2nu06sa3ZQwjdY1o2Ss9jaqGm2WSZp6FocqQW1XQFiLVZD5UPLMwy1DVF/aNhSxURY3HL1+/AdVxEdK1TJieVMto4WKZqDnlys/UIg/4DuUUlGRX+7QF1Xp2SG37EJX78RlWP61DuMpK/+gjq6JQdaGskzWR6hAsph2/K+hULzGz7UuMlb1Eu8JRJ0Qww4704Tfkyj4Ut+6YTSi7+raN9TzlqqFh+xYkjIp36Eh2Pb8bCNSnClqVoTmpu4n2+Ynql2idF6Vqf9uWSZwMG+VMm3WBRfUZrd5ol1JEzKqxbey8sothxeTS7wjUhyXbZp9iBrXalYrya2WCHKfurAGREuY54WsZiFGmcLHrnSJ6MCxbxtKqX+IkbayiiGnSz6xS/JiZu3C1ygbvEGW17EbvrMKvMbXRVtk2yqHFO2zaxoKpOmU4m2YNGOPNqgr+tQ2ka7DKQsW909SijJRADefhOL90ERGu6auyiGKLa/qi0/zCjyKz2+pxY7JoAoz+zU0u1/R6qZq+NcYS2bpH4C3mTSbhASnT0RRJnMpwpN72J5HX3uvrAelUnRmbsMMtudIKvwX9u2AYGOLou8g+4QbdN9Q2C1tQARoTrfHBwvb4LXgNUqKWa8vO09GAh5YjW6GR0zLc1SWo4FUd/TWil18gphH49eae3szADADsHF71evddVUsmgrPohnbFXtp2XxgTgLzKBb0eArJOQfcXu5Uv1NQdnohA/4PisPurualYF2divSFK7HZLCPf+uTulvyJciV8qWvFPWuO862PsFJN6kBEH2ZULbL8h3RG8KdVLJDziVEmAH+UK2zufUV8BdRmIznY9eV0VDP6wqeffUySuINDYpTsJHHdZ4EQujuBMkdaGK1dNxq3DVOXCm4pr/JIUSEvKMLsYdIYsQti8Vf/tWeNHZ4VLSTHCjND4fpqm+6n/Rak5jBpC0posRLHNK7JqeLHG20bn5X+BdM6K9lIa8MKL20bzmfy8r2hmi5KuCcNl3V4AUsowS7PpX6LxsLSz/NFG+M9TkfzK48fOlMGNG8GXQw4gHTCqpRZNARLChyr6o+m8AySE4RufdJ0gFaChY6ir+U2BsoggQiX5TYO0HDtojqbzBrRVWcSLL2lAW44dJNRrlAgQkk53is/8KBKX1uV0u67JQDzeHzHKzjSog1MMbxGIszYxMn1qDpJ6ZVis6/RTg37Sg3ZcgxhwJU8Rc6MY0ifBA142qjRQrREpN7mbhAmGk7+IjcobgBGGp1OvkdIghoHv8A719J8hSGO77QrqtcJIeOYad3ZWihiG0SHVOQPFCGYnOwUjbSAbA8MNyWI4OFb8gabyY+UNnD8wCz+v/nOCs5V61Ev92Lps/22R9gcIkibYViGKIzQjbXptC/HnA+KAL5xHQZQf1ozw+TW2BOl+BdAWnOxENNIu/F4BhNTxtX0QXfUZvxiy/hCCE2L3E34xXA/sy530BlXFzDLB6thJDvFg+BohObphVbRnMMcRHA7Lzv3yaorjJER5TIyJ3NQIR07DVPKG3hqH8MOG2jrEraEWOZee2ZSRqKOolX0AwvpoGfoGQZdQ2ePy8quamgeiInEI6jekNzDQEQsQc123XjU8eDXzYU3RcAnRrxW8lLzz0AS65oK5SYDwstJ5wwt5qUwSvGvT28JvRtSWYzWR3McSIE2Ggqf8XIGfF31zdeQGS5ATvb4IeJigqhBR3PZJOndgLCGs3Fse2UnvAeFPT3Zw36EsAvQAnj/oWIXbhplE+AAAAABJRU5ErkJggg==" />
                                    <div className="personalDetailsText">
                                        <p>Cell No :</p>
                                        <div> {this.state.userPhoneNumber} </div>
                                    </div>
                                </div>
                                <div className="leftBarTitles titleReportedIncidents">Reported Incidents</div>
                                <div className="reportedIncidentsByUserWrapper">
                                    <RelatedPost 
                                        styling="styleForPersonalCab"
                                        image={this.state.incidentsAddedByUser[0].image}
                                        name={this.state.incidentsAddedByUser[0].title}
                                        likes={this.state.incidentsAddedByUser[0].likes}
                                        comments={this.state.incidentsAddedByUser[0].comments} />
                                    <RelatedPost 
                                        styling="styleForPersonalCab"
                                        image={this.state.incidentsAddedByUser[1].image}
                                        name={this.state.incidentsAddedByUser[1].title}
                                        likes={this.state.incidentsAddedByUser[1].likes}
                                        comments={this.state.incidentsAddedByUser[1].comments} />
                                </div>
                                <button className="sendMessageButton userPersCabSeeMoreButton">See More...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default PersonalCabUser;