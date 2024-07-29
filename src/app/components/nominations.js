// src/Nominations.js
import React from 'react';
import './Nominations.css';

const nominationsData = [
  {
    image: '/n1.png',
    title: 'First Nomination Title',
  },
  {
    image: '/n2.png',
    title: 'Second Nomination Title',
  },
  {
    image: '/n3.png',
    title: 'First Nomination Title',
  },
  {
    image: '/n4.png',
    title: 'Second Nomination Title',
  },
  {
    image: '/n5.png',
    title: 'First Nomination Title',
  },
  
];
const awardsData = [
    {
      year: 2012,
      category: 'BEST DIRECTOR DRAMA SERIAL',
      show: 'ROSHAN SITARA',
      status: 'NOMINATED'
    },
    {
      year: 2013,
      category: 'BEST DIRECTOR DRAMA SERIAL',
      show: 'HUMNASHEEN',
      status: 'NOMINATED'
    },
    {
      year: 2014,
      category: 'BEST DIRECTOR DRAMA SERIAL',
      show: 'BUNTY I LOVE YOU',
      status: 'NOMINATED'
    }
  ];

const Nominations = () => {
    return (
      <div className="nominations-section">
        <h2 className="nominations-title">Nominations</h2>
        <table className="awards-table">
        <thead>
          <tr>
            <th>EVENT</th>
            <th>YEAR</th>
            <th>CATEGORY</th>
            <th>SHOW</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {awardsData.map((award, index) => (
            <tr key={index}>
              <td>HUM AWARDS</td>
              <td>{award.year}</td>
              <td>{award.category}</td>
              <td>{award.show}</td>
              <td>{award.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  };

export default Nominations;
