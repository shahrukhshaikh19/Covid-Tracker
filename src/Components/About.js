import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {NavLink,Link} from 'react-router-dom';


const About=()=>{
    return(
        <main>
        <section id="welcome-section" class="about main-content">
          <div class="about-content">
            <h2>Hey, I'm Shahrukh</h2>
            <p>A React developer with keen interest in the field of Web development, crafting beautiful experiences for mobile and web users . Technology should improve the quality of lives of users, and that is my greatest motivation; to create products that not only gets the job done but do so with ease.</p>
          </div>
      
        </section>
      
        <section id="projects" class="main-content creations">
          <header>
            <h2 class="text-header-main-content">These are some of my creations click on it</h2>
          </header>
      
          
            
            
            <div class="creation-card">
              <div class="creation-card-text-link">
      
              </div>
              <div class="text-project-name-wrapper">
                <span class="text-project-name">
                 <a className="nav__link " href="https://shahrukhshaikh19.github.io/NewTimer/" target="_blank"><h3> Countdown Timer </h3></a>
                </span>
              </div>
            </div>
            <div class="creation-card">
              <div class="creation-card-text-link">
      
              </div>
              <div class="text-project-name-wrapper">
                <span class="text-project-name">
                <a className="nav__link " href="https://shahrukhshaikh19.github.io/Recipe_WebApp/" target="_blank"><h3> Food Recipe</h3></a>
                </span>
              </div>
            </div>
      
            <div class="creation-card">
              <div class="creation-card-text-link">
      
              </div>
              <div class="text-project-name-wrapper">
                <span class="text-project-name">
                <NavLink className="nav__link "  to="/home"> <h3>Covid-19 Tracker </h3></NavLink>
                </span>
              </div>
            </div>
            
            <div class="creation-card">
              <div class="creation-card-text-link">
      
              </div>
              <div class="text-project-name-wrapper">
                <span class="text-project-name">
                <a className="nav__link " ><h3> Robofans</h3></a>
                </span>
              </div>
            </div>
           
         
        </section>
      
        
      </main>
    )
}

export default About;