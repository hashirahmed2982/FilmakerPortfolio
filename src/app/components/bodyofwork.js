import React from 'react';
import './BodyOfWork.css';

const BodyOfWork = () => {
  const movies = [
    {
      year: '2030',
      title: 'Abyss of Deceptions',
      description: 'A gripping coastal thriller that masterfully combines the serene charm of a coastal setting with an enthralling mystery.',
      imageUrl: '/2.jpeg',
    },
    {
      year: '2026',
      title: 'The Midnight Enigma',
      description: 'A mind-bending psychological thriller that follows a detective on a race against time to solve a series of cryptic and interconnected mysteries.',
      imageUrl: '/3.jpeg',
    },
    {
      year: '2023',
      title: 'Shadows of Deceit',
      description: 'A suspenseful noir-inspired thriller where a private investigator delves into a web of conspiracy and intrigue in the dimly lit streets of a mysterious city.',
      imageUrl: '/4.jpg',
    },
    
  ];

  return (
    <div className="body-of-work">
      <h1>Most Popular Works</h1>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <div className="movie" key={index}>
            <h4>{movie.year}</h4>
            <h3>{movie.title}</h3>
            <div className="image-container">
              <img src={movie.imageUrl} alt={movie.title} />
            </div>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
      <div className="separator"></div>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <div className="movie" key={index}>
            <h4>{movie.year}</h4>
            <h3>{movie.title}</h3>
            <div className="image-container">
              <img src={movie.imageUrl} alt={movie.title} />
            </div>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyOfWork;
