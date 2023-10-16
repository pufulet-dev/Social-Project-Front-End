import React from 'react';
import './RelatedPostCard.css';

const RelatedPost = (props) => {

    let value = "relatedPostWrapper ";
    if (props.styling) value += props.styling;

    return (
        <div className={value}>
            <img
                className="relatedPostImage" 
                src={props.image} />
            <p className="relatedPostName"> {props.name} </p>
            <div className="likesAndComments">
                <div className="heart" >
                    <img
                        src="https://i.pinimg.com/originals/cc/e9/a9/cce9a9a4a3d74bfce45f8b568d8c6e6d.png"
                        className="heartPic" />
                    <p> {props.likes} </p>
                </div>
                <div className="comment">
                    <img
                        src="https://static.thenounproject.com/png/638755-200.png"
                        className="commentPic" />
                    <p> {props.comments} </p>
                </div>
                <div className="readMoreWrapper">
                    <p className="readMoreText">Read More</p>
                    <img 
                        src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png"
                        className="readMoreIcon" />
                </div>
            </div>
        </div>
    );
};

export default RelatedPost;