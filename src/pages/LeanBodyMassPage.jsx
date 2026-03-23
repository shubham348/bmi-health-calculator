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
import { doodleCard } from "../utils/style";

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
      <Stack spacing={{ xs: 3, md: 6 }} mt={{ xs: 2, md: 4 }}>

        {/* ===== FORM + RESULT WRAPPER ===== */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: result ? "1fr 1fr" : "1fr"
            },
            gap: { xs: 2, md: 4 },
            alignItems: "start",
            maxWidth: 1100,
            mx: "auto"
          }}
        >

          {/* ================= FORM CARD ================= */}
          <Card
            sx={{
              borderRadius: 5,
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              ...doodleCard
            }}
          >
            <CardContent sx={{ p: { xs: 2, md: 4 } }}>
              <Typography
                fontWeight={600}
                mb={1}
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.5rem" }
                }}
              >
                Lean Body Mass Calculator
              </Typography>

              <Typography
                color="text.secondary"
                mb={3}
                sx={{
                  fontSize: { xs: "0.8rem", md: "0.95rem" }
                }}
              >
                Calculate lean mass and fat mass using direct body fat input
                or automatic estimation.
              </Typography>

              <ToggleButtonGroup
                value={mode}
                exclusive
                onChange={(e, newMode) => newMode && setMode(newMode)}
                sx={{
                  mb: 3,
                  flexWrap: "wrap" // ✅ mobile safe
                }}
              >
                <ToggleButton
                  value="direct"
                  sx={{ fontSize: { xs: "0.7rem", md: "0.9rem" } }}
                >
                  Enter Body Fat %
                </ToggleButton>
                <ToggleButton
                  value="auto"
                  sx={{ fontSize: { xs: "0.7rem", md: "0.9rem" } }}
                >
                  Auto Calculate Body Fat
                </ToggleButton>
              </ToggleButtonGroup>

              <form onSubmit={handleSubmit}>
                <Stack spacing={{ xs: 2, md: 2.5 }}>
                  <TextField
                    label="Weight (kg)"
                    name="weight"
                    type="number"
                    required
                    fullWidth
                    size="small" // ✅ mobile compact
                  />

                  {mode === "direct" && (
                    <TextField
                      label="Body Fat (%)"
                      name="bodyFat"
                      type="number"
                      required
                      fullWidth
                      size="small"
                    />
                  )}

                  {mode === "auto" && (
                    <>
                      <TextField select label="Gender" name="gender" required fullWidth size="small">
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </TextField>

                      <TextField label="Age" name="age" type="number" required fullWidth size="small" />
                      <TextField label="Height (cm)" name="height" type="number" required fullWidth size="small" />
                      <TextField label="Waist (cm)" name="waist" type="number" required fullWidth size="small" />
                      <TextField label="Neck (cm)" name="neck" type="number" required fullWidth size="small" />
                    </>
                  )}

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 1,
                      py: { xs: 1, md: 1.4 },
                      borderRadius: 3,
                      fontWeight: 600,
                      textTransform: "none",
                      fontSize: { xs: 13, md: 16 }
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
              <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                <Typography
                  gutterBottom
                  sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
                >
                  Your Results
                </Typography>

                <Typography
                  fontWeight={700}
                  sx={{ fontSize: { xs: 22, md: 32 } }}
                >
                  Lean Body Mass: {result.leanBodyMass} kg
                </Typography>

                <Typography sx={{ fontSize: { xs: 16, md: 20 }, mt: 1 }}>
                  Fat Mass: {result.fatMass} kg
                </Typography>

                <Typography mt={2} color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                  Body Fat: {result.bodyFatPercent}%
                </Typography>
              </CardContent>
            </Card>
          )}
        </Box>

        {/* ================= EDUCATION ================= */}
        <Box sx={{ maxWidth: 1100, mx: "auto", width: "100%", ...doodleCard }}>
          <EducationSection title="Lean Body Mass Education & Health Information">

            <Box>
              <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, fontWeight: 600 }}>
                What is Lean Body Mass?
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: { xs: "0.8rem", md: "0.95rem" } }}>
                Lean Body Mass (LBM) represents everything in your body except fat.
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, fontWeight: 600 }}>
                Why It Matters
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: { xs: "0.8rem", md: "0.95rem" } }}>
                Higher lean mass supports metabolism and performance.
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, fontWeight: 600 }}>
                Lean Mass vs Muscle Mass
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: { xs: "0.8rem", md: "0.95rem" } }}>
                Lean mass includes muscle, bones, and water.
              </Typography>
            </Box>

          </EducationSection>
        </Box>

      </Stack>
    </PageLayout>
  );
}