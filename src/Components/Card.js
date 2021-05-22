import React from 'react';
import '../SEGA.woff';
import '../MADE Coachella Bold PERSONAL USE.woff';


const Card=({Countryname,Date,NewConfirmed,NewDeaths,NewRecovered,TotalConfirmed,TotalDeaths,TotalRecovered})=>{
    return(
        <div className="bg-#919191 dib br3 pa3 ma2 grow bw2 shadow-5 card">
            {/*<img src={`https://robohash.org/${Countryname}?200x200`} alt="robotsImage"/>*/}
            <h2 className="country">{Countryname}</h2>
            <h3 className="red">NewConfirmed:{NewConfirmed}</h3>
            <h3 className="red">NewDeaths:{NewDeaths}</h3>
            <h3 className="green">NewRecovered:{NewRecovered}</h3>
            <h3 className="red">TotalConfirmed:{TotalConfirmed}</h3>
            <h3 className="red">TotalDeaths:{TotalDeaths}</h3>
            <h3 className="green">TotalRecovered:{TotalRecovered}</h3>
            <h3>Date:{Date}</h3>
            
        </div>
    );
}


export default Card;