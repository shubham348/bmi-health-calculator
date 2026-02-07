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
import { useState } from "react";

export default function BodyFatForm({ onCalculate }) {
  const [form, setForm] = useState({
    gender: "",
    age: "",
    height: "",
    weight: "",
    waist: "",
    neck: "",
    hip: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onCalculate({
      gender: form.gender,
      age: Number(form.age),
      height: Number(form.height),
      weight: Number(form.weight),
      waist: Number(form.waist),
      neck: Number(form.neck),
      hip: Number(form.hip)
    });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "100%", maxWidth:"80%", borderRadius: 5 }}>
        <CardContent sx={{ p: { xs: 4, md: 5 } }}>
          <Typography variant="h5" fontWeight={600} mb={1}>
            Body Fat Calculator
          </Typography>

          <Typography color="text.secondary" mb={3}>
            Estimate your body fat percentage using the U.S. Navy method.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={2.5}>
              <TextField
                select
                label="Gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
                fullWidth
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </TextField>

              <TextField
                label="Age"
                name="age"
                type="number"
                value={form.age}
                onChange={handleChange}
                required
                fullWidth
              />

              <TextField
                label="Height (cm)"
                name="height"
                type="number"
                value={form.height}
                onChange={handleChange}
                required
                fullWidth
              />

              <TextField
                label="Weight (kg)"
                name="weight"
                type="number"
                value={form.weight}
                onChange={handleChange}
                required
                fullWidth
              />

              <TextField
                label="Waist Circumference (cm)"
                name="waist"
                type="number"
                value={form.waist}
                onChange={handleChange}
                required
                fullWidth
              />

              <TextField
                label="Neck Circumference (cm)"
                name="neck"
                type="number"
                value={form.neck}
                onChange={handleChange}
                required
                fullWidth
              />

              {form.gender === "female" && (
                <TextField
                  label="Hip Circumference (cm)"
                  name="hip"
                  type="number"
                  value={form.hip}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              )}

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
                  textTransform: "none"
                }}
              >
                Calculate Body Fat
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
