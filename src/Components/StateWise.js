import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {NavLink,Link} from 'react-router-dom';
import './table.css';


const StateWise=()=>{

    const[CovidStates,SetCovidStates] = useState([]);
    useEffect(()=>{
        getIndiaCovidData();
    },[]);

    const getIndiaCovidData= async ()=>{
        //console.log("component did mount has runned");
        const res = await fetch('https://api.covid19india.org/data.json')
        const coviddata = await res.json();
          //console.log(coviddata.statewise);
          SetCovidStates(coviddata.statewise);
        
      }

    return(
        <div>
        <h2>StateWise</h2>
        <div className="overflow-auto">
            <table className="f6 w-100 mw8 center tbl-content" cellspacing="0">
                <thead>
                    <tr className="tbl-header">
                    <th className="fw6 bb b--black-20 tl pb3 pr3 ">State</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 ">Confirmed</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 ">recovered</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 ">deaths</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 ">active</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 ">LastUpdatedTime</th>
                    </tr>
                </thead>
                <tbody className="lh-copy">
                    {
                        CovidStates.map((CovidState,i)=>{
                            return(
                                <tr key={i} className="tr-hover">
                                <th className="fw6 bb b--black-20 tl pb3 pr3 ">{CovidState.state}</th>
                                <td className="pv3 pr3 bb b--black-20  ">{CovidState.confirmed}</td>
                                <td className="pv3 pr3 bb b--black-20  ">{CovidState.recovered}</td>
                                <td className="pv3 pr3 bb b--black-20  ">{CovidState.deaths}</td>
                                <td className="pv3 pr3 bb b--black-20 ">{CovidState.active}</td>
                                <td className="pv3 pr3 bb b--black-20 ">{CovidState.lastupdatedtime}</td>
                                </tr>
                            )
                        }
                        )
                    }
                    
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default StateWise;