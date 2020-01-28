/*
Joseph P. Pasaoa
Progress Component | Go Fund Me Lab
*/


/* IMPORTS */
import React from 'react';
import './Progress.css';


/* MAIN */
const Progress = (props) => {
  const { raised, target, percentToTarget } = props;

  return (
    <section id="progress">
      <h2>Progress</h2>
      <strong>Raised <span>${raised}</span> of <em>${target}</em></strong>
      <div 
        id="progressBar" 
        style={{
          "width": `${percentToTarget >= 100 ? 100 : percentToTarget}%`
        }}
      >
        {percentToTarget}%
      </div>
    </section>
  )
}


/* EXPORT */
export default Progress;
