import { Fab, Zoom, Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <Zoom in={visible}>
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 24, md: 32 },
          right: { xs: 16, md: 32 },
          display: "flex",
          flexDirection: "column",
          gap: 2,
          zIndex: 1300
        }}
      >
        {/* HOME BUTTON */}
        <Fab
          onClick={goHome}
          color="secondary"
          size="medium"
        >
          <HomeIcon />
        </Fab>

        {/* SCROLL TO TOP BUTTON */}
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="medium"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
}
