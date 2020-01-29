/*
Joseph P. Pasaoa
RandomDogByBreed Page Component | Joseph's Random Cat-Dog Image Fetcher (Hooks Lab Revision)
*/


/* IMPORTS */
    // external
    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    // local
    import './RandomDogByBreed.css';
    import ImageSpot from '../components/ImageSpot';


/* COMPONENT */
const RandomDogByBreed = (props) => {

  // USESTATES
  const [ breeds, setBreeds ] = useState([]);
  const [ url, setUrls ] = useState("");

  // USEEFFECTS
  useEffect(() => {
      /* populate breeds state on load */
      const getBreeds = async () => {
        let response = null;
        try {
          response = await axios.get(`https://dog.ceo/api/breeds/list/all`);
        } catch (err) {
          throw new Error ("(RandomDogByBreed: getBreeds): ", err);
        }
        const breedsObj = response.data.message;
        let breedArray = [];
        for (let key in breedsObj) {
          breedArray.push(key);
        }
        setBreeds(breedArray);
      }

      getBreeds();
  }, []);

  useEffect(() => {
      /* get new images on breed or location.key change */
      const getImage = async () => {
        const whichBreed = props.match.params.breed;
        let response = null;
        try {
          response = await axios.get(`https://dog.ceo/api/breed/${whichBreed}/images/random`);
        } catch (err) {
          console.log(err);
          throw new Error ("(RandomDogByBreed): ", err);
        }
        setUrls(response.data.message);
      }

      if (props.match.params.breed !== "default") {
        getImage();
      }
  }, [ props.match.params.breed, props.location ]);


  // HANDLERS
  const handleChange = (e) => {
    const selectedBreed = e.target.value;
    props.history.push({
        pathname: `/dogs/${selectedBreed}`
    });
  }


  // PRE-RETURN
  /* prep breed selector options */
  let listBreeds = null;
  if (breeds.length) {
    listBreeds = breeds.map(breed => <option key={breed} value={breed}>{breed}</option>);
  }

  /* prep image component after url data fetched */
  let dogCard = null;
  if (url) {
    dogCard = <ImageSpot url={url} />;
  }


  // RETURN
  return (
    <div className="stage--addconsole">

      <div className="console">
        <label htmlFor="selectValue">Pick a dog breed:</label>
        <select name="selectValue" value={props.match.params.breed} onChange={handleChange}>
          <option value="default" disabled>Pick a breed --</option>
          {listBreeds}
        </select>
      </div>

      {dogCard}

    </div>
  );
}


/* EXPORT */
export default RandomDogByBreed;
