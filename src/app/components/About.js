"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css'; // Import the CSS file



import ImageGallery from './ImageReel';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    const images = [
        "/momal3.webp",
        "/imag1.jpeg",
        "/3.jpeg",
        "/4.jpg",
        "/momal3.webp",
        "/imag1.jpeg",
        "/3.jpeg",
        "/4.jpg",
        "/momal3.webp",
        "/imag1.jpeg",
        "/3.jpeg",
        "/4.jpg",
        "/momal3.webp",
        "/imag1.jpeg",
        "/3.jpeg",
        "/4.jpg",
        // Add more image sources as needed
    ];

    return (
        <><div className="suspenseful-world1">
            <div className="text-content1" data-aos="zoom-in" data-aos-duration="90000" data-aos-easing="ease-in-out-cubic">
                <h1>Explore the Visionary Filmmaking of Siraj ul Haque</h1>
                <p>
                    Siraj ul Haque, a luminary in cinema, is celebrated for his visionary storytelling and unparalleled directorial prowess. His films, such as "Moomal Rano" and "Silent Water," blend artistry and emotion, capturing the essence of human experiences and societal intricacies. Through meticulous attention to detail and authentic narratives, Siraj's work resonates deeply, leaving an indelible mark on contemporary cinema.
                </p>
            </div>
        </div>
            <ImageGallery></ImageGallery>
            <div className="suspenseful-world">
                
                <div className="video-content" data-aos="fade-left">
                    <div className="video-container">
                        <h1 className="caption">Journey of Siraj ul Haque</h1>
                        <img src="/bio.jpg" alt="The Midnight Enigma" className="video-image" />

                    </div>
                </div>
                <div className="text-content" data-aos="fade-right">
                    <p>
                    Raised amidst the unique culture and impressive, almost imposing, mountains of Pakistan, Siraj ul Haque's creative upbringing was nurtured by the vibrant surroundings. This environment allowed his visual sensations to blossom, giving free rein to his artistic inclinations. Drawn to artistic mediums that evoke deep feelings, Siraj found his true calling when he first picked up a camera.
                    </p>
                    <p>
                    With a career spanning over two decades, Siraj ul Haque has become a luminary in the world of cinema. His directorial journey began in 1999, and since then, he has crafted compelling narratives that resonate with audiences on a profound level. From his early short film "Chandani," screened at the 3rd Eye Film Festival in San Francisco, to his acclaimed feature film "Moomal Rano," which earned accolades at international film festivals, Siraj's work captures the essence of human experiences and societal intricacies.
                    </p>
                    <p>
                    Siraj's dedication to authenticity and meticulous attention to detail have earned him critical acclaim and numerous awards, including the Accolade Global Film Festival and the Sindh Film Festival. His films, such as "Silent Water" and "Trouble in Paradise," blend artistry and emotion, creating immersive worlds with intricate plots and unforgettable characters.
                    </p>
                    <p>
                    Beyond filmmaking, Siraj's creative appetite extends to writing. He has published novels and short stories that reflect his rich storytelling abilities. His novel "An Unconventional Visit" and short stories like "Where Are You" and "Promise Me" have been featured in publications in Pakistan and India.
                    </p>
                </div>
            </div></>
    );
};

export default About;
