/*
Joseph P. Pasaoa
Donation Form Component | Go Fund Me Lab (Hooks Lab Revision)
*/


/* IMPORTS */
import React from 'react';
import './DonationForm.css';


/* MAIN */
const DonationForm = (props) => {
  const {
    errorMsgOpacity, nameValue, msgValue, amountValue, handleSubmit, handleChange
  } = props;

  return (
    <section id="form">
      <h2>Make a Donation</h2>
      <p style={errorMsgOpacity}>Please set a donation amount</p>
      <form id="formDonate" onSubmit={handleSubmit}>
        <label htmlFor="nameValue">Name</label>
        <input 
          type="text" 
          id="nameValue" 
          name="nameValue" 
          onChange={handleChange} 
          value={nameValue} 
          placeholder="Enter your name" 
          required 
        />
        <label htmlFor="msgValue">Message</label>
        <input 
          type="text" 
          id="msgValue" 
          name="msgValue" 
          onChange={handleChange} 
          value={msgValue} 
          placeholder="Message to Alejo?" 
          required 
        />
        <label htmlFor="amountValue">Amount to donate: ${props.amountValue}</label>
        <input 
          type="range" 
          id="amountValue" 
          name="amountValue" 
          min="1" 
          max="1000" 
          step="1" 
          onChange={handleChange} 
          value={amountValue} 
        />
        <button type="submit">Donate!</button>
      </form>
    </section>
  )
}


/* EXPORT */
export default DonationForm;
