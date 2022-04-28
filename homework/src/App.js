import React, { useState } from 'react'; //Se agregó el { useState }
import './App.css';
import DetailedCard from './components/DetailedCard.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import SearchBar from './components/Nav.jsx';
import data from './data.js';
import {Route, Link} from 'react-router-dom'

function App () {

  const [cities, setCities] = useState([]);    
  const [detailedCity, setdetailedCity]= useState();


    function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
    }

    function onSearch(ciudad) {
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=606a46f50a821889afa95e356e9eb142
&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          if(!cities.filter(c=>c.name===ciudad.name)[0]) setCities(oldCities => [...oldCities, ciudad]);   
          //console.log('city is being displayed already') 
          else   alert('The city is being displayed already')
        } 
        
        else {
          alert("The city you typed in was not found");
        }
      });
    }

    function onDisplay(ciudad) {
      console.log(ciudad)
      const city = {
        min: Math.round(ciudad.min),
        max: Math.round(ciudad.max),
        img: ciudad.img,
        id: ciudad.id,
        wind: ciudad.wind,
        temp: ciudad.temp,
        name: ciudad.name,
        weather: ciudad.weather,
        clouds: ciudad.clouds,
        latitud: ciudad.lat,
        longitud: ciudad.lon
      };
 
               setdetailedCity(city)
          }

    return (
      <div>
        <hr></hr>
        <Route path='/' render={()=><Nav onSearch={onSearch}/>} />
        <div> 
          <hr></hr> 
           
        <Route path='/' exact render={()=> <Cards
          cities= {cities}
          onClose={onClose}
          onDisplay={onDisplay}
        />} />

        <Route path='/' exact render={()=><div className='detail'>        
        {(detailedCity) ? <div><hr></hr><DetailedCard city={detailedCity}/></div> : <p></p> }
        </div>} />

        </div>

        <hr></hr>
        <Route path='/' exact render={()=> <div> {!(cities)[0] ? '' : <p>Select city above for more details</p> } </div> 
        }/>

        <Route path='/About' exact render={()=> <About/>} />

        <Link to={`/About/`}><footer><h5> About </h5></footer> </Link>        
      </div>
    );
  }

export default App;
