// src/Accolades.js
import React from 'react';
import './Accolades.css';

const accoladesData = [
  {
    title: 'Award of Excellence',
    description: 'Award of Excellence Special Mention: Film Feature (Aug 2017)',
  },
];

const Accolades = () => {
  return (
    <div className="accolades-section">
         <h1 className="nominations-title">Accolades</h1>
      
      <div className="accolades-list">
        {accoladesData.map((accolade, index) => (
          <div key={index} className="accolade-item">
            <div className="accolade-icon">
                <img src="/acc.png" width={"180px"}></img>
            </div>
            
            <p className="accolade-description">{accolade.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accolades;
