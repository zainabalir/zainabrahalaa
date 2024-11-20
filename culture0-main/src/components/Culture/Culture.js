import React from 'react';
import './culture.css';

const Culture = () => {
  return (
    <div className='cardcontainer'>
      <div className='text-container'>
        <h2 className='Ano'>Attraction</h2>
        <p className='Hereare'>
          Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.
        </p>
      </div>
      <div className='card-wrapper'>
        <div className="card">Religilous Landmarks</div>
        <div className="card">
          <a className="cardslider" href='/Slider'>historical Sites</a>
          </div> 
        <div className="card" >Touristic Location  </div> 
        <div className="card">Adventure Spot </div>
      </div>
    </div>
  );
}

export default Culture;
