import { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  MenuItem,
  Typography,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Divider
} from "@mui/material";
import PageLayout from "../components/PageLayout";
import { calculateLeanBodyMass } from "../utils/leanBodyMass";
import { calculateBodyFat } from "../utils/bodyFat";
import EducationSection from "../components/EducationSection";

export default function LeanBodyMassPage() {
  const [mode, setMode] = useState("direct");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    let bodyFatPercent;

    if (mode === "direct") {
      bodyFatPercent = Number(data.get("bodyFat"));
    } else {
      const bf = calculateBodyFat({
        gender: data.get("gender"),
        age: Number(data.get("age")),
        height: Number(data.get("height")),
        weight: Number(data.get("weight")),
        waist: Number(data.get("waist")),
        neck: Number(data.get("neck"))
      });

      bodyFatPercent = bf.bodyFatPercent;
    }

    const weight = Number(data.get("weight"));
    const lbmData = calculateLeanBodyMass(weight, bodyFatPercent);

    setResult({
      ...lbmData,
      bodyFatPercent: Number(bodyFatPercent.toFixed(2))
    });
  };

  return (
    <PageLayout title="Lean Body Mass Calculator" showBreadcrumb>
      <Stack spacing={6} mt={4}>

        {/* ===== FORM + RESULT WRAPPER ===== */}
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

          {/* ================= FORM CARD ================= */}
          <Card
            sx={{
              borderRadius: 5,
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h5" fontWeight={600} mb={1}>
                Lean Body Mass Calculator
              </Typography>

              <Typography color="text.secondary" mb={3}>
                Calculate lean mass and fat mass using direct body fat input
                or automatic estimation.
              </Typography>

              <ToggleButtonGroup
                value={mode}
                exclusive
                onChange={(e, newMode) => newMode && setMode(newMode)}
                sx={{ mb: 3 }}
              >
                <ToggleButton value="direct">
                  Enter Body Fat %
                </ToggleButton>
                <ToggleButton value="auto">
                  Auto Calculate Body Fat
                </ToggleButton>
              </ToggleButtonGroup>

              <form onSubmit={handleSubmit}>
                <Stack spacing={2.5}>
                  <TextField
                    label="Weight (kg)"
                    name="weight"
                    type="number"
                    required
                    fullWidth
                  />

                  {mode === "direct" && (
                    <TextField
                      label="Body Fat (%)"
                      name="bodyFat"
                      type="number"
                      required
                      fullWidth
                    />
                  )}

                  {mode === "auto" && (
                    <>
                      <TextField select label="Gender" name="gender" required fullWidth>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </TextField>

                      <TextField label="Age" name="age" type="number" required fullWidth />
                      <TextField label="Height (cm)" name="height" type="number" required fullWidth />
                      <TextField label="Waist (cm)" name="waist" type="number" required fullWidth />
                      <TextField label="Neck (cm)" name="neck" type="number" required fullWidth />
                    </>
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
                      textTransform: "none",
                      fontSize: 16
                    }}
                  >
                    Calculate Lean Body Mass
                  </Button>
                </Stack>
              </form>
            </CardContent>
          </Card>

          {/* ================= RESULT CARD ================= */}
          {result && (
            <Card
              sx={{
                borderRadius: 5,
                background: "linear-gradient(135deg, #ecfdf5, #ffffff)",
                border: "1px solid #e5e7eb"
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Your Results
                </Typography>

                <Typography fontSize={32} fontWeight={700}>
                  Lean Body Mass: {result.leanBodyMass} kg
                </Typography>

                <Typography fontSize={20} mt={1}>
                  Fat Mass: {result.fatMass} kg
                </Typography>

                <Typography mt={2} color="text.secondary">
                  Body Fat: {result.bodyFatPercent}%
                </Typography>
              </CardContent>
            </Card>
          )}
        </Box>

        {/* ================= EDUCATION FULL WIDTH ================= */}
        <Box sx={{ maxWidth: 1100, mx: "auto", width: "100%" }}>
          <EducationSection title="Lean Body Mass Education & Health Information">

            <Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                What is Lean Body Mass?
              </Typography>
              <Typography color="text.secondary">
                Lean Body Mass (LBM) represents everything in your body except fat.
                This includes muscles, bones, organs, connective tissue, and body fluids.
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Why It Matters
              </Typography>
              <Typography color="text.secondary">
                Higher lean mass supports improved metabolism,
                insulin sensitivity, and physical performance.
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Lean Mass vs Muscle Mass
              </Typography>
              <Typography color="text.secondary">
                Lean mass includes muscle but also bones and water.
                Muscle mass is only a portion of lean mass.
              </Typography>
            </Box>

          </EducationSection>
        </Box>

      </Stack>
    </PageLayout>
  );
}
