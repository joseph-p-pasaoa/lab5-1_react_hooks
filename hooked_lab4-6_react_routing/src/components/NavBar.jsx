/*
Joseph P. Pasaoa
NavBar Component | Joseph's Random Cat-Dog Image Fetcher (Hooks Lab Revision)
*/


/* IMPORTS */
    // external
    import React from 'react';
    import { NavLink } from 'react-router-dom';

    // local
    import './NavBar.css';


/* COMPONENT */
const NavBar = () => {
  const makeRandomNum = () => {
    return Math.floor(Math.random() * 9 + 2);
  }

  return (
    <nav>
      <NavLink to="/" className="nav--link">Home + About</NavLink>
      <NavLink to="/dogs/random" className="nav--link">A Random Dog</NavLink>
      <NavLink to={() => `/dogs/random/${makeRandomNum()}`} className="nav--link">Multiple Random Dogs</NavLink>
      <NavLink to="/dogs/default" className="nav--link">A Dog by Breed</NavLink>
      <NavLink to="/cats/random" className="nav--link">A Random Cat</NavLink>
      <NavLink to={() => `/cats/random/${makeRandomNum()}`} className="nav--link">Multiple Random Cats</NavLink>
      <NavLink to="/all/random" className="nav--link">Random Dogs & Cats</NavLink>
    </nav>
  );
}


/* EXPORT */
export default NavBar;
