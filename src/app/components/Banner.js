"use client";
// components/Banner.js
// components/Banner.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Banner.module.css';
import TopNavBar from './nav';
import Link from 'next/link';

const Banner = () => {
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

        
            <motion.div
                className={styles.imagesContainer}
                initial={{ rotate: -20, x: '100%', y: '-100%' }}
                animate={{ x: resetAnimation ? ['100%', '-40%'] : ['100%', '-40%'], y: resetAnimation ? ['-85%', '-20%'] : ['-85%', '-20%'] }}
                transition={{ duration: resetAnimation ? 50 : 50, ease: 'linear', repeat: resetAnimation ? Infinity : 0 }}
                onAnimationComplete={handleAnimationComplete}
            >
                <img
                    src={images[currentImageIndex]}
                    alt="Image 1"
                    className={styles.image1} />
            </motion.div>
            <motion.div
                className={styles.imagesContainer}
                initial={{ rotate: -20, x: '50%', y: '-50%' }}
                animate={{ x: resetAnimation1 ? ['50%', '-100%'] : ['60%', '-400%'], y: resetAnimation1 ? ['-100%', '100%'] : ['-30%', '215%'] }}
                transition={{ duration: resetAnimation1 ? 50 : 165, ease: 'linear', repeat: resetAnimation1 ? Infinity : 0 }}
                onAnimationComplete={handleAnimationComplete1}
            >
                <img
                    src={images2[currentImageIndex]}
                    alt="Image 1"
                    className={styles.image1} />
            </motion.div>
            <motion.div
                className={styles.imagesContainer}
                initial={{ rotate: -20, x: '100%', y: '-100%' }}
                animate={{ x: resetAnimation1 ? ['100%', '-40%'] : ['5%', '-40%'], y: resetAnimation1 ? ['-85%', '-20%'] : ['-40%', '-20%'] }}
                transition={{ duration: resetAnimation1 ? 50 : 17, ease: 'linear', repeat: resetAnimation1 ? Infinity : 0 }}
                onAnimationComplete={handleAnimationComplete1}
            >
                <img
                    src={images3[currentImageIndex]}
                    alt="Image 1"
                    className={styles.image1} />
            </motion.div>
            <div className={styles.text}>
                <h1>SIRAJ UL HAQUE</h1>
                <p>SINCE - Y:2010</p>
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
            <div className={styles.scrollDown} onClick={toggleSections}>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.646 6.646a.5.5 0 0 1 .708 0L8 9.293l2.646-2.647a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z" />
                        <path fillRule="evenodd" d="M8 4.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5z" />
                    </svg>
                </motion.div>
            </div>
            
           
        </div></>
    );
};

export default Banner;
