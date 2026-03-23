import { Typography, Box } from "@mui/material";
import { doodleCard } from "../utils/style";

export default function Header() {
  return (
    <Box
      textAlign="center"
      sx={{
        ...doodleCard,

        width: {
          xs: "92%",
          sm: "80%",
          md: "50%",
        },

        px: { xs: 2, md: 3 },
        py: { xs: 1.5, md: 2.5 }, // ✅ smaller on mobile
        mt: { xs: 1.5, md: 2 },
      }}
    >
      {/* TITLE */}
      <Typography
        fontWeight={700}
        color="primary"
        sx={{
          fontSize: {
            xs: "1.6rem",   // ✅ mobile
            sm: "2rem",
            md: "2.5rem",
          },
          lineHeight: 1.2,
        }}
      >
        Health Metrics Hub
      </Typography>

      {/* DESCRIPTION (hidden on mobile) */}
      <Typography
        mt={1}
        color="#1e2022"
        sx={{
          display: { xs: "none", sm: "block" }, // ✅ hide on mobile
          fontSize: { sm: "0.9rem", md: "1rem" },
        }}
      >
        Smart calculators, nutrition tools & fitness insights in one place.
      </Typography>
    </Box>
  );
}