import {
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  MenuItem,
  Typography,
  Box
} from "@mui/material";

export default function BmiForm({ onCalculate }) {
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);

    onCalculate({
      age: Number(data.get("age")),
      gender: data.get("gender"),
      height: Number(data.get("height")),
      weight: Number(data.get("weight"))
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%"
      }}
    >
      <Card
        sx={{
          width: {
            xs: "100%",   // mobile
            sm: "90%",   // tablet
            md: "80%"     // desktop and up
          },
          borderRadius: 5,
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
        }}
      >
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Typography variant="h5" fontWeight={600} mb={1}>
            Check your BMI
          </Typography>

          <Typography color="text.secondary" mb={3}>
            Enter basic details to understand your body health
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={2.5}>
              <TextField
                label="Age"
                name="age"
                type="number"
                required
                fullWidth
              />

              <TextField
                select
                label="Gender"
                name="gender"
                required
                fullWidth
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </TextField>

              <TextField
                label="Height (cm)"
                name="height"
                type="number"
                required
                fullWidth
              />

              <TextField
                label="Weight (kg)"
                name="weight"
                type="number"
                required
                fullWidth
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  mt: 1,
                  py: 1.4,
                  borderRadius: 3,
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: 16
                }}
              >
                Calculate BMI
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
