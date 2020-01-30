/*
JOSEPH P. PASAOA
NavBar Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
    // external
    import React, { useState, useEffect } from 'react';
    import { NavLink, Route } from 'react-router-dom';

    // local
    import './NavBar.css';

    import { getApiOneSnippet } from '../helpers/apiComm.js';

    import Logo from './Logo';


/* COMPONENT */
const NavBar = (props) => {

  // USESTATES
  const [ nowPlayingTitle, setNowPlayingTitle ] = useState("");

  // USEEFFECTS

  // async componentDidMount() {
  //   await this.getNowPlaying();
  // }

  // async componentDidUpdate(prevProps, prevState) {
  //   const prevMatch = prevProps.match;
  //   const currMatch = this.props.match;
  //   if (prevMatch !== currMatch) {
  //     await this.getNowPlaying();
  //   }
  // }

  useEffect(() => {
      const getNowPlaying = async () => {
        let title = "";
        if (props.match) {
          const videoId = props.match.params.id;
          try {
            const snippet = await getApiOneSnippet(videoId);
            title = snippet.title;
          } catch (err) {
            console.log(err);
          }
        }
        setNowPlayingTitle(title);
      }

      getNowPlaying();
  }, [props.match]);


  // RETURN
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


/* EXPORT */
export default NavBar;
