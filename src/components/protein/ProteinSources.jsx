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
  Box,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { proteinSources } from "../../utils/proteinSources";
import { doodleCard } from "../../utils/style";

export default function ProteinSources() {
  const [diet, setDiet] = useState("veg");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const isHighProtein = (protein) => protein >= 20;

  return (
    <Card sx={{ borderRadius: 5, ...doodleCard }}>
      <Box>
        <Accordion
          sx={{
            borderRadius: 5,
            boxShadow: "none",
            "&::before": { display: "none" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 4, py: 2 }}>
            <Typography variant="h5" fontWeight={600}>
              Daily Protein Sources (Indian Diet)
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Card elevation={0}>
              <CardContent sx={{ p: { xs: 2, md: 3 } }}>

                {/* TOGGLE */}
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

                {/* 📱 MOBILE */}
                {isMobile ? (
                  <Box
                    sx={{
                      maxHeight: { xs: 380, md: 500 }, // 🔥 same as table
                      overflowY: "auto",
                      pr: 1, // space for scrollbar
                    }}
                  >
                    <Stack spacing={2}>
                      {proteinSources[diet].map((item) => (
                        <Box
                          key={item.name}
                          sx={{
                            border: "2px solid #1e2022",
                            borderRadius: "12px",
                            p: 2,
                            background: "#fff",
                          }}
                        >
                          {/* NAME + CHIP INLINE */}
                          <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                            <Typography fontWeight={700}>
                              {item.name}
                            </Typography>

                            {isHighProtein(item.protein) && (
                              <Chip
                                label="High Protein"
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
                            <b>Protein:</b> {item.protein} g
                          </Typography>

                          <Typography variant="body2">
                            <b>Quantity:</b> {item.unit}
                          </Typography>

                          <Typography variant="body2">
                            <b>Calories:</b> {item.calories}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                ) : (
                  /* 💻 DESKTOP */
                  <Box
                    sx={{
                      overflowX: "auto",
                      borderRadius: 3,
                      border: "1px solid #eee",
                    }}
                  >
                    <Table stickyHeader size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell><b>Food</b></TableCell>
                          <TableCell>Protein (g)</TableCell>
                          <TableCell>Quantity</TableCell>
                          <TableCell>Calories</TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {proteinSources[diet].map((item) => (
                          <TableRow key={item.name}>
                            <TableCell>
                              <Stack direction="row" spacing={1} alignItems="center">
                                <Typography fontWeight={600}>
                                  {item.name}
                                </Typography>

                                {isHighProtein(item.protein) && (
                                  <Chip
                                    label="High"
                                    size="small"
                                    sx={{
                                      height: 20,
                                      fontSize: "10px",
                                      background: "#e8f5e9",
                                      color: "#2e7d32",
                                    }}
                                  />
                                )}
                              </Stack>
                            </TableCell>

                            <TableCell>{item.protein}</TableCell>
                            <TableCell>{item.unit}</TableCell>
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
      </Box>
    </Card>
  );
}