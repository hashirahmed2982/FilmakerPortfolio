"use client";
import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Image from 'next/image'; // If using Next.js
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


const TopNavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        { text: "HOME", link: "/" },
        { text: "MY WORKS", link: "/filmography" },
        { text: "BOOKS", link: "/books" }
    ];

    return (
        <AppBar position="fixed" sx={{ bgcolor: "#120e0f85", backdropFilter: "blur(10px)" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 4 }}>

                {/* Logo and Title */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Image src={'/logo.jpg'} alt="Logo" width={30} height={30} />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        SIRAJ UL HAQUE
                    </Typography>
                </Box>
                {/* Mobile Menu Button */}
                <IconButton
                    sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }}
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon />
                </IconButton>
                {/* Desktop Navigation (Hidden on Mobile) */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                    {menuItems.map((item) => (
                        <Typography key={item.text} component="a" href={item.link} sx={{ textDecoration: "none", color: "white", fontSize: 18, '&:hover': { color: "red" } }}>
                            {item.text}
                        </Typography>
                    ))}
                </Box>


            </Toolbar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ '& .MuiDrawer-paper': { width: 250, bgcolor: "#120e0f" } }}
            >
                <List>
                    {menuItems.map((item) => (
                        <ListItem button key={item.text} component="a" href={item.link} onClick={handleDrawerToggle}>
                            <ListItemText primary={item.text} sx={{ color: "white", textAlign: "center" }} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
};

export default TopNavBar;