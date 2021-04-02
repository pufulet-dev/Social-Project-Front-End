import React from 'react';
import './RecentIncidentCard.css';

const RecentIncident = (props) => {

    return (
        <div className="recentIncidentWrapper">
            <img 
                src={props.image}
                className="recentIncidentPicture" />
            <div className="recentIncidentInfo">
                <p className="recentIncidentName"> {props.title} </p>
                <p className="recentIncidentDate"> {props.date} </p>
            </div>
        </div>
    );
};

export default RecentIncident;