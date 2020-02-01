/*
JOSEPH P. PASAOA
Homepage Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
    // external
    import React, { useState } from 'react';

    // local
    import './Homepage.css';
    import VideoCard from '../components/VideoCard';

    import { getApiSearch } from '../helpers/apiComm.js';
    const { processInput } = require('../helpers/globalHelp.js');


/* COMPONENT */
const Homepage = (props) => {

  // USESTATES
  const [ searchTxt, setSearchTxt ] = useState("");
  // const [ triggerReset, setTriggerReset ] = useState(false);
  const [ errorMsg, setErrorMsg ] = useState("");
  const [ results, setResults ] = useState([]);


  // CREATE REFS
  const refBtnSearch = React.createRef();
  const refBtnClear = React.createRef();


  // HANDLERS
  const handleChange = (e) => {
    setSearchTxt(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { pass, payload } = processInput(searchTxt, "search terms");
    if (!pass) {
      setErrorMsg(payload);
    } else {
      refBtnSearch.current.blur();
      getSearchResults(payload);
    }
  }

  const handleClear = (e) => {
    e.preventDefault();
    refBtnClear.current.blur();
    setSearchTxt("");
  }


  // HELPERS
  const getSearchResults = async (search) => {
    const results = await getApiSearch(search);
    setErrorMsg("");
    if (results.length === 0) {
      results[0] = "no results found";
    };
    setResults(results);
  }


  //PRE-RETURN
  let listResults = null;
  if (results.length && results[0] !== "no results found") {
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
  if (results[0] === "no results found") {
    showing = <p className="result-response">Sorry, no search results found. Try your search again above.</p>;
  } else if (results.length === 0) {
    showing = <p className="result-response">Search for videos above!</p>;
  } else {
    showing = listResults;
  }

  return(
    <div className="stage">
      <form onSubmit={handleSubmit} className="form-homesearch">
        <input
          type="text"
          name="searchTxt"
          className="input-search"
          value={searchTxt}
          onChange={handleChange}
          placeholder="Search..."
        />
        <button className="btn-search" ref={refBtnSearch}>Search</button>
        <button className="btn-clear" onClick={handleClear} ref={refBtnClear}>Clear</button>
      </form>

      <div className="msg-error">{errorMsg}</div>

      <div className="results-grid">
        {showing}
      </div>

    </div>
  );
}


/* EXPORT */
export default Homepage;
