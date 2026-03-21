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
            color: "#1e2022",
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
              color: "#1e2022"
            }
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#1e2022",
              fontWeight: 600
            }}
          >
            Home
          </Link>

          <Typography
            sx={{
              color: "#1e2022",
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
