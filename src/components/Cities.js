
import React from 'react';
import '../styles/app.css';
import {useEffect,useState} from 'react';
import axios from 'axios';



export function Cities() {
    const [cities,setCities] = useState([]);
    const [search, setSearch] = useState('');

  
  const peticionGet=async()=>{
    await axios.get("http://localhost:4000/all")
    .then(response=>{
      setCities(response.data);
    
    }).catch(error=>{
      console.log(error);
    })
  }



useEffect(()=>{
  peticionGet();
  },[])


  const handleChange=e=>{
    setSearch(e.target.value);
   console.log(e.target.value);
  }
  
    return (



        
        
        <div className="containerInput">
             <div className="row height d-flex justify-content-center align-items-center">
             <div class="col-md-6">

<div className="form">

          <input
           class="form-control form-input"
            value={search}
            placeholder="Search por Country"
            onChange={handleChange}
          />
         </div>
       </div></div>
  
       <div className="list-cities">
  
           <div>
           {cities
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search);
              })
              .map((item, index) => (
              <ul key={item.name}>
                 <li><div className='city-name'><h1>{item.name}</h1></div></li>
                 <div className='city-name'><h2>{item.country}</h2></div>
                 <img id="img-city" src={require('../imagenes/berlin.png')} alt="Home browsing " />

               </ul>
             ))}
           </div>
  
       
  
       </div>
      </div>
    );
  }
  































