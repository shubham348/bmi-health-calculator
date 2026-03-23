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
import { doodleCard } from "../utils/style";

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
      <Stack spacing={6} mt={4}>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: result ? "1fr 1fr" : "1fr"
            },
            gap: 4,
            alignItems: "start",
            maxWidth: 1100,
            mx: "auto"
          }}
        >

          <Card
            sx={{
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
                Macronutrient Calculator
              </Typography>

              <Typography
                color="text.secondary"
                mb={3}
                sx={{ fontSize: { xs: "0.85rem", md: "0.95rem" } }}
              >
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
                      fontSize: { xs: 14, md: 16 }
                    }}
                  >
                    Calculate Macros
                  </Button>
                </Stack>
              </form>
            </CardContent>
          </Card>

          {result && (
            <Card
              sx={{
                borderRadius: 5,
                background: "linear-gradient(135deg, #ecfdf5, #ffffff)",
                border: "1px solid #e5e7eb",
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                >
                  Your Daily Macro Targets
                </Typography>

                <Typography fontWeight={700} sx={{ fontSize: { xs: 20, md: 28 } }}>
                  Protein: {result.proteinGrams} g
                </Typography>

                <Typography fontWeight={700} sx={{ fontSize: { xs: 20, md: 28 } }}>
                  Carbohydrates: {result.carbGrams} g
                </Typography>

                <Typography fontWeight={700} sx={{ fontSize: { xs: 20, md: 28 } }}>
                  Fat: {result.fatGrams} g
                </Typography>
              </CardContent>
            </Card>
          )}
        </Box>

        <Box sx={{ maxWidth: 1100, mx: "auto", width: "100%" ,...doodleCard}}>
          <EducationSection title="Macronutrient Education & Dietary Guidance">

            <Box>
              <Typography
                variant="h6"
                fontWeight={600}
                gutterBottom
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                What Are Macronutrients?
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ fontSize: { xs: "0.85rem", md: "0.95rem" } }}
              >
                Macronutrients are nutrients required in large amounts:
                protein, carbohydrates, and fats. Each provides energy and
                plays a specific role in body function and performance.
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Typography
                variant="h6"
                fontWeight={600}
                gutterBottom
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                Protein
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ fontSize: { xs: "0.85rem", md: "0.95rem" } }}
              >
                Protein supports muscle repair, immune function, and metabolic health.
                It provides 4 calories per gram.
              </Typography>
              <Typography mt={1} sx={{ fontSize: { xs: "0.85rem", md: "0.95rem" } }}>
                👉 You can find a complete list of high-protein foods,
                recipes, fiber-rich foods, and low-calorie options on the{" "}
                <Link component={RouterLink} to="/protein" underline="hover">
                  Protein & Nutrition Page
                </Link>.
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Typography
                variant="h6"
                fontWeight={600}
                gutterBottom
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                Carbohydrates
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ fontSize: { xs: "0.85rem", md: "0.95rem" } }}
              >
                Carbohydrates are the body's primary energy source.
                Complex carbohydrates from whole foods support
                stable blood sugar and sustained energy.
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Typography
                variant="h6"
                fontWeight={600}
                gutterBottom
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                Fats
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ fontSize: { xs: "0.85rem", md: "0.95rem" } }}
              >
                Healthy fats support hormone production, nutrient absorption,
                and brain function. Fats provide 9 calories per gram.
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Typography
                variant="h6"
                fontWeight={600}
                gutterBottom
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                Choosing the Right Macro Split
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ fontSize: { xs: "0.85rem", md: "0.95rem" } }}
              >
                The ideal macro distribution depends on your goals,
                activity level, and metabolic health. Higher protein
                is often recommended during fat loss or muscle-building phases.
              </Typography>
            </Box>

          </EducationSection>
        </Box>

      </Stack>
    </PageLayout>
  );
}