import { Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <Box textAlign="center" mb={5}>
      <Typography variant="h3" fontWeight={700}>
        BMI & Health Calculator
      </Typography>
      <Typography color="text.secondary" mt={1}>
        Simple, clear health insights based on standard guidelines
      </Typography>
    </Box>
  );
}
