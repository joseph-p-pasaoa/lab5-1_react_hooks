/*
Joseph P. Pasaoa
Donation Card Component | Go Fund Me Lab
*/


/* IMPORTS */
import React from 'react';
import './DonationCard.css';


/* MAIN */
const DonationCard = (props) => {
  return (
    <li className="donation">
      <h3><strong>{props.name}</strong> donated <em>${props.amount}</em></h3>
      <p>{props.msg}</p>
    </li>
  )
}


/* EXPORT */
export default DonationCard;
