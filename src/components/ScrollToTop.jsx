import { Fab, Zoom, Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ScrollToTop({ scrollRef }) {
  const [showScroll, setShowScroll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const el = scrollRef?.current;
    if (!el) return;

    const toggleVisibility = () => {
      setShowScroll(el.scrollTop > 300);
    };

    el.addEventListener("scroll", toggleVisibility);
    return () => el.removeEventListener("scroll", toggleVisibility);
  }, [scrollRef]);

  const scrollToTop = () => {
    scrollRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 24, md: 32 },
        right: { xs: 16, md: 32 },
        display: "flex",
        flexDirection: "column",
        gap: 2,
        zIndex: 1300,
      }}
    >
      {/* ✅ HOME BUTTON (hide only on home page) */}
      {!isHome && (
        <Zoom in={true}>
          <Fab onClick={goHome} color="secondary">
            <HomeIcon />
          </Fab>
        </Zoom>
      )}

      {/* ✅ SCROLL BUTTON */}
      <Zoom in={showScroll}>
        <Fab onClick={scrollToTop} color="primary">
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Box>
  );
}