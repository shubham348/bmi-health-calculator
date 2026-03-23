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
  Stack,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { fiberFoods } from "../../utils/proteinSources";
import { doodleCard } from "../../utils/style";

export default function FiberFoods() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const isHighFiber = (fiber) => fiber >= 8; // tweak if needed

  return (
    <Card sx={{ borderRadius: 5, ...doodleCard }}>
      <Accordion
        sx={{
          borderRadius: 5,
          boxShadow: "none",
          "&::before": { display: "none" },
        }}
      >
        {/* HEADER */}
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 4, py: 2 }}>
          <Typography variant="h5" fontWeight={600} sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
            Fiber Sources & Cost (Detailed Nutrition Table)
          </Typography>
        </AccordionSummary>

        {/* CONTENT */}
        <AccordionDetails>
          <Card elevation={0}>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography color="text.secondary" mb={3} sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
                Detailed nutrition breakdown fiber-rich food per 100g
              </Typography>

              {/* 📱 MOBILE VIEW */}
              {isMobile ? (
                <Box
                  sx={{
                    maxHeight: { xs: 380, md: 500 },
                    overflowY: "auto",
                    pr: 1,
                  }}
                >
                  <Stack spacing={2}>
                    {fiberFoods.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          border: "2px solid #1e2022",
                          borderRadius: "12px",
                          p: 2,
                          background: "#fff",
                          width: "100%",
                          boxSizing: "border-box",
                        }}
                      >
                        {/* NAME + CHIP */}
                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                          flexWrap="wrap"
                        >
                          <Typography fontWeight={700}>
                            {item.food}
                          </Typography>

                          {isHighFiber(item.fiber) && (
                            <Chip
                              label="High Fiber"
                              size="small"
                              sx={{
                                height: 22,
                                fontSize: "11px",
                                background: "#e8f5e9",
                                color: "#2e7d32",
                                fontWeight: 600,
                              }}
                            />
                          )}
                        </Stack>

                        {/* DETAILS */}
                        <Typography variant="body2" mt={1}>
                          <b>Qty:</b> {item.qty} g
                        </Typography>

                        <Typography variant="body2">
                          <b>Fiber:</b> {item.fiber} g
                        </Typography>

                        <Typography variant="body2">
                          <b>Protein:</b> {item.protein} g
                        </Typography>

                        <Typography variant="body2">
                          <b>Carbs:</b> {item.carbs} g
                        </Typography>

                        <Typography variant="body2">
                          <b>Fat:</b> {item.fat} g
                        </Typography>

                        <Typography variant="body2">
                          <b>Calories:</b> {item.calories}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              ) : (
                /* 💻 DESKTOP TABLE */
                <Box
                  sx={{
                    overflow: "auto",
                    maxHeight: { xs: 380, md: 500 },
                    borderRadius: 3,
                    border: "1px solid #eee",
                  }}
                >
                  <Table stickyHeader size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            position: "sticky",
                            left: 0,
                            background: "#fff",
                            fontWeight: 500,
                            zIndex: 3,
                          }}
                        >
                          <b>Food</b>
                        </TableCell>
                        <TableCell>Qty (g)</TableCell>
                        <TableCell>Fiber (g)</TableCell>
                        <TableCell>Protein (g)</TableCell>
                        <TableCell>Carbs (g)</TableCell>
                        <TableCell>Fat (g)</TableCell>
                        <TableCell>Calories</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {fiberFoods.map((item, index) => (
                        <TableRow key={index} hover>
                          <TableCell
                            sx={{
                              position: "sticky",
                              left: 0,
                              background: "#fff",
                              fontWeight: 500,
                            }}
                          >
                            <b>{item.food}</b>
                          </TableCell>
                          <TableCell>{item.qty}</TableCell>
                          <TableCell>{item.fiber}</TableCell>
                          <TableCell>{item.protein}</TableCell>
                          <TableCell>{item.carbs}</TableCell>
                          <TableCell>{item.fat}</TableCell>
                          <TableCell>{item.calories}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              )}
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}