import { Box, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const pages = [
  {
    title: "BMI Calculator",
    description: "Calculate BMI, health category, calorie needs and protein intake.",
    path: "/bmi",
    icon: <FitnessCenterIcon fontSize="large" />
  },
  {
    title: "Body Fat Calculator",
    description: "Estimate body fat %, fat mass and lean mass insights.",
    path: "/body-fat",
    icon: <MonitorWeightIcon fontSize="large" />
  },
  {
    title: "Calorie Calculator",
    description: "Find maintenance calories and weight targets.",
    path: "/calorie",
    icon: <LocalFireDepartmentIcon fontSize="large" />
  },
  {
    title: "Protein Sources & Recipes",
    description: "Daily protein foods, fiber tables and recipes.",
    path: "/protein",
    icon: <RestaurantMenuIcon fontSize="large" />
  }
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          mt: 6,
          justifyContent: "space-between"
        }}
      >
        {pages.map((page, index) => (
          <Box
            key={index}
            onClick={() => navigate(page.path)}
            sx={{
              flex: { xs: "1 1 100%", md: "1 1 48%" },
              backgroundColor: "#fff",
              borderRadius: 3,
              p: 4,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 3,
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.12)"
              }
            }}
          >
            <Box sx={{ color: "#004d7a" }}>
              {page.icon}
            </Box>

            <Box>
              <Typography variant="h6" fontWeight="bold">
                {page.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {page.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </PageLayout>
  );
}
