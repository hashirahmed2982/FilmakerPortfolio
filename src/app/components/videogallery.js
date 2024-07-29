// src/components/VideoSlider.js
"use client";
import React, { useState } from 'react';
import './VideoSlider.css';

const VideoSlider = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="video-slider-container">
      <div className="main-video">
        <iframe
          width="560"
          height="315"
          src={currentVideo.url}
          title={currentVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="thumbnail-container">
        {videos.map((video, index) => {
          const videoId = video.id;
          return (
            <div
              key={index}
              className={`thumbnail ${video.url === currentVideo.url ? 'active' : ''}`}
              onClick={() => setCurrentVideo(video)}
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={video.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoSlider;
