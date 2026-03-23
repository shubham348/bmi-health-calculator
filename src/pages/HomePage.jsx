import { Box, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { doodleCard } from "../utils/style";

const pages = [
  {
    title: "Protein Sources & Recipes",
    description: "Daily protein foods, fiber tables and recipes.",
    path: "/protein",
    icon: <RestaurantMenuIcon />
  },
  {
    title: "Macro Calculator",
    description: "Calculate protein, carbs, and fats based on your calorie target.",
    path: "/macro-calculator",
    icon: <FitnessCenterIcon />
  },
  {
    title: "BMI Calculator",
    description: "Calculate BMI, health category, calorie needs and protein intake.",
    path: "/bmi",
    icon: <FitnessCenterIcon />
  },
  {
    title: "Body Fat Calculator",
    description: "Estimate body fat %, fat mass and lean mass insights.",
    path: "/body-fat",
    icon: <MonitorWeightIcon />
  },
  {
    title: "Calorie Calculator",
    description: "Find maintenance calories and weight targets.",
    path: "/calorie",
    icon: <LocalFireDepartmentIcon />
  },
  {
    title: "BMR Calculator",
    description: "Calculate your Basal Metabolic Rate using Mifflin-St Jeor formula.",
    path: "/bmr",
    icon: <FitnessCenterIcon />
  },
  {
    title: "Lean Body Mass",
    description: "Calculate lean mass and fat mass using body fat percentage.",
    path: "/lean-body-mass",
    icon: <FitnessCenterIcon />
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "1fr 1fr",
          },
          gap: { xs: 2, md: 4 }, // ✅ tighter on mobile
          mt: { xs: 3, md: 6 },
        }}
      >
        {pages.map((page, index) => (
          <Box
            key={index}
            onClick={() => navigate(page.path)}
            sx={{
              ...doodleCard,

              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: { xs: 2, md: 3 },

              // ✅ padding responsive
              px: { xs: 2, md: 3 },
              py: { xs: 1.5, md: 3 },

              // ✅ smaller radius on mobile
              borderRadius: { xs: 2, md: 3 },

              transition: "all 0.25s ease",

              "&:hover": {
                transform: { md: "translateY(-6px)" }, // disable hover jump on mobile
              },
            }}
          >
            {/* ICON */}
            <Box
              sx={{
                color: "#004d7a",
                display: "flex",
                alignItems: "center",

                "& svg": {
                  fontSize: {
                    xs: 22, // ✅ smaller icon mobile
                    md: 32,
                  },
                },
              }}
            >
              {page.icon}
            </Box>

            {/* TEXT */}
            <Box>
              <Typography
                fontWeight="bold"
                sx={{
                  fontSize: {
                    xs: "0.95rem", // ✅ compact mobile
                    md: "1.2rem",
                  },
                  lineHeight: 1.2,
                }}
              >
                {page.title}
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  fontSize: {
                    xs: "0.75rem", // ✅ smaller desc
                    md: "0.9rem",
                  },
                  mt: 0.5,
                }}
              >
                {page.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </PageLayout>
  );
}