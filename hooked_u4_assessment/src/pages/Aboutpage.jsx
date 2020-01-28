/*
JOSEPH P. PASAOA
Aboutpage Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
    // external
    import React from 'react';

    // local
    import './Aboutpage.css';


/* COMPONENT + EXPORT */
const Aboutpage = () => {

  return(
    <div className="stage">
      <h1>About YouTube Abbreviated</h1>
      <div className="body-about">
        
        <p>
          YouTube Abbreviated takes the user's inputed search and returns eight
          of the top results from the YouTube API (Thanks, 
            YouTube). 
          The user is then able to watch any of the results in the video 
          result's own page which allows comments to be submitted and saved 
          (temporarily for now).
        </p>

        <p style={{color: "#ccc"}}>
          The logo is a combined-on-load duo of pngs obtained from PNGGuru. The
          fonts of Roboto--which YouTube primarily uses currently, and Open Sans 
          are used here. No css libraries were implemented because there was no 
          time to incorporate them within the time alloted.
        </p>
          
        <p>
          YouTube Abbreviated is at it's core a kick-a** React app developed
          under the shadow of the Unit 4 Assessment Component of the famed
          Pursuit Full-Stack Web Development Fellowship real-life app.
        </p>
        
        <p style={{marginTop: "28px"}}>
          Regards,
        </p>

        <p style={{marginTop: "14px"}}>
          <strong>Joseph P. Pasaoa, developer</strong>
        </p>

      </div>

    </div>
  );
}

export default Aboutpage;
