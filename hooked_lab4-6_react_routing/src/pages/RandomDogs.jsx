/*
Joseph P. Pasaoa
RandomDogs Page Component | Joseph's Random Cat-Dog Image Fetcher (Hooks Lab Revision)
*/


/* IMPORTS */
    // external
    import React, { Component } from 'react';
    import axios from 'axios';

    // local
    import ImageCard from '../components/ImageCard';


/* COMPONENT & EXPORT */
export default class RandomDogs extends Component {
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
      response = await axios.get(`https://dog.ceo/api/breeds/image/random/${howMany}`);
    } catch (err) {
      throw new Error ("(RandomDogs): ", err);
    }
    this.setState({ urls: response.data.message });
  }


  render () {
    const listImageCards = this.state.urls.map(url => <ImageCard key={url} url={url} alt="a random dog" />);

    return (
      <div className="stage--grid">
        {listImageCards}
      </div>
    );
  }
}
