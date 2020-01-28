/*
JOSEPH P. PASAOA
CommentCard Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
    // external
    import React from 'react';

    // local
    import './CommentCard.css';


/* COMPONENT */
const CommentCard = (props) => {
  const { name, comment } = props;

  return (
    <div className="card-comment-box">
      <h2 className="card-comment-name">
        {name}
      </h2>
      <div className="card-comment-body">
        {comment}
      </div>
    </div>
  )
}


/* EXPORT */
export default CommentCard;
