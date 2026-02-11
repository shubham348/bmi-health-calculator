import { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  Typography,
  Box,
  MenuItem,
  Divider,
  Link
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import EducationSection from "../components/EducationSection";
import { calculateMacros } from "../utils/macros";

export default function MacroCalculatorPage() {
  const [preset, setPreset] = useState("40/30/30");
  const [result, setResult] = useState(null);

  const presets = {
    "40/30/30": { protein: 30, carbs: 40, fat: 30 },
    "50/30/20": { protein: 30, carbs: 50, fat: 20 },
    "30/40/30": { protein: 40, carbs: 30, fat: 30 }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const calories = Number(data.get("calories"));

    const split = presets[preset];

    const macros = calculateMacros(
      calories,
      split.protein,
      split.carbs,
      split.fat
    );

    setResult(macros);
  };

  return (
    <PageLayout title="Macro Calculator" showBreadcrumb>

      {/* ================= FORM CARD ================= */}
      <Box display="flex" justifyContent="center">
        <Card
          sx={{
            width: { xs: "100%", sm: "90%", md: "80%" },
            borderRadius: 5,
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="h5" fontWeight={600} mb={1}>
              Macronutrient Calculator
            </Typography>

            <Typography color="text.secondary" mb={3}>
              Calculate daily protein, carbohydrate, and fat intake
              based on your calorie target.
            </Typography>

            <form onSubmit={handleSubmit}>
              <Stack spacing={2.5}>
                <TextField
                  label="Total Daily Calories"
                  name="calories"
                  type="number"
                  required
                  fullWidth
                />

                <TextField
                  select
                  label="Macro Split"
                  value={preset}
                  onChange={(e) => setPreset(e.target.value)}
                  fullWidth
                >
                  <MenuItem value="40/30/30">
                    40% Carbs / 30% Protein / 30% Fat
                  </MenuItem>
                  <MenuItem value="50/30/20">
                    50% Carbs / 30% Protein / 20% Fat
                  </MenuItem>
                  <MenuItem value="30/40/30">
                    30% Carbs / 40% Protein / 30% Fat
                  </MenuItem>
                </TextField>

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
                  Calculate Macros
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Box>

      {/* ================= RESULT CARD ================= */}
      {result && (
        <Box mt={4} display="flex" justifyContent="center">
          <Card
            sx={{
              width: { xs: "100%", sm: "90%", md: "80%" },
              borderRadius: 5,
              background: "linear-gradient(135deg, #ecfdf5, #ffffff)",
              border: "1px solid #e5e7eb"
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                Your Daily Macro Targets
              </Typography>

              <Typography fontSize={28} fontWeight={700}>
                Protein: {result.proteinGrams} g
              </Typography>

              <Typography fontSize={28} fontWeight={700}>
                Carbohydrates: {result.carbGrams} g
              </Typography>

              <Typography fontSize={28} fontWeight={700}>
                Fat: {result.fatGrams} g
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}

      {/* ================= EDUCATION SECTION ================= */}
      <Box mt={6} display="flex" justifyContent="center">
        <EducationSection title="Macronutrient Education & Dietary Guidance">

          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              What Are Macronutrients?
            </Typography>
            <Typography color="text.secondary">
              Macronutrients are nutrients required in large amounts:
              protein, carbohydrates, and fats. Each provides energy and
              plays a specific role in body function and performance.
            </Typography>
          </Box>

          <Divider />

          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Protein
            </Typography>
            <Typography color="text.secondary">
              Protein supports muscle repair, immune function, and metabolic health.
              It provides 4 calories per gram.
            </Typography>
            <Typography mt={1}>
              👉 You can find a complete list of high-protein foods,
              recipes, fiber-rich foods, and low-calorie options on the{" "}
              <Link component={RouterLink} to="/protein" underline="hover">
                Protein & Nutrition Page
              </Link>.
            </Typography>
          </Box>

          <Divider />

          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Carbohydrates
            </Typography>
            <Typography color="text.secondary">
              Carbohydrates are the body's primary energy source.
              Complex carbohydrates from whole foods support
              stable blood sugar and sustained energy.
            </Typography>
          </Box>

          <Divider />

          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Fats
            </Typography>
            <Typography color="text.secondary">
              Healthy fats support hormone production, nutrient absorption,
              and brain function. Fats provide 9 calories per gram.
            </Typography>
          </Box>

          <Divider />

          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Choosing the Right Macro Split
            </Typography>
            <Typography color="text.secondary">
              The ideal macro distribution depends on your goals,
              activity level, and metabolic health. Higher protein
              is often recommended during fat loss or muscle-building phases.
            </Typography>
          </Box>

        </EducationSection>
      </Box>

    </PageLayout>
  );
}
