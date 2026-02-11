import { Box, Breadcrumbs, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";

export default function PageHeader({ title }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ mt: 3, mb: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {/* Dark back arrow */}
        <ArrowBackIcon
          onClick={() => navigate("/")}
          sx={{
            cursor: "pointer",
            mr: 2,
            color: "#ffffff",
            fontSize: 28,
            transition: "0.2s",
            "&:hover": { opacity: 0.7 }
          }}
        />

        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{
            "& .MuiBreadcrumbs-separator": {
              color: "#ffffffaa"
            }
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#ffffffcc",
              fontWeight: 600
            }}
          >
            Home
          </Link>

          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: 600
            }}
          >
            {title}
          </Typography>
        </Breadcrumbs>
      </Box>
    </Box>
  );
}
