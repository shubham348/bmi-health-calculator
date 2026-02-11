import { useState } from "react";
import { Stack, } from "@mui/material";
import BodyFatForm from "../components/bodyFat/BodyFatForm";
import BodyFatResult from "../components/bodyFat/BodyFatResult";
import BodyFatEducation from "../components/bodyFat/BodyFatEducation";
import { calculateBodyFat, getBodyFatCategory } from "../utils/bodyFat";
import PageLayout from "../components/PageLayout";

export default function BodyFatPage() {
  const [result, setResult] = useState(null);

  const handleCalculate = data => {
    const r = calculateBodyFat(data);
    const category = getBodyFatCategory(r.bodyFatPercent, data.gender);
    setResult({ ...r, category });
  };

  return (
    <PageLayout title="Body Fat" showBreadcrumb>
      <Stack spacing={4} mt={4}>
        <BodyFatForm onCalculate={handleCalculate} />
        {result && (
          <BodyFatResult
            bodyFatPercent={result.bodyFatPercent}
            category={result.category}
            fatMass={result.fatMass}
            leanMass={result.leanMass}
          />
        )}
        <BodyFatEducation />
      </Stack>
    </PageLayout>
  );
}
