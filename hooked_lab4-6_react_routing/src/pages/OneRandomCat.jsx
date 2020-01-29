/*
Joseph P. Pasaoa
OneRandomCat Page Component | Joseph's Random Cat-Dog Image Fetcher (Hooks Lab Revision)
*/


/* IMPORTS */
    // external
    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    // local
    import ImageSpot from '../components/ImageSpot';


/* COMPONENT */
const OneRandomCat = (props) => {

  // USESTATES
    const [ url, setUrl ] = useState("");

  // USEEFFECTS
  useEffect(() => {
      const getImage = async () => {
        let response = null;
        try {
          response = await axios.get(`https://api.thecatapi.com/v1/images/search`);
        } catch (err) {
          throw new Error ("(OneRandomCat): ", err);
        }
        setUrl(response.data[0].url);
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
export default OneRandomCat;
