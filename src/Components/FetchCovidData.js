import React,{useEffect,useState} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import '../App.css';
import Navbar from './Navbar';
import {Route, Redirect, Switch} from 'react-router-dom';
import StateWise from './StateWise';

function FetchCovidData() {
  
  const[CovidCountries,setCovidCountries] = useState([]);
  const[Searchfield ,setSearchfield ] = useState('');

  useEffect(()=>{
    getCovidData();
    getIndiaCovidData();
  }, []);

  const OnSearchChange=(event)=>{
    setSearchfield(event.target.value);
  }

  const getCovidData=()=>{
    console.log("component did mount has runned");
    
    fetch('https://api.covid19api.com/summary')
    .then((apidata)=>{
      return apidata.json();
    })
    .then((coviddata)=>{
      //console.log(coviddata.Countries[76]);
      setCovidCountries(coviddata.Countries);
    })
  }


  const getIndiaCovidData=()=>{
    console.log("component did mount has runned");
    
    fetch('https://api.covid19india.org/data.json')
    .then((apidata)=>{
      return apidata.json();
    })
    .then((coviddata)=>{
      console.log(coviddata.statewise);
      //setCovidCountries(coviddata.Countries);
    })
  }
  
    console.log("render has runned"); //render 2 bar run hoga because humne DidMound() me state update ki hai
   
    const filteredcountries = CovidCountries.filter((Country)=>{
      return Country.Country.toLowerCase().includes(Searchfield.toLowerCase());
    }
    )


    return (
      <div className="tc">
    
        <SearchBox SearchItem={OnSearchChange} />
        {/*<SearchBox SearchItem={this.OnSearchChange} />*/}
        <CardList CovidCountries={filteredcountries}/>
        
    </div>
  );

}

export default FetchCovidData;
