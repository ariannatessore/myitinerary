import React from 'react';
import '../styles/app.css';
import{Link} from 'react-router-dom';
import Wave from 'react-wavify';
import{Cities} from './Cities.js'



export default function Search() {
  return (
    <div id="search-container">
    
        <img id="search-logo" src={require('../imagenes/logo.png')} alt="Logo Img " />
       
       
        <Link to="/">
        <img id="search-home-img" src={require('../imagenes/home.png')} alt="Home browsing " />
        </Link>
        <Cities/>
        <div id= "home-wave">
        <Wave
        fill='#7ff8ff	'
        paused={false}
        options={{
        height:40,
        amplitude:40,
        speed: 0.25,
        points:8,
         }}
        />
        
        </div>
    </div>
  )

        }