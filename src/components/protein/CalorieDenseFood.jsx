import {
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { caloriefoods } from "../../utils/proteinSources";

export default function CalorieDenseFood() {
  
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
           Calorie Density Food
          </Typography>
        </AccordionSummary>

        {/* CONTENT */}
        <AccordionDetails>
          <Card elevation={0}>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography color="text.secondary" mb={3}>
                Detailed nutrition breakdown including protein, calories,
                fiber, and calorie density per 100g
              </Typography>

              {/* SCROLL CONTAINER */}
              <Box
                sx={{
                  overflow:"auto",
                  maxHeight: { xs: 380, md: 500 },
                  borderRadius: 3,
                  border: "1px solid #eee"
                }}
              >
                <Table stickyHeader size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell><b>Food</b></TableCell>
                      <TableCell>Water %</TableCell>
                      <TableCell>Carbs (g)</TableCell>
                      <TableCell>Protein (g)</TableCell>
                      <TableCell>Fat (g)</TableCell>
                      <TableCell>Fiber (g)</TableCell>
                      <TableCell>Calories / 100g</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {caloriefoods.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell
                          sx={{
                            position: "sticky",
                            left: 0,
                            background: "#fff",
                            fontWeight: 500
                          }}
                        >
                          {item.name}
                        </TableCell>
                        <TableCell>{item.water}</TableCell>
                        <TableCell>{item.carbs}</TableCell>
                        <TableCell>{item.protein}</TableCell>
                        <TableCell>{item.fat}</TableCell>
                        <TableCell>{item.fiber}</TableCell>
                        <TableCell>{item.calories100g}</TableCell>
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
