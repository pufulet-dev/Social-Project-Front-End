import React from 'react';
import './CommentBox.css';

const CommentBox = (props) => {
    return (
        <div className="commentBoxWrapper">
            <div className="aboutUser">
                <img
                    className="usersImage" 
                    src={props.image} />
                <div className="nameAndDate" >
                    <p className="authorsName"> {props.name} </p>
                    <p> {props.date} </p>
                </div>
                <div className="replyWrapper">
                    <img 
                        className="replyIcon"
                        src="https://www.materialui.co/materialIcons/content/reply_grey_192x192.png" />
                    <p>Reply</p>
                </div>
            </div>
            <div className="commentText">
                "{props.text}"
            </div>
        </div>
    );
};

export default CommentBox;