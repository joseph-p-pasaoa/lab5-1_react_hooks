/*
Joseph P. Pasaoa
OneRandomCat Page Component | Joseph's Random Cat-Dog Image Fetcher
*/


/* IMPORTS */
    // external
    import React, { Component } from 'react';
    import axios from 'axios';

    // local
    import ImageSpot from '../components/ImageSpot';


/* COMPONENT & EXPORT */
export default class OneRandomCat extends Component {
  state = {
    url: ""
  }

  componentDidMount = async () => {
    await this.getImage();
  }


  getImage = async () => {
    let response = null;
    try {
      response = await axios.get(`https://api.thecatapi.com/v1/images/search`);
    } catch (err) {
      throw new Error ("(OneRandomCat): ", err);
    }
    this.setState({ url: response.data[0].url });
  }


  render () {
    return (
      <>
        <ImageSpot url={this.state.url} />
      </>
    );
  }
}
