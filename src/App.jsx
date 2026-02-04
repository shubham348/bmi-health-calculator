import { Container, Stack, Box } from "@mui/material";
import Header from "./components/Header";
import BmiForm from "./components/BmiForm";
import BmiResult from "./components/BmiResult";
import CalorieInfo from "./components/CalorieInfo";
import Resources from "./components/Resources";
import HealthImpact from "./components/HealthImpact";
import Disclaimers from "./components/Disclaimers";
import BmiEducation from "./components/BmiEducation";
import { calculateBMI, getBMICategory,   } from "./utils/bmi";
import { calculateCalories, proteinRequirement } from "./utils/calories";
import { useState } from "react";

export default function App() {
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
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #f0fdf4 0%, #ffffff 60%)",
        py: 6
      }}
    >
      <Container maxWidth="md">
        <Header />

        <Stack spacing={4}>
          <BmiForm onCalculate={handleCalculate} />
          {result && (
            <>
              <BmiResult bmi={result.bmi} category={result.category} height={result.height}/>
              {/* <HealthImpact category={result.category} />
              <Disclaimers /> */}
              {/* <CalorieInfo calories={result.calories} protein={result.protein} /> */}
            </>
          )}
          <BmiEducation />
          <Resources />
        </Stack>
      </Container>
    </Box>
  );
}
