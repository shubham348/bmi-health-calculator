import { Typography, Box } from "@mui/material";
import { doodleCard } from "../utils/style";
export default function Header() {
  return (
    <Box textAlign="center" sx={{
      ...doodleCard, width: {
        xs: "90%",  // mobile
        sm: "80%",   // tablet
        md: "50%"    // desktop
      }, padding: 2
    }}>
      <Typography variant="h3" fontWeight={700} color={"primary"}>
        Health Metrics Hub
      </Typography>
      <Typography mt={1} color="#1e2022">
        Smart calculators, nutrition tools & fitness insights in one place.
      </Typography>
    </Box>
  );
}
