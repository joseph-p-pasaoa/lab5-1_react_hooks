/*
Joseph P. Pasaoa
APP MAIN | Go Fund Me Lab (Hooks Lab Revision)
*/


/* IMPORTS */
import React, { useState } from 'react';
import './App.css';

import TopBar from './components/TopBar';
import RecentDonations from './components/RecentDonations';
import Progress from './components/Progress';
import DonationForm from './components/DonationForm';


/* MAIN */
const App = () => {

  // SET DATA
    const target = 1000;

  // USESTATE HOOKS
    const [ donations, setDonations ] = useState([
        { name: "Joey", amount: 211, msg: "Good luck, Alejo! May your trip be all you imagined and more!" },
        { name: "JR", amount: 400, msg: "wish I were the one going!!!" },
        { name: "Wynter", amount: 50, msg: "Bon voyage!" },
        { name: "Dessa", amount: 100, msg: "Bring me back something cool~" }
    ]);
    const [ inputValue, setInputValue ] = useState({
        nameValue: "",
        amountValue: 0,
        msgValue: ""
    });
    const [ errorMsgOpacity, setErrorMsgOpacity ] = useState({ opacity: 0 });


  // HANDLERS
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue(prevState => ({
          ...prevState,
          [name] : value
      })
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amountValue) {
      setErrorMsgOpacity({ opacity: 1 });
    } else {
      const newDonation = {
        name: nameValue,
        amount: Number(amountValue),
        msg: msgValue
      }
      const updatedDonations = [ newDonation, ...donations ];

      setDonations(updatedDonations);
      setInputValue(prevState => ({
            ...prevState,
            nameValue: "",
            amountValue: 0,
            msgValue: ""
        })
      );
      setErrorMsgOpacity({ opacity: 0 });
    }
  }


  // PRE-RETURN
  const { nameValue, amountValue, msgValue } = inputValue;
  const raised = donations.reduce((sum, curr) => sum += curr.amount, 0);
  const percentToTarget = (raised / target * 100).toFixed(2);


  // RETURN
  return (
    <div className="App">
      <div id="grid-base">
        <TopBar />
        <RecentDonations 
          donations={donations}
        />
        <Progress 
          target={target} 
          raised={raised}
          percentToTarget={percentToTarget}
        />
        <DonationForm 
          handleSubmit={handleSubmit} 
          handleChange={handleChange} 
          nameValue={nameValue}
          amountValue={amountValue}
          msgValue={msgValue}
          errorMsgOpacity={errorMsgOpacity} 
        />
        <footer>Copyright ©2019 Joseph P. Pasaoa. All rights reserved.</footer>
      </div>
    </div>
  );
}


/* EXPORTS */
export default App;
