import React from 'react';
import './Cards.css';
import Card from './Card.jsx';

export default function Cards({cities, onClose, onDisplay}) {
  if(cities){
    return (
      <div>
      <div className='cards'>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            onDisplay={() => onDisplay(c)}
            id={c.id}
          /> )}
      </div>
      </div>
    );
  } else {
    return(
      <div>No cities have been added to the list{console.log('entra aca')
    }</div>
    )
  }
}
