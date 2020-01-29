/*
Joseph P. Pasaoa
RandomDogByBreed Page Component | Joseph's Random Cat-Dog Image Fetcher (Hooks Lab Revision)
*/


/* IMPORTS */
    // external
    import React, { Component } from 'react';
    import { withRouter } from 'react-router-dom';
    import axios from 'axios';

    // local
    import './RandomDogByBreed.css';
    import ImageSpot from '../components/ImageSpot';


/* COMPONENT */
class RandomDogByBreed extends Component {
  state = {
    breeds: [],
    url: ""
  }

  componentDidMount = async () => {
    await this.getBreeds();
    if (this.props.match.params.breed !== "default" && !this.state.url) {
      await this.getImage();
    }
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      await this.getImage();
    }
  }


  getBreeds = async () => {
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
    this.setState({ breeds: breedArray });
  }
  
  getImage = async () => {
    const whichBreed = this.props.match.params.breed;
    let response = null;
    try {
      response = await axios.get(`https://dog.ceo/api/breed/${whichBreed}/images/random`);
    } catch (err) {
      throw new Error ("(RandomDogByBreed): ", err);
    }
    this.setState({ url: response.data.message });
  }

  handleChange = (e) => {
    const selectedBreed = e.target.value;
    this.props.history.push({
        pathname: `/dogs/${selectedBreed}`
    });
  }


  render () {
    // Populate breed selector
    let listBreeds = null;
    if (this.state.breeds.length) {
      listBreeds = this.state.breeds.map(breed => <option key={breed} value={breed}>{breed}</option>);
    }

    // Display image after url get
    let dogCard = null;
    if (this.state.url) {
      dogCard = <ImageSpot url={this.state.url} />;
    }

    return (
      <div className="stage--addconsole">

        <div className="console">
          <label htmlFor="selectValue">Pick a dog breed:</label>
          <select name="selectValue" value={this.props.match.params.breed} onChange={this.handleChange}>
            <option value="default" disabled>Pick a breed --</option>
            {listBreeds}
          </select>
        </div>

        {dogCard}

      </div>
    );
  }
}


/* EXPORT */
export default withRouter(RandomDogByBreed);
