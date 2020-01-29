/*
Joseph P. Pasaoa
ImageCard Component | Joseph's Random Cat-Dog Image Fetcher (Hooks Lab Revision)
*/


/* IMPORTS */
    // external
    import React from 'react';

    // local
    import './ImageCard.css';


/* COMPONENT */
const ImageCard = (props) => {

  return (
    <>
      <img src={props.url} alt={props.alt} className="imagecard" />
    </>
  );
}


/* EXPORT */
export default ImageCard;
