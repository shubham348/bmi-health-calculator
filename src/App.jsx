import { useState } from "react";
import { Container, Stack, Box, Tabs, Tab } from "@mui/material";
import Header from "./components/Header";
// BMI
import BmiForm from "./components/bmi/BmiForm";
import BmiResult from "./components/bmi/BmiResult";
import BmiEducation from "./components/bmi/BmiEducation";
import Resources from "./components/bmi/Resources";
// Body Fat
import BodyFatForm from "./components/bodyFat/BodyFatForm";
import BodyFatEducation from "./components/bodyFat/BodyFatEducation";
import BodyFatResult from "./components/bodyFat/BodyFatResult";
// CALORIES
import CalorieForm from "./components/calorie/CalorieForm";
import CalorieResult from "./components/calorie/CalorieResult";
import CalorieEducation from "./components/calorie/CalorieEducation";
import ProteinResult from "./components/calorie/ProteinResult";

//Protien
import ProteinSources from "./components/protein/ProteinSources";
import ProteinRecipes from "./components/protein/ProteinRecipes";

// Utils
import { calculateBMI, getBMICategory } from "./utils/bmi";
import { calculateCalories, proteinRequirement, calculateProtein } from "./utils/calories";
import { calculateBodyFat, getBodyFatCategory } from "./utils/bodyfat";


export default function App() {
  const [result, setResult] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [bodyFatResult, setBodyFatResult] = useState(null);
  const [calorieResult, setCalorieResult] = useState(null);

  const handleBodyFatCalculate = data => {
    const result = calculateBodyFat(data);
    const category = getBodyFatCategory(result.bodyFatPercent, data.gender);

    setBodyFatResult({
      ...result,
      category
    });
  };

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

  const handleCalorieCalculate = data => {
    const calories = calculateCalories(data);
    const protein = calculateProtein(
      data.weight,
      data.goal
    );

    setCalorieResult({
      ...calories,
      protein
    });
  };


  return (
    <Box
      style={{}}
      sx={{
        minHeight: "100vh",
        py: 6,
        background: "linear-gradient(to right bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12)"
      }}
    >
      <Container maxWidth="md">
        <Header />
        {/* ===== TABS ===== */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Tabs
            value={activeTab}
            onChange={(_, value) => {
              setActiveTab(value);
              setResult(null); // reset BMI result when switching tabs
            }}
            textColor="primary"
            indicatorColor="primary"
            sx={{
              backgroundColor: "#fff",
              borderRadius: 3,
              px: 2,
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)"
            }}
          >
            <Tab label="BMI Calculator" />
            <Tab label="Body Fat Calculator" />
            <Tab label="Calorie Calculator" />
            <Tab label="Protien Sources and Recipies" />
          </Tabs>
        </Box>

        {/* ===== TAB CONTENT ===== */}
        <Stack spacing={4} mt={4}>
          {/* === BMI TAB === */}
          {activeTab === 0 && (
            <>
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
            </>
          )}

          {/* === BODY FAT TAB === */}
          {activeTab === 1 && <>
            <BodyFatForm onCalculate={handleBodyFatCalculate} />
            {bodyFatResult && (
              <BodyFatResult
                bodyFatPercent={bodyFatResult.bodyFatPercent}
                category={bodyFatResult.category}
                fatMass={bodyFatResult.fatMass}
                leanMass={bodyFatResult.leanMass}
              />
            )}
            <BodyFatEducation />
          </>}

          {activeTab === 2 && (
            <Stack spacing={4}>
              <CalorieForm onCalculate={handleCalorieCalculate} />
              {calorieResult && (
                <>
                  <CalorieResult
                    maintenance={calorieResult.maintenance}
                    loss={calorieResult.weightLoss}
                    gain={calorieResult.weightGain}
                  />
                  <ProteinResult protein={calorieResult.protein} />
                </>
              )}
              <CalorieEducation />
            </Stack>
          )}
          {activeTab === 3 && (
            <Stack spacing={4}>
              <ProteinSources />
              <ProteinRecipes/>
            </Stack>
          )}

        </Stack>
      </Container>
    </Box>
  );
}
