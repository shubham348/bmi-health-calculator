import { useState } from "react";
import { Box, Stack } from "@mui/material";
import CalorieForm from "../components/calorie/CalorieForm";
import CalorieResult from "../components/calorie/CalorieResult";
import ProteinResult from "../components/calorie/ProteinResult";
import CalorieEducation from "../components/calorie/CalorieEducation";
import { calculateCalories, calculateProtein } from "../utils/calories";
import PageLayout from "../components/PageLayout";

export default function CaloriePage() {
  const [result, setResult] = useState(null);

  const handleCalculate = data => {
    const calories = calculateCalories(data);
    const protein = calculateProtein(data.weight, data.goal);
    setResult({ ...calories, protein });
  };

  return (
    <PageLayout title="Calorie Calculator" showBreadcrumb>
      <Stack spacing={6} mt={4}>

        {/* ===== FORM + RESULTS WRAPPER ===== */}
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
          {/* FORM */}
          <Box>
            <CalorieForm onCalculate={handleCalculate} />
          </Box>

          {/* RESULTS (Right Side on Desktop) */}
          {result && (
            <Stack spacing={4}>
              <CalorieResult
                maintenance={result.maintenance}
                loss={result.weightLoss}
                gain={result.weightGain}
              />
              <ProteinResult protein={result.protein} />
            </Stack>
          )}
        </Box>

        {/* ===== EDUCATION FULL WIDTH ===== */}
        <Box sx={{ maxWidth: 1100, mx: "auto", width: "100%" }}>
          <CalorieEducation />
        </Box>

      </Stack>
    </PageLayout>
  );
}
