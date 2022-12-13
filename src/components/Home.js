import React from 'react';
import Wave from 'react-wavify';
import {Link} from 'react-router-dom'







export const Home = () =>{
  return (
    <div className="home-container">
   <img id="home-logo" src={require('../imagenes/logo.png')} alt="Logo Img " />
    <div className="home-description">
         <h2>Find your perfect trip,designed by insiders who know and love their cities. </h2>
     </div>

     <div className="home-start-browsing">
       <h1> Start browsing!</h1>
       <Link to="/search">
       <img id="home-flecha-img" src={require('../imagenes/flecha.png')} alt="Arrow browsing " />
       </Link>
       <img id="home-home-img" src={require('../imagenes/home.png')} alt="Home browsing " />
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
    </div>
  )
}




