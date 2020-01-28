/*
Joseph P. Pasaoa
Progress Component | Go Fund Me Lab
*/


/* IMPORTS */
import React from 'react';
import './Progress.css';


/* MAIN */
const Progress = (props) => {
  return (
    <section id="progress">
      <h2>Progress</h2>
      <strong>Raised <span>${props.raised}</span> of <em>${props.target}</em></strong>
      <div 
        id="progressBar" 
        style={{
          "width": `${props.percentToTarget >= 100 ? 100 : props.percentToTarget}%`
        }}
      >
        {props.percentToTarget}%
      </div>
    </section>
  )
}


/* EXPORT */
export default Progress;
