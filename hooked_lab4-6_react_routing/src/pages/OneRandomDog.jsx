/*
Joseph P. Pasaoa
OneRandomDog Page Component | Joseph's Random Cat-Dog Image Fetcher (Hooks Lab Revision)
*/


/* IMPORTS */
    // external
    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    // local
    import ImageSpot from '../components/ImageSpot';


/* COMPONENT & EXPORT */
const OneRandomDog = (props) => {

  // USESTATES
    const [ url, setUrl ] = useState("");

  // USEEFFECTS
  useEffect(() => {
      const getImage = async () => {
        let response = null;
        try {
          response = await axios.get(`https://dog.ceo/api/breeds/image/random`);
        } catch (err) {
          throw new Error ("(OneRandomDog): ", err);
        }
        setUrl(response.data.message);
      };

      getImage();

  }, [props.location]);


  // RETURN
  return (
    <>
      <ImageSpot url={url} />
    </>
  );
}


/* EXPORT */
export default OneRandomDog;
