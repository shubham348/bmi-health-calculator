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
  AccordionDetails,
  Box
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
              <Box
                sx={{
                  overflow: "auto",
                  maxHeight: { xs: 380, md: 500 },
                  borderRadius: 3,
                  border: "1px solid #eee"
                }}
              >
                <Table stickyHeader size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{
                        position: "sticky",
                        left: 0,
                        background: "#fff",
                        fontWeight: 500,
                        zIndex: 3
                      }}><b>Food</b></TableCell>
                      <TableCell>Protein (g)</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Calories (kacl)</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {proteinSources[diet].map(item => (
                      <TableRow key={item.name}>
                        <TableCell sx={{
                          position: "sticky",
                          left: 0,
                          background: "#fff",
                          fontWeight: 500
                        }}><b>{item.name}</b></TableCell>
                        <TableCell>{item.protein}</TableCell>
                        <TableCell>{item.unit}</TableCell>
                        <TableCell>{item.calories}</TableCell>
                      </TableRow>
                    ))}

                  </TableBody>
                </Table>
              </Box>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>
    </Card>

  );
}
