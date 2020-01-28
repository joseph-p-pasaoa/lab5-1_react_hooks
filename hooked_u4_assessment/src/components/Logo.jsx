/*
JOSEPH P. PASAOA
Logo Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
    // external
    import React from 'react';
    import { Link } from 'react-router-dom';

    // local
    import './Logo.css';

    const imgLogo = require('../assets/images/logo-top.png');
    const imgCirc = require('../assets/images/logo-circ.png');


/* COMPONENT */
const Logo = () => {

  return(
    <Link 
      className="logo-nav-link" 
      to={{
          pathname: "/",
          state: {
            searchTxt: "",
            errorMessage: "",
            results: [],
            isBeginning: true
          }
      }} 
    >
      <div className="logo-box">
        <img src={imgCirc} className="logocirc-img" alt="YouTube Abbreviated" />
        <img src={imgLogo} className="logo-img" alt="YouTube Abbreviated" />
      </div>
    </Link>
  );
}


/* EXPORT */
export default Logo;
