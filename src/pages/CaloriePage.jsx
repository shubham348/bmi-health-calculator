import { useState } from "react";
import { Stack,  } from "@mui/material";
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
      <Stack spacing={4} mt={4}>
        <CalorieForm onCalculate={handleCalculate} />
        {result && (
          <>
            <CalorieResult
              maintenance={result.maintenance}
              loss={result.weightLoss}
              gain={result.weightGain}
            />
            <ProteinResult protein={result.protein} />
          </>
        )}
        <CalorieEducation />
      </Stack>
    </PageLayout>
  );
}
