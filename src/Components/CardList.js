import React from 'react';
import Card from './Card';


const CardList =({CovidCountries})=>{
    let time = new Date().toLocaleString();
    return(
        <div>

{
      CovidCountries.map(CovidCountry =>(

            <Card Countryname={CovidCountry.Country} Date={time} NewConfirmed={CovidCountry.NewConfirmed} NewDeaths={CovidCountry.NewDeaths} NewRecovered={CovidCountry.NewRecovered} TotalConfirmed={CovidCountry.TotalConfirmed} TotalDeaths={CovidCountry.TotalDeaths} TotalRecovered={CovidCountry.TotalRecovered}/>
            //<Card Flag={CovidCountry.countryInfo.flag} Countryname={CovidCountry.country}  NewConfirmed={CovidCountry.todayCases} NewDeaths={CovidCountry.todayDeaths} NewRecovered={CovidCountry.todayRecovered} TotalConfirmed={CovidCountry.cases} TotalDeaths={CovidCountry.deaths} TotalRecovered={CovidCountry.recovered}/>
         
            ))
        }
        </div>
    )
}

export default CardList;