import { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { proteinRecipesText } from "../../utils/proteinVideos";

export default function ProteinTextRecipes() {
  const [selectedCategory, setSelectedCategory] = useState("general");

  const categories = useMemo(() => {
    const set = new Set(
      proteinRecipesText.map(r => r.category || "general")
    );
    return ["general", ...Array.from(set)];
  }, []);

  const filteredRecipes = useMemo(() => {
    return proteinRecipesText.filter(
      r => r.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <>
      <Box sx={{ mb: 4, maxWidth: 300 }}>
        <FormControl fullWidth size="small">
          <InputLabel>Ingredient</InputLabel>
          <Select
            value={selectedCategory}
            label="Ingredient"
            onChange={(e) =>
              setSelectedCategory(e.target.value)
            }
            sx={{
              borderRadius: 3,
              backgroundColor: "#fafafa",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#eee"
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ccc"
              }
            }}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat === "general"
                  ? "General"
                  : cat.charAt(0).toUpperCase() +
                  cat.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>


      {/* Recipes */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {filteredRecipes.map((recipe, i) => (
          <Accordion key={i}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <Typography fontWeight={600}>
                  {recipe.title}
                </Typography>
              </Box>
            </AccordionSummary>

            <AccordionDetails>
              {/* Ingredients */}
              <Typography fontWeight={600} mb={1}>
                Ingredients
              </Typography>
              {recipe.ingredients.map((item, idx) => (
                <Typography key={idx} color="text.secondary">
                  • {item}
                </Typography>
              ))}

              {/* Steps */}
              <Typography fontWeight={600} mt={2} mb={1}>
                Steps
              </Typography>
              {recipe.steps.map((step, idx) => (
                <Typography key={idx} color="text.secondary">
                  {idx + 1}. {step}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
}