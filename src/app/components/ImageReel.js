"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import './FilmReel.css';

gsap.registerPlugin(Observer);

const ImageGallery = () => {
  const stageRef = useRef(null);

  useEffect(() => {
    const imgs = stageRef.current.querySelectorAll('.row image');
    const tls = [];

    gsap.set('image', { attr: { preserveAspectRatio: "xMidYMid slice", width: "390", height: "300", 'clip-path': "url(#cp1)" } });
    gsap.set('.row', { y: (i) => 160 + i * 320, rotate: -15, svgOrigin: '400 400' });

    imgs.forEach((img, i) => {
      tls.push(
        gsap.timeline({ defaults: { duration: 1, ease: 'none' }, paused: true, repeat: -1 })
          .fromTo(img, { x: -400 }, { x: 1600 })
          .progress(i % 5 / 5)
      );
    });

    Observer.create({
      target: window,
      type: "wheel,touch,drag",
      onRight: prev,
      onUp: prev,
      onLeft: next,
      onDown: next
    });

    function prev() {
      tls.forEach((tl, i) => {
        gsap.to(tl, {
          progress: () => (i < 5) ? '+=0.03' : '+=0.02',
          modifiers: {
            progress: (p) => gsap.utils.wrap(0, 1, p)
          },
          ease: 'power2'
        });
      });
    }

    function next() {
      tls.forEach((tl, i) => {
        gsap.to(tl, {
          progress: () => (i < 5) ? '-=0.03' : '-=0.02',
          modifiers: {
            progress: (p) => gsap.utils.wrap(0, 1, p)
          },
          ease: 'power2'
        });
      });
    }
  }, []);

  return (
   
      <svg id="stage" ref={stageRef} viewBox="0 -106 1400 550" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg"  transform="rotate(12 )"  >
        <clipPath id="cp1">
          <rect width="390" height="200" rx="15" />
        </clipPath>
        
        <g className="r1 row" >
          <image href="https://7thsky.biz/7skynewweb/wp-content/uploads/2022/03/BZ-1900x843-1-1024x454.jpg" id='box'/>
          <image href="https://upload.wikimedia.org/wikipedia/en/3/3d/Fitoordrama.jpg" id='box'/>
          <image href="https://www.magtheweekly.com/assets/uploads/updates/2018-02-17/1819_1003809_updates.jpg" id='box'/>
          <image href="https://i.pinimg.com/originals/a1/d5/84/a1d58446de0fe50b68f437197bd802dd.jpg" id='box'/>
          <image href="https://s1.dmcdn.net/v/V25qc1ab9OOyC0UKA/x1080" id='box'/> 
        </g>
      </svg>
   
  );
};

export default ImageGallery;
