import React from 'react';
import './DetailedCard.css';

export default function DetailedCard({city}) {

  if(city){
  return (

  <div className='card text-center'> 
    {/*  <div id="closeIcon" className="row">
            <button className="btn btn-sm btn-danger">X</button>
        </div>
     */}    
     <div className='card-body'>
    <div className='card-title'><h4>{city.name}</h4></div>
    <div><img className="iconoClima" src={"http://openweathermap.org/img/wn/"+city.img+"@2x.png"} width="80" height="80" alt="" /></div>
    </div>
    
    <div className='temps'>
    <div><h5>Temp</h5>{city.min}</div>
    <div><h5>Min</h5>{city.min}</div>
    <div><h5>Max</h5>{city.max}</div>
    <div><h5>Wind Speed</h5>{city.wind}</div>
    <div><h5>Clouds</h5>{city.clouds}</div>
    </div>  

    </div>)
  }
  else {
    return(
      <div>Select a City for further details</div>
    )
  }
};