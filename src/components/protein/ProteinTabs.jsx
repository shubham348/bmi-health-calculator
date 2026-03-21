import { useState } from "react";
import {
  Box, Tabs, Tab, Card, Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import ProteinRecipes from "./ProteinRecipes";
import ProteinTextRecipes from "./ProteinTextRecipes";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { doodleCard } from "../../utils/style";

export default function ProteinTabs() {
  const [tab, setTab] = useState(0);

  return (
    <Card sx={{ borderRadius: 5, mt: 4, ...doodleCard }}>
      <Accordion defaultExpanded sx={{ borderRadius: 5 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 4, py: 2 }}>
          <Typography variant="h5" fontWeight={600}>
            Recipes
          </Typography>
        </AccordionSummary>

        <AccordionDetails>

          <Box sx={{ mb: 3 }}>
            <Tabs
              value={tab}
              onChange={(e, newValue) => setTab(newValue)}
              sx={{
                padding: "4px",
              }}
            >
              <Tab label="🎥 Videos" />
              <Tab label="📖 Recipes" />
            </Tabs>
          </Box>
          {tab === 0 && <ProteinRecipes />}
          {tab === 1 && <ProteinTextRecipes />}
        </AccordionDetails>
      </Accordion>

    </Card>
  );
}
