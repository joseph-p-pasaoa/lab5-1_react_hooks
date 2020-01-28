/*
JOSEPH P. PASAOA
VideoCard Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
    // external
    import React from 'react';
    import { Link } from 'react-router-dom';

    // local
    import './VideoCard.css';


/* COMPONENT */
const VideoCard = (props) => {
  const { videoId, title, desc, thumbUrl } = props;

  return (
    <Link to={`/video/${videoId}`} className={"card-video-link"}>
      <div className="card-video-box">
        <img className="card-video-thumbnail" src={thumbUrl} alt={desc} />
        <h2 className="card-video-title">{title}</h2>
      </div>
    </Link>
  )
}


/* EXPORT */
export default VideoCard;
