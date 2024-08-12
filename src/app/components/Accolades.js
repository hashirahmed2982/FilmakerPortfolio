// src/Accolades.js
import React from 'react';
import './Accolades.css';

const accoladesData = [
  {
    title: 'GOLDEN THRILLMASTER AWARD',
    description: 'Best Thriller Direction for Abyss of Deceptions (2030)',
  },
  {
    title: 'CHILLERFEST FILM FESTIVAL',
    description: 'Most Suspenseful Narrative for The Midnight Enigma (2026)',
  },
  {
    title: 'THRILLMAKERS SHOWCASE',
    description: 'Director of the Month (February 2023)',
  },
  {
    title: 'THE EDGE-OF-YOUR-SEAT AWARDS',
    description: 'Outstanding Achievement in Thriller Screenwriting for Cryptic Descent (2018)',
  },
  {
    title: 'SPINE-TINGLER CINEMA AWARDS',
    description: 'Best Thriller Ensemble Cast for Shadows of Deceit (2023)',
  },
  {
    title: 'THRILLERFEST',
    description: 'Trailblazer Award for Contributions to the Thriller Genre (2018)',
  },
  {
    title: 'MYSTERY AND SUSPENSE CINEMA',
    description: 'Most Innovative Thriller for Reflections of Fear (2013)',
  },
];

const Accolades = () => {
  return (
    <div className="accolades-section">
         <h1>ACCOLADES</h1>
      
      <div className="accolades-list">
        {accoladesData.map((accolade, index) => (
          <div key={index} className="accolade-item">
            <div className="accolade-icon">
                <img src="/ac.png"></img>
            </div>
            
            <p className="accolade-description">{accolade.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accolades;
