/*
JOSEPH P. PASAOA
Homepage Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
    // external
    import React, { Component } from 'react';

    // local
    import './Homepage.css';
    import VideoCard from '../components/VideoCard';

    import { getApiSearch } from '../helpers/apiComm.js';
    const { processInput } = require('../helpers/globalHelp.js');


/* COMPONENT + EXPORT */
export default class Homepage extends Component {
  state = {
    searchTxt: "",
    errorMessage: "",
    results: [],
    isBeginning: true
  }


  componentDidUpdate (prevProps, prevState) {
    if (this.props.location.state && !prevState.isBeginning) {
      this.setState(this.props.location.state);
    }
  }


  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { pass, payload } = processInput(this.state.searchTxt, "search terms");
    if (!pass) {
      this.setState({
          errorMessage: payload
      });
    } else {
      this.refs.btnSearch.blur();
      this.getSearchResults(payload);
    }
  }

  handleClear = (e) => {
    e.preventDefault();
    this.refs.btnClear.blur();
    this.setState({ searchTxt: "" });
  }


  getSearchResults = async (search) => {
    const results = await getApiSearch(search);
    this.setState({
        errorMessage: "",
        results: results,
        isBeginning: false
    });
  }


  render() {
    const { searchTxt, errorMessage, results, isBeginning } = this.state;

    let listResults = null;
    if (results.length) {
      listResults = results.map((result, i) => {
          const videoId = result.id.videoId;
          const title = result.snippet.title;
          const desc = result.snippet.description;
          const thumbUrl = result.snippet.thumbnails.high.url; // width: 480px h: 360px

          return (
            <VideoCard 
              key={i} 
              videoId={videoId} 
              title={title} 
              desc={desc} 
              thumbUrl={thumbUrl} 
            />
          );
      });
    }

    let showing = null;
    if (isBeginning) {
      showing = <p className="result-response">Search for videos above!</p>;
    } else if (!results.length) {
      showing = <p className="result-response">Sorry, no search results found. Try your search again above.</p>;
    } else {
      showing = listResults;
    }

    return(
      <div className="stage">
        <form onSubmit={this.handleSubmit} className="form-homesearch">
          <input 
            type="text" 
            name="searchTxt" 
            className="input-search" 
            value={searchTxt} 
            onChange={this.handleChange} 
            placeholder="Search..." 
          />
          <button className="btn-search" ref="btnSearch">Search</button>
          <button className="btn-clear" onClick={this.handleClear} ref="btnClear">Clear</button>
        </form>

        <div className="msg-error">{errorMessage}</div>

        <div className="results-grid">
          {showing}
        </div>

      </div>
    );
  }
}
