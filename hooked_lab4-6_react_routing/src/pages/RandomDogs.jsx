/*
Joseph P. Pasaoa
RandomDogs Page Component | Joseph's Random Cat-Dog Image Fetcher (Hooks Lab Revision)
*/


/* IMPORTS */
    // external
    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    // local
    import ImageCard from '../components/ImageCard';


/* COMPONENT */
const RandomDogs = (props) => {

  // USESTATES
    const [ urls, setUrls ] = useState([]);

  // USEEFFECTS
  useEffect(() => {
    const getImages = async () => {
      const howMany = props.match.params.num;
      let response = null;
      try {
        response = await axios.get(`https://dog.ceo/api/breeds/image/random/${howMany}`);
      } catch (err) {
        throw new Error ("(RandomDogs): ", err);
      }
      setUrls(response.data.message);
    }

    getImages();

  }, [ props.match.params.num, props.location ]);


  // PRE-RETURN
  const listImageCards = urls.map(url => <ImageCard key={url} url={url} alt="a random dog" />);


  // RETURN
  return (
    <div className="stage--grid">
      {listImageCards}
    </div>
  );
}


/* EXPORT */
export default RandomDogs;
