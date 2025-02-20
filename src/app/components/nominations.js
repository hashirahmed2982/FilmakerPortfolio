// src/Nominations.js
import React from 'react';
import './Nominations.css';
import Image from 'next/image';
import { Box } from '@mui/material';

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
    year: 2021,
    event: "LUX AWARDS",
    category: 'BEST TV DIRECTOR',
    show: 'RAAZ E ULFAT',
    status: 'NOMINATED'
  },{
    year: 2018,
    event: "6th HUM AWARDS",
    category: 'BEST DRAMA SERIAL',
    show: 'DALDAL',
    status: 'NOMINATED'
  },{
    year: 2016,
    event: "IPPA",
    category: 'BEST DIRECTOR TV SERIAL',
    show: '-',
    status: 'NOMINATED'
  },{
    year: 2016,
    event: "IPPA",
    category: 'BEST TV SERIAL',
    show: 'NOOR E ZINDAGI',
    status: 'NOMINATED'
  },
  {
    year: 2014,
    event: "HUM AWARDS",
    category: 'BEST DIRECTOR DRAMA SERIAL',
    show: 'BUNTY I LOVE YOU',
    status: 'NOMINATED'
  },
  {
    year: 2013,
    event: "HUM AWARDS",
    category: 'BEST DIRECTOR DRAMA SERIAL',
    show: 'HUMNASHEEN',
    status: 'NOMINATED'
  },{
    year: 2012,
    event: "HUM AWARDS",
    category: 'BEST DIRECTOR DRAMA SERIAL',
    show: 'ROSHAN SITARA',
    status: 'NOMINATED'
  }
];
const logos = [
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpg",
  "/5.jpg",

];

const Nominations = () => {
  return (
      <><div className="nominations-section">
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
              <td>{award.event}</td>
              <td>{award.year}</td>
              <td>{award.category}</td>
              <td>{award.show}</td>
              <td>{award.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div><div className="slider">
	<div className="slide-track">
		<div className="slide">
			<img src="/ary.png" height="100" width="100" alt="" />
		</div>
		<div className="slide">
			<img src="/geo.png" height="100" width="100" alt="" />
		</div>
		<div className="slide">
			<img src="/sky.png" height="100" width="200" alt="" />
		</div>
		<div className="slide">
			<img src="/md.png" height="100" width="150" alt="" />
		</div>
    <div className="slide">
			<img src="/mm.png" height="100" width="100" alt="" />
		</div>
    <div className="slide">
			<img src="/zee5.png" height="100" width="100" alt="" />
		</div>
    <div className="slide">
			<img src="/zzindagi.png" height="80" width="150" alt="" />
		</div>
    <div className="slide">
			<img src="/hum.png" height="100" width="100" alt="" />
		</div>
    <div className="slide">
			<img src="/idream.png" height="100" width="150" alt="" />
		</div>
		<div className="slide">
			<img src="/ary.png" height="100" width="100" alt="" />
		</div>
		<div className="slide">
			<img src="/geo.png" height="100" width="100" alt="" />
		</div>
		<div className="slide">
			<img src="/sky.png" height="100" width="200" alt="" />
		</div>
		<div className="slide">
			<img src="/md.png" height="100" width="150" alt="" />
		</div>
    <div className="slide">
			<img src="/mm.png" height="100" width="100" alt="" />
		</div>
    <div className="slide">
			<img src="/zee5.png" height="100" width="100" alt="" />
		</div>
    <div className="slide">
			<img src="/zzindagi.png" height="80" width="150" alt="" />
		</div>
    <div className="slide">
			<img src="/hum.png" height="100" width="100" alt="" />
		</div>
    
    
		
		
	</div>
</div></>
  );
};

export default Nominations;
