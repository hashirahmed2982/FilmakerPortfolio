/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { Box, Grid, TextField, Button, Typography, IconButton, Snackbar } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import emailjs from "emailjs-com";
import MuiAlert from "@mui/material/Alert";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_s0z51zs", // Replace with EmailJS Service ID
        "template_0h0xzjq", // Replace with EmailJS Template ID
        formData,
        "1QvcBdak4_LbDZVF6" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setSnackbarMessage("Message sent successfully!");
          setIsError(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          setSnackbarMessage("Failed to send message.");
          setIsError(true);
        }
      );

    setOpenSnackbar(true);
  };

  return (
    <Box sx={{ p: 14, backgroundColor: "#f3f6fa" }}>
      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: "black" }}>
            LET'S TALK
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 3, color: "grey" }}>
            HAVE SOME BIG IDEA OR QUESTION? OR NEED HELP? THEN REACH OUT I WILL LOVE TO HEAR ABOUT YOU AND YOUR THOUGHTS!
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "black" }}>
            EMAIL
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: "grey" }}>
          seerajfilms@gmail.com
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "black" }}>
            ADDRESS
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: "grey" }}>
           Karachi , Pakistan 
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "black" }}>
            SOCIALS
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
            <IconButton sx={{ bgcolor: "black", color: "white" }} href="http://www.facebook.com/siraj.u.haque.9">
              <Facebook />
            </IconButton>
            {/* <IconButton sx={{ bgcolor: "black", color: "white" }}>
              <Twitter href=""/>
            </IconButton> */}
            <IconButton sx={{ bgcolor: "black", color: "white" }} href="https://pk.linkedin.com/in/siraj-siraj-ul-haque-04a492b"> 
              <LinkedIn />
            </IconButton>
            <IconButton sx={{ bgcolor: "black", color: "white" }} href="https://instagram.com/serajulhaqofficial">
              <Instagram />
            </IconButton>
          </Box>
        </Grid>

        {/* Right Section (Form) */}
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="NAME"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ mb: 2, bgcolor: "white" }}
              required
            />
            <TextField
              fullWidth
              label="EMAIL"
              variant="outlined"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ mb: 2, bgcolor: "white" }}
              required
            />
            <TextField
              fullWidth
              label="MESSAGE"
              variant="outlined"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              sx={{ mb: 2, bgcolor: "white" }}
              required
            />
            <Button fullWidth type="submit" variant="contained" sx={{ bgcolor: "black", color: "white", p: 1.5 }}>
              SUBMIT
            </Button>
          </form>
        </Grid>
      </Grid>

      {/* Snackbar for Success/Failure Message */}
      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)}>
        <MuiAlert onClose={() => setOpenSnackbar(false)} severity={isError ? "error" : "success"} sx={{ width: "100%" }}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
}
