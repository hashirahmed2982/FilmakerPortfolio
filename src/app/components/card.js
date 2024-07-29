// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ title, description, moreLink, imageUrl }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <hr />
      <p>
        {description}
        <a href={moreLink} className="more"> More</a>
      </p>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default Card;
