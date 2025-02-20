"use client";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import TopNavBar from "../components/nav";
import Footer from "../components/footer";

export default function BooksPage() {
    return (
        <><TopNavBar></TopNavBar><Box
            sx={{
                mt: 5,
                bgcolor: "#0A0A0A",
                color: "#fff",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "40px",
            }}
        >
            {/* Title
    <Typography
      variant="h3"
      component={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{ mb: 3, fontWeight: "bold", textTransform: "uppercase" }}
    >
      My Books
    </Typography> */}

            {/* Book Showcase */}
            <Box
                component={motion.div}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                sx={{
                    position: "relative",
                    width: "300px",
                    height: "450px",
                    perspective: "1000px",
                    mb: 3,
                }}
            >
                {/* 3D Book */}
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: "url('/book.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "10px",
                        boxShadow: "10px 20px 40px rgba(255,255,255,0.2)",
                        transition: "transform 0.5s",
                    }} />
            </Box>

            {/* Book Details */}
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                An Unconventional Visit
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: "600px", mb: 4, color: 'grey' }}>
                A thrilling journey of love, honor, and political intrigue set in the
                backdrop of Pakistan.
            </Typography>

            {/* Call to Action */}
            <Button
                variant="contained"
                sx={{
                    bgcolor: "#f5f5f5", // Light gray/white button
                    color: "#000", // Black text
                    fontWeight: "bold",
                    padding: "10px 20px",
                    "&:hover": {
                        bgcolor: "#e0e0e0", // Slightly darker on hover
                    },
                }}
                component={motion.a}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://a.co/d/ayGW3dF"
            >
                Buy Now
            </Button>
        </Box>
            <Footer></Footer></>
    );
}
