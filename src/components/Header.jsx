import { Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <Box textAlign="center" mb={5}>
      <Typography variant="h3" fontWeight={700} color="white">
        Health Metrics Hub
      </Typography>
      <Typography  mt={1} color="white">
        Smart calculators, nutrition tools & fitness insights in one place.
      </Typography>
    </Box>
  );
}
