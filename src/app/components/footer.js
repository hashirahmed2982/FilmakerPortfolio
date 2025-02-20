"use client";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { Instagram, Facebook, YouTube } from "@mui/icons-material";
import BrushIcon from "@mui/icons-material/Brush"; // Placeholder for Behance
import PlayCircleIcon from "@mui/icons-material/PlayCircle"; // Placeholder for Vimeo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { faVimeo } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "gray",
        py: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Social Icons and Email in a Single Row */}
      <Stack direction="row" spacing={2} alignItems="center">
        <IconButton sx={{ color: "gray" }} href="https://instagram.com/serajulhaqofficial">
          <Instagram />
        </IconButton>
        <IconButton sx={{ color: "gray" }} href="http://www.facebook.com/siraj.u.haque.9">
          <Facebook />
        </IconButton>
        <IconButton sx={{ color: "gray" }} href="https://www.imdb.com/name/nm3391649/?ref_=nv_sr_srsg_0_tt_0_nm_8_in_0_q_siraj%2520ul">
        <FontAwesomeIcon icon={faImdb} />
        </IconButton>
        <IconButton sx={{ color: "gray" }} href="https://vimeo.com/user2436829">
        <FontAwesomeIcon icon={faVimeo} />
        </IconButton>
        

        {/* Email */}
        <Typography variant="body2" sx={{ color: "gray", ml: 2 }}>
        seerajfilms@gmail.com
        </Typography>
      </Stack>
    </Box>
  );
}
