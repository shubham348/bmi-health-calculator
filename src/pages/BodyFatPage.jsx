import { useState } from "react";
import { Box, Stack } from "@mui/material";
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
          {/* FORM */}
          <Box>
            <BodyFatForm onCalculate={handleCalculate} />
          </Box>

          {/* RESULT */}
          {result && (
            <Box>
              <BodyFatResult
                bodyFatPercent={result.bodyFatPercent}
                category={result.category}
                fatMass={result.fatMass}
                leanMass={result.leanMass}
              />
            </Box>
          )}
        </Box>

        {/* ===== EDUCATION FULL WIDTH ===== */}
        <Box sx={{ maxWidth: 1100, mx: "auto", width: "100%" ,}}>
          <BodyFatEducation />
        </Box>

      </Stack>
    </PageLayout>
  );
}
