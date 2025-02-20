"use client";

import { useRef, useState } from "react";
import { Container, Typography, Box, Grid, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TopNavBar from "../components/nav";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Footer from "../components/footer";

const filmographyData = [
  { title: "Tere Bin", trailer: "https://www.youtube.com/embed/wIAB5RE3_7I", thumbnail: "/tere_bin.png" },
  { title: "Badzaat", trailer: "https://www.youtube.com/embed/bzmFGL55gzA", thumbnail: "/badzaat.jpeg" },
  { title: "Moomal rano", trailer: "https://www.youtube.com/embed/lVXN3Cb0eyA", thumbnail: "/moomal_rano.jpg" },
  { title: "Fitoor", trailer: "https://www.youtube.com/embed/a4DtuNceXQQ", thumbnail: "/fitoor.jpg" },
  { title: "Sukoon", trailer: "https://www.youtube.com/embed/YjR_Sfnsxq4", thumbnail: "/Sukoon.jpg" },
  { title: "Daldal", trailer: "https://www.youtube.com/embed/breR68Z_uQo", thumbnail: "/Daldal.jpg" },
  { title: "Koi Chand Rakh", trailer: "https://www.youtube.com/embed/7mK1svAd8l", thumbnail: "/Koi_Chand_Rakh.jpg" },
  { title: "Ramz e ishk", trailer: "https://www.youtube.com/embed/TS8PmS5yqyo", thumbnail: "/ramz_e_ishk.jpg" },
  { title: "Raaz e Ulfat", trailer: "https://www.youtube.com/embed/bD4qi95h2eg", thumbnail: "/raaz_e_ulfat.jpg" },
  { title: "Yeh raha dil", trailer: "https://www.youtube.com/embed/VZdhi0L7aQ0", thumbnail: "/Yeh-Raha-Dil.webp" },
  { title: "Dil banjara", trailer: "https://www.youtube.com/embed/_Tr1kEyWXQo", thumbnail: "/dil-banjaara.webp" },
  { title: "Noor e zindagi", trailer: "https://www.youtube.com/embed/f_APbg_BLhs", thumbnail: "/noor_e_zindagi.jpg" },
  { title: "Tum mere kiya ko", trailer: "https://www.youtube.com/embed/zQUDCtXNfvQ", thumbnail: "/Tum_mere_kia_ho.jpg" },
  { title: "Sari bhool humari thi", trailer: "https://www.youtube.com/embed/Vr4l3AOLBBA", thumbnail: "/Saari_Bhool_humari_thi.jpg" },
  { title: "Aik pal", trailer: " https://www.youtube.com/embed/5-NW7svrXeQ", thumbnail: "/aik_pal.webp" },
  { title: "Bunty i love you", trailer: "https://www.youtube.com/embed/LritlBiLSpo", thumbnail: "/bunty-i-love-you.jpg" },
  { title: "Roshan sitara", trailer: " https://www.youtube.com/embed/NEb1j43hEbQ", thumbnail: "/RoshanSitara.jpg" },
];

export default function Filmography() {
  const [open, setOpen] = useState(false);
  const [selectedTrailer, setSelectedTrailer] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handleOpen = (trailer) => {
    setSelectedTrailer(trailer);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTrailer("");
  };
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <><TopNavBar></TopNavBar><Container maxWidth={false} disableGutters sx={{ pt: 8 }}>
    <Box 
          sx={{ 
            width: "100%", 
            height: "80vh", 
            overflow: "hidden", 
            position: "relative", 
            '&:hover .video-title': { opacity: 1 } 
          }}
        >
          <video ref={videoRef} autoPlay loop muted={isMuted} playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
            <source src="/sukoon1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Typography 
            className="video-title" 
            sx={{ 
              position: "absolute", 
              bottom: 20, 
              left: 20, 
              color: "white", 
              fontSize: "2rem", 
              fontWeight: "bold", 
              opacity: 0, 
              transition: "opacity 0.3s ease" 
            }}
          >
            SUKOON
          </Typography>
          <IconButton onClick={toggleMute} sx={{ position: "absolute", top: 20, right: 20, color: "white" }}>
            {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
        </Box>

    <Grid container spacing={5} justifyContent="center" sx={{ py: 5, px: 5, bgcolor: "#000" }}>
      {filmographyData.map((drama) => (
        <Grid item xs={12} sm={6} key={drama.title}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "10px",
              cursor: "pointer",
              height: "300px",
              '&:hover .overlay': { opacity: 1 },
            }}
            onClick={() => handleOpen(drama.trailer)}
          >
            <img src={drama.thumbnail} alt={drama.title} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} />
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0, 0, 0, 0.6)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold", textTransform: "uppercase" }}>
                {drama.title}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>

    <Modal open={open} onClose={handleClose} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box sx={{ position: "relative", width: "80%", maxWidth: "900px", bgcolor: "#000", borderRadius: "10px", p: 2 }}>
        <IconButton sx={{ position: "absolute", top: 10, right: 10, color: "#fff" }} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <iframe
          width="100%"
          height="500"
          src={selectedTrailer}
          title="Trailer"
          frameBorder="0"
          allowFullScreen
          style={{ borderRadius: "10px" }}
        ></iframe>
      </Box>
    </Modal>
  </Container><Footer></Footer></>
  );
}
