/*
Joseph P. Pasaoa
RandomDogsAndCats Page Component | Joseph's Random Cat-Dog Image Fetcher (Hooks Lab Revision)
*/


/* IMPORTS */
    // external
    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    // local
    import ImageCard from '../components/ImageCard';


/* COMPONENT */
const RandomDogsAndCats = (props) => {

  // USESTATES
  const [ urls, setUrls ] = useState([]);

  // USEEFFECTS
  useEffect(() => {
      const callCatApi = async (howMany) => {
        let response = null;
        if (!howMany) {
          return [];
        }
        try {
          response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${howMany}`);
        } catch (err) {
          throw new Error ("(RandomDogsAndCats: callCatApi): ", err);
        }
        return response.data.map(obj => obj.url);
      };
    
      const callDogApi = async (howMany) => {
        if (!howMany) {
          return [];
        }
        let response = null;
        try {
          response = await axios.get(`https://dog.ceo/api/breeds/image/random/${howMany}`);
        } catch (err) {
          throw new Error ("(RandomDogsAndCats: callDogApi): ", err);
        }
        return response.data.message;
      };
    
      const shuffleArray = (arr) => {
        // Knuth-Fisher-Yates algorithm
        // https://blog.codinghorror.com/the-danger-of-naivete/
        // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        let outputArray = [...arr];
        let currentIndex = outputArray.length, tempHold, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          tempHold = outputArray[currentIndex];
          outputArray[currentIndex] = outputArray[randomIndex];
          outputArray[randomIndex] = tempHold;
        }
        return outputArray;
      };
    
      const getImages = async () => {
        const totalImages = Math.floor(Math.random() * 10 + 1);
        const numCats = Math.floor(Math.random() * (totalImages + 1));
        const numDogs = totalImages - numCats;
        const [ catUrls, dogUrls ] = await Promise.all([
          callCatApi(numCats),
          callDogApi(numDogs)
        ]);
        const newUrls = [...catUrls, ...dogUrls];
        const shuffledNewUrls = shuffleArray(newUrls);
        setUrls(shuffledNewUrls);
      };

      getImages();
  }, [props.location]);


  // PRE-RETURN
  const listImageCards = urls.map(url => <ImageCard key={url} url={url} alt="a random animal" />);


  // RETURN
  return (
    <div className="stage--grid">
      {listImageCards}
    </div>
  );
}


/* EXPORT */
export default RandomDogsAndCats;
