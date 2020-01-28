/*
Joseph P. Pasaoa
RandomCats Page Component | Joseph's Random Cat-Dog Image Fetcher
*/


/* IMPORTS */
    // external
    import React, { Component } from 'react';
    import axios from 'axios';

    // local
    import ImageCard from '../components/ImageCard';


/* COMPONENT & EXPORT */
export default class RandomCats extends Component {
  state = {
    urls: []
  }

  componentDidMount = async () => {
    await this.getImages();
  }


  getImages = async () => {
    const howMany = this.props.match.params.num;
    let response = null;
    try {
      response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${howMany}`);
    } catch (err) {
      throw new Error ("(RandomCats): ", err);
    }
    const newUrls = response.data.map(obj => obj.url);
    this.setState({ urls: newUrls });
  }


  render () {
    const listImageCards = this.state.urls.map(url => <ImageCard key={url} url={url} alt="a random cat" />);

    return (
      <div className="stage--grid">
        {listImageCards}
      </div>
    );
  }
}
