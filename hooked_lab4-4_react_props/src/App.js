/*
Joseph P. Pasaoa
APP | Go Fund Me Lab
*/


/* IMPORTS */
import React, { Component } from 'react';
import './App.css';

import TopBar from './components/TopBar';
import RecentDonations from './components/RecentDonations';
import Progress from './components/Progress';
import DonationForm from './components/DonationForm';


/* MAIN */
class App extends Component {
  constructor() {
    super();
    this.target = 1000;
    this.state = {
      donations: [
        { name: "Joey", amount: 211, msg: "Good luck, Alejo! May your trip be all you imagined and more!" },
        { name: "JR", amount: 400, msg: "wish I were the one going!!!" },
        { name: "Wynter", amount: 50, msg: "Bon voyage!" },
        { name: "Dessa", amount: 100, msg: "Bring me back something cool~" }
      ],
      nameValue: "",
      amountValue: 0,
      msgValue: "",
      errorMsgOpacity: { opacity: 0 }
    }
  }

  calcRaised = (donationsArr) => {
    return donationsArr.reduce((sum, curr) => sum += curr.amount, 0);
  }

  checkFormSubmit = () => {

  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.amountValue) {
      this.setState({
          errorMsgOpacity: { opacity: 1 }
      });
    } else {
      const newDonation = {
        name: this.state.nameValue,
        amount: this.state.amountValue,
        msg: this.state.msgValue
      }
      const updatedDonations = this.state.donations.concat(newDonation);

      this.setState({
          donations: updatedDonations,
          nameValue: "",
          amountValue: 0,
          msgValue: "",
          errorMsgOpacity: { opacity: 0 }
      });
    }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.name === 'amountValue' ? Number(e.target.value) : e.target.value
    });
  }

  render() {
    const { donations, nameValue, amountValue, msgValue, errorMsgOpacity } = this.state;
    const raised = this.calcRaised(donations);
    const percentToTarget = (raised / this.target * 100).toFixed(2);
    return (
      <div className="App">
        <div id="grid-base">
          <TopBar />
          <RecentDonations 
            donations={donations}
          />
          <Progress 
            target={this.target} 
            raised={raised}
            percentToTarget={percentToTarget}
          />
          <DonationForm 
            handleSubmit={this.handleSubmit} 
            handleChange={this.handleChange} 
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
}


/* EXPORTS */
export default App;
