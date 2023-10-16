import React from 'react';
import './IncidentCard.css';

const IncidentCard = (props) => {

    return (
        <div className="cardWrapper">
            <img src={props.photo} className="cardImage" />
            <p className="cardTitle" > {props.title} </p>
            <div className='cardLocation'>
                <img 
                    src="https://upload-icon.s3.amazonaws.com/uploads/icons/png/14432100661535698998-512.png" 
                    className="locationIcon" />
                <p> {props.location} </p>
            </div>
            <div className="cardDescription">
                <p className="descriptionTitle" >Description:</p>
                <span className="usersDescription"> {props.description} </span>
            </div>
            <button onClick={props.callback} className="viewButton">View Now</button>
        </div>
    );
};

export default IncidentCard;