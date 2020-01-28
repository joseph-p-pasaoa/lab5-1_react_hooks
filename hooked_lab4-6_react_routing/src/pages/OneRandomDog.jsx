/*
Joseph P. Pasaoa
OneRandomDog Page Component | Joseph's Random Cat-Dog Image Fetcher
*/


/* IMPORTS */
    // external
    import React, { Component } from 'react';
    import axios from 'axios';

    // local
    import ImageSpot from '../components/ImageSpot';


/* COMPONENT & EXPORT */
export default class OneRandomDog extends Component {
  state = {
    url: ""
  }

  componentDidMount = async () => {
    await this.getImage();
  }


  getImage = async () => {
    let response = null;
    try {
      response = await axios.get(`https://dog.ceo/api/breeds/image/random`);
    } catch (err) {
      throw new Error ("(OneRandomDog): ", err);
    }
    this.setState({ url: response.data.message });
  }


  render () {
    return (
      <>
        <ImageSpot url={this.state.url} />
      </>
    );
  }
}
