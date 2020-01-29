/*
Joseph P. Pasaoa
RandomDogsAndCats Page Component | Joseph's Random Cat-Dog Image Fetcher (Hooks Lab Revision)
*/


/* IMPORTS */
    // external
    import React, { Component } from 'react';
    import axios from 'axios';

    // local
    import ImageCard from '../components/ImageCard';


/* COMPONENT & EXPORT */
export default class RandomDogsAndCats extends Component {
  state = {
    urls: []
  }

  componentDidMount = async () => {
    await this.getImages();
  }


  callCatApi = async (howMany) => {
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
  }

  callDogApi = async (howMany) => {
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
  }

  shuffleArray = (arr) => {
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
  }

  getImages = async () => {
    const totalImages = Math.floor(Math.random() * 10 + 1);
    const numCats = Math.floor(Math.random() * (totalImages + 1));
    const numDogs = totalImages - numCats;
    const [ catUrls, dogUrls ] = await Promise.all([
      this.callCatApi(numCats),
      this.callDogApi(numDogs)
    ]);
    const newUrls = [...catUrls, ...dogUrls];
    const shuffledNewUrls = this.shuffleArray(newUrls);
    this.setState({ urls: shuffledNewUrls });
  }


  render () {
    const listImageCards = this.state.urls.map(url => <ImageCard key={url} url={url} alt="a random animal" />);

    return (
      <div className="stage--grid">
        {listImageCards}
      </div>
    );
  }
}
