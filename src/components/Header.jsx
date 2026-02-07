import { Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <Box textAlign="center" mb={5}>
      <Typography variant="h3" fontWeight={700} color="white">
        BMI & Health Calculator
      </Typography>
      <Typography  mt={1} color="white">
        Simple, clear health insights based on standard guidelines
      </Typography>
    </Box>
  );
}
