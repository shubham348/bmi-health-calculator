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

const activityLevels = [
  { label: "Sedentary (little or no exercise)", value: 1.2 },
  { label: "Lightly active (1–3 days/week)", value: 1.375 },
  { label: "Moderately active (3–5 days/week)", value: 1.55 },
  { label: "Very active (6–7 days/week)", value: 1.725 },
  { label: "Extra active (physical job / athlete)", value: 1.9 }
];

export default function CalorieForm({ onCalculate }) {
  const [form, setForm] = useState({
    gender: "",
    age: "",
    height: "",
    weight: "",
    activity: "",
    goal: "maintain"
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onCalculate({
      ...form,
      age: Number(form.age),
      height: Number(form.height),
      weight: Number(form.weight),
      activity: Number(form.activity)
    });
  };

  return (
    <Box display="flex" justifyContent="center">
      <Card sx={{
        width: {
          xs: "100%",   // mobile
          sm: "90%",   // tablet
          md: "80%"     // desktop and up
        }, borderRadius: 5
      }}>
        <CardContent sx={{ p: { xs: 4, md: 5 } }}>
          <Typography variant="h5" fontWeight={600} mb={1}>
            Calorie Calculator
          </Typography>

          <Typography color="text.secondary" mb={3}>
            Calculate how many calories you need per day.
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
              />

              <TextField
                label="Height (cm)"
                name="height"
                type="number"
                value={form.height}
                onChange={handleChange}
                required
              />

              <TextField
                label="Weight (kg)"
                name="weight"
                type="number"
                value={form.weight}
                onChange={handleChange}
                required
              />

              <TextField
                select
                label="Activity Level"
                name="activity"
                value={form.activity}
                onChange={handleChange}
                required
              >
                {activityLevels.map(a => (
                  <MenuItem key={a.value} value={a.value}>
                    {a.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Goal"
                name="goal"
                fullWidth
                required
                value={form.goal}
                onChange={handleChange}
              >
                <MenuItem value="maintain">Maintain weight</MenuItem>
                <MenuItem value="loss">Fat loss</MenuItem>
                <MenuItem value="gain">Muscle gain</MenuItem>
              </TextField>

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{ py: 1.4, borderRadius: 3, fontWeight: 600 }}
              >
                Calculate Calories
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
