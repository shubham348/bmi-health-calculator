import {
  Card,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CardContent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { fiberFoods } from "../../utils/proteinSources";

export default function FiberFoods() {
  return (
    <>
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
              Fiber Sources & Cost (Detailed Nutrition Table)
            </Typography>
          </AccordionSummary>

          {/* CONTENT */}
          <AccordionDetails>
            <Card elevation={0}>
              <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                <Typography color="text.secondary" mb={3}>
                  Detailed nutrition breakdown Fiber rich food  per 100g
                </Typography>

                {/* SCROLL CONTAINER */}
                <Box
                  sx={{
                    overflow: "auto",
                    maxHeight: { xs: 380, md: 500 },
                    borderRadius: 3,
                    border: "1px solid #eee"
                  }}
                >
                  <Table
                    stickyHeader size="small"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{
                          position: "sticky",
                          left: 0,
                          background: "#fff",
                          fontWeight: 500,
                          zIndex: 3
                        }}><b>Food</b></TableCell>
                        <TableCell>Qty (g)</TableCell>
                        <TableCell>Protein (g)</TableCell>
                        <TableCell>Carbs (g)</TableCell>
                        <TableCell>Fat (g)</TableCell>
                        <TableCell>Fiber (g)</TableCell>
                        <TableCell>Calories</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {fiberFoods.map((item, index) => (
                        <TableRow key={index} hover>
                          <TableCell sx={{
                            position: "sticky",
                            left: 0,
                            background: "#fff",
                            fontWeight: 500
                          }}>
                            <b>
                              {item.food}
                            </b>
                          </TableCell>
                          <TableCell>{item.qty}</TableCell>
                          <TableCell>{item.protein}</TableCell>
                          <TableCell>{item.carbs}</TableCell>
                          <TableCell>{item.fat}</TableCell>
                          <TableCell>{item.fiber}</TableCell>
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
    </>

  );
}
