/*
Joseph P. Pasaoa
RandomCats Page Component | Joseph's Random Cat-Dog Image Fetcher (Hooks Lab Revision)
*/


/* IMPORTS */
    // external
    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    // local
    import ImageCard from '../components/ImageCard';


/* COMPONENT */
const RandomCats = (props) => {

  // USESTATES
  const [ urls, setUrls ] = useState([]);

  // USEEFFECTS
  useEffect(() => {
      const getImages = async () => {
        const howMany = props.match.params.num;
        let response = null;
        try {
          response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${howMany}`);
        } catch (err) {
          throw new Error ("(RandomCats): ", err);
        }
        const newUrls = response.data.map(obj => obj.url);
        setUrls(newUrls);
      }

      getImages();
  }, [ props.match.params.num, props.location ]);


  // PRE-RETURN
  const listImageCards = urls.map(url => <ImageCard key={url} url={url} alt="a random cat" />);


  // RETURN
  return (
    <div className="stage--grid">
      {listImageCards}
    </div>
  );
}


/* EXPORT */
export default RandomCats;
