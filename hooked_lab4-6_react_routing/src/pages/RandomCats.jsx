/*
Joseph P. Pasaoa
RandomCats Page Component | Joseph's Random Cat-Dog Image Fetcher (Hooks Lab Revision)
*/


/* IMPORTS */
    // external
    import React, { Component } from 'react';
    import axios from 'axios';

    // local
    import ImageCard from '../components/ImageCard';


/* COMPONENT & EXPORT */
export default class RandomCats extends Component {
  state = {
    urls: []
  }

  componentDidMount = async () => {
    await this.getImages();
  }


  getImages = async () => {
    const howMany = this.props.match.params.num;
    let response = null;
    try {
      response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${howMany}`);
    } catch (err) {
      throw new Error ("(RandomCats): ", err);
    }
    const newUrls = response.data.map(obj => obj.url);
    this.setState({ urls: newUrls });
  }


  render () {
    const listImageCards = this.state.urls.map(url => <ImageCard key={url} url={url} alt="a random cat" />);

    return (
      <div className="stage--grid">
        {listImageCards}
      </div>
    );
  }
}




/*
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
    const [ nameValue, setNameValue ] = useState("");
    const [ amountValue, setAmountValue ] = useState(0);
    const [ msgValue, setMsgValue ] = useState("");
    const [ errorMsgOpacity, setErrorMsgOpacity ] = useState({ opacity: 0 });


  // HANDLERS
  const handleChange = (e) => {
    switch (e.target.name) {
      case "amountValue":
        setAmountValue(Number(e.target.value));
        break;
      case "nameValue":
        setNameValue(e.target.value);
        break;
      case "msgValue":
        setMsgValue(e.target.value);
        break;
      default:
        console.log("error: switch error on handleChange");
        throw new Error("You're not supposed to be here.");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amountValue) {
      setErrorMsgOpacity({ opacity: 1 });
    } else {
      const newDonation = {
        name: nameValue,
        amount: amountValue,
        msg: msgValue
      }
      const updatedDonations = [ newDonation, ...donations ];

      setDonations(updatedDonations);
      setNameValue("");
      setAmountValue(0);
      setMsgValue("");
      setErrorMsgOpacity({ opacity: 0 });
    }
  }


  // PRE-RETURN
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
*/
