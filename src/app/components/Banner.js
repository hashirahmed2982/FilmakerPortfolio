"use client";
// components/Banner.js
// components/Banner.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Banner.module.css';
import TopNavBar from './nav';
import Link from 'next/link';

const Banner = () => {
    const videos = [
        "/Untitled video - Made with Clipchamp.mp4",
        "/video2.mp4",
        "/video3.mp4",
        "/video4.mp4",
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 5000); // Change video every 5 seconds

        return () => clearInterval(interval);
    }, []);




    const [showSections, setShowSections] = useState(false);
    const images = [
        "/momal3.webp",
        "/imag1.jpeg",
        "/3.jpeg",
        "/4.jpg",
         // Add more image sources as needed
    ];
    const images2 = [
        "/5.jpg",
        "/6.jpeg",
        "/7.jpg",
        "/8.jpeg", // Add more image sources as needed
    ];
    const images3 = [
        "/9.jpeg",
        "/4.jpg",
        "/5.jpg",
        "/momal3.webp", // Add more image sources as needed
    ];
    const images4 = [
        "/9.jpeg",
        "/4.jpg",
        "/5.jpg",
        "/momal3.webp", // Add more image sources as needed
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [resetAnimation, setResetAnimation] = useState(false);
    const [resetAnimation1, setResetAnimation1] = useState(false);

    const toggleSections = () => {
        setShowSections(!showSections);
    };
    // Function to handle changing the image index
    const changeImage = () => {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
    };
    const handleAnimationComplete = () => {
        setResetAnimation(true)
        console.log("Animation completed");
    };
    const handleAnimationComplete1 = () => {
        setResetAnimation1(true)
        console.log("Animation completed1");
    };


    // Use useEffect to change images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            changeImage();
        }, 1000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
        <><TopNavBar></TopNavBar>
        <div className={styles.banner}>
        <div className={styles.videoContainer}>
                {videos.map((video, index) => (
                    <video
                        key={index}
                        className={index === currentVideoIndex ? styles.active : ""}
                        autoPlay
                        muted
                        loop
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ))}
            </div>
        
            
            <div className={styles.text}>
                <h1>SIRAJ UL HAQUE</h1>
                <p>DIRECTOR - PRODUCER - AUTHOR</p>
                <div className={styles.socialLinks}>
                    <a href="tel:+923432985465" className={styles.socialLink} style={{ color: '#25D366' }} title="Phone">📞</a>
                    <a href="mailto:seerajfilms@gmail.com" className={styles.socialLink} style={{ color: '#D44638' }} title="Email">✉️</a>
                    <a href="https://instagram.com/serajulhaqofficial" className={styles.socialLink} style={{ color: '#E1306C' }} title="Instagram">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" className={styles.logoImage} />
                        </a>
                    <a href="https://pk.linkedin.com/in/siraj-siraj-ul-haque-04a492b" className={styles.socialLink} style={{ color: '#0077B5' }} title="LinkedIn">🔗</a>
                    <a href="https://www.facebook.com/siraj.u.haque.9" className={styles.socialLink} style={{ color: '#1877F2' }} title="Facebook">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png" alt="Facebook" className={styles.logoImage} />
                        </a>
                    <a href="https://en.wikipedia.org/wiki/Siraj-ul-Haque" className={styles.socialLink} style={{ color: '#000000' }} title="Wikipedia">🌐</a>
                </div>
            </div>
            
            
           
        </div></>
    );
};

export default Banner;
