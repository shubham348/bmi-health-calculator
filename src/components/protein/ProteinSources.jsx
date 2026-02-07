import {
  Card,
  CardContent,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import { TableContainer, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { proteinSources } from "../../utils/proteinSources";

export default function ProteinSources() {
  const [diet, setDiet] = useState("veg");

  return (
    <Card sx={{ borderRadius: 5 }}>
      <Accordion
        defaultExpanded={false}
        sx={{
          borderRadius: 5,
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          "&::before": { display: "none" }
        }}
      >
        {/* HEADER */}
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 4, py: 2 }}>
          <Typography variant="h5" fontWeight={600}>
            Daily Protein Sources (Indian Diet)
          </Typography>
        </AccordionSummary>

        {/* CONTENT */}
        <AccordionDetails>
          <Card elevation={0}>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Stack direction="row" mb={3}>
                <ToggleButtonGroup
                  value={diet}
                  exclusive
                  onChange={(_, v) => v && setDiet(v)}
                  sx={{ borderRadius: 3 }}
                >
                  <ToggleButton value="veg">Vegetarian</ToggleButton>
                  <ToggleButton value="nonVeg">Non-Vegetarian</ToggleButton>
                </ToggleButtonGroup>
              </Stack>
              <TableContainer
                component={Paper}
                elevation={0}
                sx={{
                  width: "100%",
                  overflowX: "auto",
                  WebkitOverflowScrolling: "touch",
                  "&::-webkit-scrollbar": {
                    height: 6
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#cbd5e1",
                    borderRadius: 3
                  }
                }}
              >
                <Table
                  sx={{
                    minWidth: 650 // 👈 IMPORTANT: forces horizontal scroll
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell ><b>Food</b></TableCell>
                      <TableCell><b>Protein</b></TableCell>
                      <TableCell><b>Calories</b></TableCell>
                      <TableCell><b>Quantity</b></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {proteinSources[diet].map(item => (
                      <TableRow key={item.name}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.protein} g</TableCell>
                        <TableCell>{item.calories} kcal</TableCell>
                        <TableCell>{item.unit}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>
    </Card>

  );
}
