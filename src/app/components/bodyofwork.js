import React from 'react';
import './BodyOfWork.css';

const BodyOfWork = () => {
  const movies = [
    {
      year: '2023',
      title: 'Sukoon',
      description: 'A romantic drama exploring the themes of love, sacrifice, and fate. With strong emotions and intense relationships, the drama highlights the impact of choices on destiny',
      videoUrl: 'https://www.youtube.com/embed/YjR_Sfnsxq4',
    },
    {
      year: '2022',
      title: 'Tere Bin',
      description: 'A passionate love story between two individuals from different worlds, filled with intense emotions and misunderstandings',
      videoUrl: 'https://www.youtube.com/embed/wIAB5RE3_7I',
    },
    {
      year: '2021',
      title: 'Fitoor',
      description: 'A tale of love, obesession, and betrayal, where past relationships impact the present.',
      videoUrl: 'https://www.youtube.com/embed/a4DtuNceXQQ', 
    },
    
    
  ];
  const movies2 = [
    {
      year: '2020',
      title: 'Raaz E Ulfat',
      description: 'A story about a young woman torn between love and family expectations, facing the consequences of her choices.',
      videoUrl: 'https://www.youtube.com/embed/bD4qi95h2eg',
    },
    {
      year: '2018',
      title: 'Koi Chand Rakh',
      description: 'A heart wrenching love triangle involving unrequited love, betrayal, and destiny.',
      videoUrl: 'https://www.youtube.com/embed/bTfiCRPxVlI', 
    },
    {
      year: '2014',
      title: 'Bunty I Love You',
      description: 'A unique story of a young widow seeking love and independence in a judgemental society.',
      videoUrl: 'https://www.youtube.com/embed/LritlBiLSpo',  
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
      
      
      
      <div className="separator"> <div className="left-sidebar">
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
