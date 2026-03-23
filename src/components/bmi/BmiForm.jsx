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
import { doodleCard } from "../../utils/style";


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
        width: "100%",
      }}
    >
      <Card
        sx={{
          width: {
            xs: "100%",
            sm: "90%",
            md: "80%"
          },
          borderRadius: 5,
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          ...doodleCard
        }}
      >
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Typography
            variant="h5"
            fontWeight={600}
            mb={1}
            sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Check your BMI
          </Typography>

          <Typography
            color="text.secondary"
            mb={3}
            sx={{ fontSize: { xs: "0.85rem", md: "0.95rem" } }}
          >
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
                size="small"
              />

              <TextField
                select
                label="Gender"
                name="gender"
                required
                fullWidth
                size="small"
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
                size="small"
              />

              <TextField
                label="Weight (kg)"
                name="weight"
                type="number"
                required
                fullWidth
                size="small"
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
                  fontSize: { xs: 14, md: 16 }
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