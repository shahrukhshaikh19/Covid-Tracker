import React,{useEffect,useState} from 'react';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';
import './App.css';
import Navbar from './Components/Navbar';
import {Route, Redirect, Switch} from 'react-router-dom';
import FetchCovidData from './Components/FetchCovidData';
import About from './Components/About';

function App() {

    return (
      <div className="tc">
        <h1 className="text">Covid-19 Tracker</h1>{/*<img src="https://fontmeme.com/permalink/210521/4803b88a361e0dfea4ee1a304a1ee3db.png"/>*/}&nbsp;<p className="live">🔴Live</p>
        <Navbar />
       <switch>
       <Route exact path='/Covid-Tracker'  component={FetchCovidData}/>
          <Route exact path='/Covid-Tracker/About'  component={About}/>
          <Redirect exact from="/" to="/Covid-Tracker" />
       </switch>
        <div class="made-with-love">
          <span>Made with</span>
          <i>♥</i> <span>by</span>
          <h2 >Shahrukh</h2>
        </div>
    </div>
  );

}

export default App;
