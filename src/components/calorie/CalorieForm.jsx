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
import { doodleCard } from "../../utils/style";

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
      <Card
        sx={{
          width: {
            xs: "100%",
            sm: "90%",
            md: "80%"
          },
          borderRadius: 5,
          ...doodleCard
        }}
      >
        <CardContent sx={{ p: { xs: 2, md: 5 } }}>
          {/* TITLE */}
          <Typography
            fontWeight={600}
            mb={1}
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem" }
            }}
          >
            Calorie Calculator
          </Typography>

          {/* SUBTEXT */}
          <Typography
            color="text.secondary"
            mb={3}
            sx={{
              fontSize: { xs: "0.8rem", md: "0.95rem" }
            }}
          >
            Calculate how many calories you need per day.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={{ xs: 2, md: 2.5 }}>
              <TextField
                select
                label="Gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
                size="small" // ✅ mobile compact
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
                size="small"
              />

              <TextField
                label="Height (cm)"
                name="height"
                type="number"
                value={form.height}
                onChange={handleChange}
                required
                size="small"
              />

              <TextField
                label="Weight (kg)"
                name="weight"
                type="number"
                value={form.weight}
                onChange={handleChange}
                required
                size="small"
              />

              <TextField
                select
                label="Activity Level"
                name="activity"
                value={form.activity}
                onChange={handleChange}
                required
                size="small"
              >
                {activityLevels.map(a => (
                  <MenuItem
                    key={a.value}
                    value={a.value}
                    sx={{
                      fontSize: { xs: "0.8rem", md: "0.95rem" } // ✅ dropdown text fix
                    }}
                  >
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
                size="small"
              >
                <MenuItem value="maintain">Maintain weight</MenuItem>
                <MenuItem value="loss">Fat loss</MenuItem>
                <MenuItem value="gain">Muscle gain</MenuItem>
              </TextField>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  py: { xs: 1, md: 1.4 },
                  borderRadius: 3,
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: { xs: 13, md: 16 }
                }}
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