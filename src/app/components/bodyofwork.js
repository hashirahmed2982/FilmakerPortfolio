import React from 'react';
import './BodyOfWork.css';

const BodyOfWork = () => {
  const movies = [
    {
      year: '2030',
      title: 'Abyss of Deceptions',
      description: 'A gripping coastal thriller that masterfully combines the serene charm of a coastal setting with an enthralling mystery.',
      videoUrl: 'https://www.youtube.com/embed/wIAB5RE3_7I',
    },
    {
      year: '2026',
      title: 'The Midnight Enigma',
      description: 'A mind-bending psychological thriller that follows a detective on a race against time to solve a series of cryptic and interconnected mysteries.',
      videoUrl: 'https://www.youtube.com/embed/a4DtuNceXQQ',
    },
    {
      year: '2023',
      title: 'Shadows of Deceit',
      description: 'A suspenseful noir-inspired thriller where a private investigator delves into a web of conspiracy and intrigue in the dimly lit streets of a mysterious city.',
      videoUrl: 'https://www.youtube.com/embed/7mK1svAd8lI', 
    },
    
    
  ];
  const movies2 = [
    {
      year: '2030',
      title: 'Abyss of Deceptions',
      description: 'A gripping coastal thriller that masterfully combines the serene charm of a coastal setting with an enthralling mystery.',
      videoUrl: 'https://www.youtube.com/embed/bD4qi95h2eg',
    },
    {
      year: '2026',
      title: 'The Midnight Enigma',
      description: 'A mind-bending psychological thriller that follows a detective on a race against time to solve a series of cryptic and interconnected mysteries.',
      videoUrl: 'https://www.youtube.com/embed/lVXN3Cb0eyA', 
    },
    {
      year: '2023',
      title: 'Shadows of Deceit',
      description: 'A suspenseful noir-inspired thriller where a private investigator delves into a web of conspiracy and intrigue in the dimly lit streets of a mysterious city.',
      videoUrl: 'https://www.youtube.com/embed/Qexkaj0JhN4',  
    },
];


  return (
    <div className="body-of-work">
      <div className="movie-list">
      
        {movies.map((movie, index) => (
          <div className="movie" key={index}>
            <h4>{movie.year}</h4>
            <h3>{movie.title}</h3>
            <div className="image-container">
            <iframe
                src={movie.videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
      
      
      
      <div className="separator"> <div class="left-sidebar">
        <h1>Most Popular Works</h1>
      </div> </div>
      <div className="movie-list2">
      
        {movies2.map((movie, index) => (
          <div className="movie" key={index}>
            <h4>{movie.year}</h4>
            <h3>{movie.title}</h3>
            <div className="image-container">
            <iframe
                src={movie.videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p>{movie.description}</p>
          </div>
        ))}
        
      </div>
      
    </div>
  );
};

export default BodyOfWork;
