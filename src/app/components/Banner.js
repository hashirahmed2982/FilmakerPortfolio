"use client";
import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import TopNavBar from "./nav";
import Image from "next/image";

const videos = [
    "/Untitled video - Made with Clipchamp.mp4",
    "/video2.mp4",
    "/video3.mp4",
    "/video4.mp4",
];

const socialLinks = [
    { href: "tel:+923432985465", color: "#25D366", icon: "📞", alt: "Phone" },
    { href: "mailto:seerajfilms@gmail.com", color: "#D44638", icon: "✉️", alt: "Email" },
    { href: "https://instagram.com/serajulhaqofficial", color: "#E1306C", icon: "/instagram.png", alt: "Instagram" },
    { href: "https://pk.linkedin.com/in/siraj-siraj-ul-haque-04a492b", color: "#0077B5", icon: "🔗", alt: "LinkedIn" },
    { href: "https://www.facebook.com/siraj.u.haque.9", color: "#1877F2", icon: "/facebook.png", alt: "Facebook" },
    { href: "https://en.wikipedia.org/wiki/Siraj-ul-Haque", color: "#000000", icon: "🌐", alt: "Wikipedia" },
];

const Banner = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
 

    

    return (
        <>
            <TopNavBar />
            <Box sx={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
                {/* Active Video */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <video
                        key={currentVideoIndex} // Force re-render when changing videos
                        autoPlay
                        muted
                        loop
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    >
                        <source src={videos[currentVideoIndex]} type="video/mp4" rel="preload"/>
                        Your browser does not support the video tag.
                    </video>
                </Box>

                {/* Overlay Content */}
                <Box
                    sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        textAlign: "center",
                        color: "white",
                        px: 2,
                        bgcolor: "rgba(0, 0, 0, 0.3)",
                    }}
                >
                    <Typography variant="h2" sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "4rem" } }}>
                        SIRAJ UL HAQUE
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 1, fontSize: { xs: "1rem", md: "1.5rem" } }}>
                        DIRECTOR - PRODUCER - WRITER
                    </Typography>

                    {/* Social Links */}
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
                        {socialLinks.map(({ href, color, icon, alt }, index) => (
                            <IconButton key={index} href={href} sx={{ color }} title={alt}>
                                {icon.startsWith("/") ? (
                                    <Image src={icon} alt={alt} width={24} height={24} rel="preload"/>
                                ) : (
                                    icon
                                )}
                            </IconButton>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Banner;
