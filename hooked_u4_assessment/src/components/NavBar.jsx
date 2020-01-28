/*
JOSEPH P. PASAOA
NavBar Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
    // external
    import React, { Component } from 'react';
    import { NavLink, Route } from 'react-router-dom';

    // local
    import './NavBar.css';

    import { getApiOneSnippet } from '../helpers/apiComm.js';

    import Logo from './Logo';


/* COMPONENT & EXPORT */
export default class NavBar extends Component {
  state = {
    nowPlayingTitle: ""
  }

  async componentDidMount() {
    await this.getNowPlaying();
  }

  async componentDidUpdate(prevProps, prevState) {
    const prevMatch = prevProps.match;
    const currMatch = this.props.match;
    if (prevMatch !== currMatch) {
      await this.getNowPlaying();
    }
  }


  getNowPlaying = async () => {
    let title = "";
    if (this.props.match) {
      try {
        const videoId = this.props.match.params.id;
        const snippet = await getApiOneSnippet(videoId);
        title = snippet.title;
      } catch (err) {
        console.log(err);
      }
    }
    this.setState({ nowPlayingTitle: title });
  }


  render () {
    const { nowPlayingTitle } = this.state;


    return(
      <ul className="nav-bar">
        <Logo />
        <NavLink 
          className="nav-link" 
          exact to={{
              pathname: "/",
              state: {
                searchTxt: "",
                errorMessage: "",
                results: [],
                isBeginning: true
              }
          }} 
        >Home</NavLink>
        <NavLink className="nav-link" to={"/about"}>About</NavLink>
        <Route path={"/video/*"} render={ () => {
            return (
              <li className="now-playing">
                <div className="now-playing-label">
                  Now Playing
                </div>
                {nowPlayingTitle}
              </li>
            );
          }
        } />
      </ul>
    );
  }
}
