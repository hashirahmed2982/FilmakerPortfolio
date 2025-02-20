"use client";
import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Styled components for better styling and layout control
const CarouselContainer = styled.div`
  margin: 3rem 0;
  padding: 0 1rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #333;
    font-weight: bold;
  }

  .slick-dots {
    bottom: -30px;
  }

  .slick-prev, .slick-next {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    color: white;
    padding: 10px;
    z-index: 100;
  }

  .slick-prev {
    left: -40px;
  }

  .slick-next {
    right: -40px;
  }
`;

const VideoItem = styled.div`
  position: relative;
  padding: 1rem; /* Added padding for spacing between items */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  height: 250px; /* Reduced height */
  width: 90%; /* Reduced width */
  margin: 0 auto; /* Centering items horizontally */
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  .video-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    background-color: #000;

    video {
      width: 100%;
      height: auto;
      border-radius: 10px;
      object-fit: cover;
    }

    .play-button {
      position: absolute;
      font-size: 3rem;
      color: white;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      padding: 1rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
    }
  }
`;

const VideoCarousel = ({ title, videos }) => {
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);

  const handlePlayClick = (index) => {
    setPlayingVideoIndex(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // This will add some space between the items
    nextArrow: <div className="slick-next">▶️</div>,
    prevArrow: <div className="slick-prev">◁</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <h2>{title}</h2>
      <Slider {...settings}>
        {videos.map((video, index) => (
          <VideoItem key={index}>
            <div className="video-wrapper">
              {playingVideoIndex === index ? (
                <video src={video.src} controls autoPlay poster={video.poster}></video>
              ) : (
                <>
                  <img src={video.poster} alt="poster" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                  <div className="play-button" onClick={() => handlePlayClick(index)}>
                    <span role="img" aria-label="play">▶️</span>
                  </div>
                </>
              )}
            </div>
          </VideoItem>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default VideoCarousel;
