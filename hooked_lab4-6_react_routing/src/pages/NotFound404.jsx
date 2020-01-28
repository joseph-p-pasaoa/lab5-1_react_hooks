/*
Joseph P. Pasaoa
NotFound404 Page Component | Joseph's Random Cat-Dog Image Fetcher
*/


/* IMPORTS */
    // external
    import React from 'react';

    // local
    import './NotFound404.css';


/* COMPONENT */
const NotFound404 = () => {

  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        Oops, you're not supposed to be here. 
        Better try again and pick a route from the left!
      </p>
    </div>
  );
}


/* EXPORT */
export default NotFound404;
