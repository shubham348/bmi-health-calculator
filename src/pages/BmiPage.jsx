import { useState } from "react";
import { Stack } from "@mui/material";
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
      <Stack spacing={4} mt={4}>
        <BmiForm onCalculate={handleCalculate} />

        {result && (
          <BmiResult
            bmi={result.bmi}
            category={result.category}
            height={result.height}
          />
        )}

        <BmiEducation />
        <Resources />
      </Stack>
    </PageLayout>
  );
}
