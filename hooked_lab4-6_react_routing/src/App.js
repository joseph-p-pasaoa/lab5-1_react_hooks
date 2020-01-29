/*
Joseph P. Pasaoa
APP MAIN Component Page | Joseph's Random Cat-Dog Image Fetcher (Hooks Lab Revision)
*/


/* IMPORTS */
    // external
    import React from 'react';
    import { Switch, Route } from 'react-router-dom';

    // local
    import './reset.css';
    import './App.css';

    import Header from './components/Header';
    import NavBar from './components/NavBar';
    import RandomDogs from './pages/RandomDogs';
    import OneRandomDog from './pages/OneRandomDog';
    import RandomDogByBreed from './pages/RandomDogByBreed';
    import RandomCats from './pages/RandomCats';
    import OneRandomCat from './pages/OneRandomCat';
    import RandomDogsAndCats from './pages/RandomDogsAndCats';
    import NotFound404 from './pages/NotFound404';


/* COMPONENT */
const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div className="stage">
        <Switch>

          {/* LANDING */}
          <Route exact path="/" render={() => {
                return (
                  <div className="intro">
                    <p>
                      Welcome to my app the Random Cat-Dog Image Fetcher!
                    </p>
                    <p>
                      Pick a section from the left and enjoy the images you'll find!
                    </p>
                  </div>
                );
          }} />

          {/* THE REST */}
          <Route path="/dogs/random/:num" component={RandomDogs} />
          <Route path="/dogs/random" component={OneRandomDog} />
          <Route path="/dogs/:breed" component={RandomDogByBreed} />
          <Route path="/cats/random/:num" component={RandomCats} />
          <Route path="/cats/random" component={OneRandomCat} />
          <Route path="/all/random" component={RandomDogsAndCats} />
          <Route render={NotFound404} />

        </Switch>
      </div>
    </div>
  );
}


/* EXPORT */
export default App;
