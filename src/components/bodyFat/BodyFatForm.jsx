import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
  MenuItem,
  Box
} from "@mui/material";

export default function BodyFatForm() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          width: "100%",
          maxWidth: 520,
          borderRadius: 5,
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
        }}
      >
        <CardContent sx={{ p: { xs: 4, md: 5 } }}>
          <Typography variant="h5" fontWeight={600} mb={1}>
            Body Fat Calculator
          </Typography>

          <Typography color="text.secondary" mb={3}>
            Estimate your body fat percentage using standard measurements.
          </Typography>

          <Stack spacing={2.5}>
            <TextField
              select
              label="Gender"
              fullWidth
              defaultValue=""
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </TextField>

            <TextField
              label="Age"
              type="number"
              fullWidth
            />

            <TextField
              label="Height (cm)"
              type="number"
              fullWidth
            />

            <TextField
              label="Weight (kg)"
              type="number"
              fullWidth
            />

            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{
                mt: 1,
                py: 1.4,
                borderRadius: 3,
                fontWeight: 600,
                textTransform: "none"
              }}
            >
              Calculate Body Fat
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
