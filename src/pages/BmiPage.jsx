import { useState } from "react";
import { Box, Stack } from "@mui/material";
import PageLayout from "../components/PageLayout";
import BmiForm from "../components/bmi/BmiForm";
import BmiResult from "../components/bmi/BmiResult";
import BmiEducation from "../components/bmi/BmiEducation";
import Resources from "../components/bmi/Resources";
import { calculateBMI, getBMICategory } from "../utils/bmi";
import { calculateCalories, proteinRequirement } from "../utils/calories";

export default function BmiPage() {
  const [result, setResult] = useState(null);

  const handleCalculate = data => {
    const bmi = calculateBMI(data.weight, data.height);
    const category = getBMICategory(bmi);
    const calories = calculateCalories(data);
    const protein = proteinRequirement(data.weight);

    setResult({
      bmi,
      category,
      calories,
      protein,
      height: data.height,
      weight: data.weight
    });
  };

  return (
    <PageLayout title="BMI Calculator" showBreadcrumb>
      <Stack spacing={6} mt={4}>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: result ? "1fr 1fr" : "1fr"
            },
            gap: 4,
            alignItems: "start"
          }}
        >          <Box>
            <BmiForm onCalculate={handleCalculate} />
          </Box>

          {result && (
            <Box>
              <BmiResult
                bmi={result.bmi}
                category={result.category}
                height={result.height}
              />
            </Box>
          )}
        </Box>

        <BmiEducation />
        <Resources />
      </Stack>
    </PageLayout>
  );
}
