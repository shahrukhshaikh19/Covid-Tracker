import React,{useEffect,useState} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import '../App.css';
import Navbar from './Navbar';
import {Route, Redirect, Switch} from 'react-router-dom';
import StateWise from './StateWise';

function FetchCovidData() {
  
  //const[CovidCountries,setCovidCountries] = useState([]);
  const[CovidCountries,setCovidCountries] = useState([]);
  const[Searchfield ,setSearchfield ] = useState('');

  useEffect(()=>{
   // getCovidData();
    newdata();
  }, []);

  const OnSearchChange=(event)=>{
    setSearchfield(event.target.value);
  }

  //todays API
  const newdata=async ()=>{
    let conctrydata =await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort');
    let actualcountrydata =await conctrydata.json();
    console.log(actualcountrydata); 
    setCovidCountries(actualcountrydata);
  }
 
  /*const getCovidData=()=>{
    console.log("component did mount has runned");
    
    fetch('https://api.covid19api.com/summary')
    .then((apidata)=>{
      return apidata.json();
    })
    .then((coviddata)=>{
      console.log(coviddata.Countries[76]);
      setCovidCountries(coviddata.Countries);
    })
  }*/

    console.log("render has runned"); //render 2 bar run hoga because humne DidMound() me state update ki hai
   
    {/*const filteredcountries = CovidCountries.filter((Country)=>{
      return Country.Country.toLowerCase().includes(Searchfield.toLowerCase());
    }
  )*/}
    const filteredcountries = CovidCountries.filter((Country)=>{
      return Country.country.toLowerCase().includes(Searchfield.toLowerCase());
    }
    )


    return (
      <div className="tc">
    
        <SearchBox SearchItem={OnSearchChange} />
        {/*<SearchBox SearchItem={this.OnSearchChange} />*/}
       {/* <CardList CovidCountries={filteredcountries}/> */}
        <CardList CovidCountries={filteredcountries}/>
        
    </div>
  );

}

export default FetchCovidData;
