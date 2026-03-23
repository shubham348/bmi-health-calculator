import {
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Link
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { doodleCard } from "../../utils/style";

export default function BodyFatEducation() {
  return (
    <>
      <Card sx={{ borderRadius: 5,...doodleCard }}>
        <Accordion defaultExpanded sx={{ borderRadius: 5 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 4, py: 2 }}>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
            >
              Body Fat Education & Health Information
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <CardContent sx={{ p: { xs: 2, md: 5 } }}>
              <Stack spacing={{ xs: 3, md: 4 }}>

                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    gutterBottom
                    sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                  >
                    Body Fat, Overweight, and Obesity
                  </Typography>

                  <Typography color="text.secondary" paragraph sx={{ fontSize: { xs: "0.8rem", md: "0.95rem" } }}>
                    The scientific term for body fat is <b>adipose tissue</b>. Adipose
                    tissue serves a number of important functions. Its primary purpose
                    is to store lipids from which the body creates energy. In addition,
                    it secretes a number of important hormones, and provides the body
                    with cushioning as well as insulation.
                  </Typography>

                  <Typography color="text.secondary" paragraph sx={{ fontSize: { xs: "0.8rem", md: "0.95rem" } }}>
                    Body fat includes <b>essential body fat</b> and <b>storage body fat</b>.
                    Essential body fat is a base level of fat that is found in most parts
                    of the body and is necessary for life and reproductive functions.
                    Essential fat levels typically range from <b>2–5%</b> in men
                    and  <b>10–13%</b> in women.
                  </Typography>

                  <Typography color="text.secondary" paragraph sx={{ fontSize: { xs: "0.8rem", md: "0.95rem" } }}>
                    Storage fat accumulates as subcutaneous fat (beneath the skin) or
                    visceral fat (within the abdominal cavity around organs). While some
                    storage fat is healthy, excess amounts can have serious negative
                    health implications.
                  </Typography>

                  <Typography color="text.secondary" sx={{ fontSize: { xs: "0.8rem", md: "0.95rem" } }}>
                    Being overweight does not necessarily indicate excess body fat.
                    Body weight includes muscle, bone density, and water content.
                    Highly muscular individuals may be classified as overweight despite
                    having low body fat.
                  </Typography>
                </Box>

                <Divider />

                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    gutterBottom
                    sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                  >
                    Potential Complications of Excess Body Fat
                  </Typography>

                  <Typography color="text.secondary" paragraph sx={{ fontSize: { xs: "0.8rem", md: "0.95rem" } }}>
                    The World Health Organization (WHO) classifies obesity as one of the
                    leading preventable causes of death worldwide. In the U.S., obesity
                    is estimated to contribute to 111,909 to 365,000 deaths per year, and
                    approximately 36.5% of adults are classified as obese according to
                    the Centers for Disease Control and Prevention (CDC).
                  </Typography>

                  <Typography component="ul" color="text.secondary" sx={{ pl: 2, fontSize: { xs: "0.8rem", md: "0.95rem" } }}>
                    <li>Cardiovascular disease and stroke</li>
                    <li>Type 2 diabetes and insulin resistance</li>
                    <li>Obstructive sleep apnea</li>
                    <li>Certain cancers</li>
                    <li>Reduced quality of life and mental health issues</li>
                  </Typography>

                  <Typography color="text.secondary" paragraph mt={2} sx={{ fontSize: { xs: "0.8rem", md: "0.95rem" } }}>
                    Excess visceral fat disrupts hormone balance and releases cytokines
                    that increase inflammation, LDL cholesterol, insulin resistance,
                    and cardiovascular risk.
                  </Typography>
                </Box>

                <Divider />

                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    gutterBottom
                    sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                  >
                    Measuring Body Fat Percentage (U.S. Navy Method)
                  </Typography>

                  <Typography color="text.secondary" paragraph sx={{ fontSize: { xs: "0.8rem", md: "0.95rem" } }}>
                    This calculator uses formulas developed at the Naval Health Research
                    Center by Hodgdon and Beckett (1984). Measurements must be taken
                    carefully for accuracy.
                  </Typography>

                  <Typography component="ul" color="text.secondary" sx={{ pl: 2, fontSize: { xs: "0.8rem", md: "0.95rem" } }}>
                    <li>Men: waist and neck circumference</li>
                    <li>Women: waist, neck, and hip circumference</li>
                    <li>Measurements should not involve stomach flexing</li>
                  </Typography>

                  <Typography fontWeight={600} mt={2} sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                    SI (Metric) Formulas
                  </Typography>

                  <Typography color="text.secondary" sx={{ fontFamily: "monospace", fontSize: { xs: "0.7rem", md: "0.9rem" } }}>
                    Men: BFP = (495 / (1.0324 − 0.19077 × log10(waist − neck) + 0.15456 × log10(height))) − 450
                  </Typography>

                  <Typography color="text.secondary" sx={{ fontFamily: "monospace", mt: 1, fontSize: { xs: "0.7rem", md: "0.9rem" } }}>
                    Women: BFP = (495 / (1.29579 − 0.35004 × log10(waist + hip − neck) + 0.22100 × log10(height))) − 450
                  </Typography>
                </Box>

                <Divider />

                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    gutterBottom
                    sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                  >
                    BMI Method for Body Fat Estimation
                  </Typography>

                  <Typography color="text.secondary" paragraph sx={{ fontSize: { xs: "0.8rem", md: "0.95rem" } }}>
                    Body fat percentage can also be estimated using BMI and age. This
                    method is less accurate for athletes and older adults.
                  </Typography>

                  <Typography color="text.secondary" sx={{ fontFamily: "monospace", fontSize: { xs: "0.7rem", md: "0.9rem" } }}>
                    Men: BFP = 1.20 × BMI + 0.23 × Age − 16.2
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontFamily: "monospace", fontSize: { xs: "0.7rem", md: "0.9rem" } }}>
                    Women: BFP = 1.20 × BMI + 0.23 × Age − 5.4
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontFamily: "monospace", fontSize: { xs: "0.7rem", md: "0.9rem" } }}>
                    Boys: BFP = 1.51 × BMI − 0.70 × Age − 2.2
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontFamily: "monospace", fontSize: { xs: "0.7rem", md: "0.9rem" } }}>
                    Girls: BFP = 1.51 × BMI − 0.70 × Age + 1.4
                  </Typography>
                </Box>

                <Divider />

                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    gutterBottom
                    sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                  >
                    American Council on Exercise (ACE) Body Fat Categories
                  </Typography>

                  <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
                    <Table>
                      <TableHead sx={{ backgroundColor: "#f5f7fa" }}>
                        <TableRow>
                          <TableCell sx={{ fontSize: { xs: "0.75rem", md: "0.9rem" } }}><b>Category</b></TableCell>
                          <TableCell sx={{ fontSize: { xs: "0.75rem", md: "0.9rem" } }}><b>Women</b></TableCell>
                          <TableCell sx={{ fontSize: { xs: "0.75rem", md: "0.9rem" } }}><b>Men</b></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {[
                          ["Essential Fat", "10–13%", "2–5%"],
                          ["Athletes", "14–20%", "6–13%"],
                          ["Fitness", "21–24%", "14–17%"],
                          ["Average", "25–31%", "18–24%"],
                          ["Obese", "32%+", "25%+"]
                        ].map(row => (
                          <TableRow key={row[0]}>
                            <TableCell sx={{ fontSize: { xs: "0.75rem", md: "0.9rem" } }}>{row[0]}</TableCell>
                            <TableCell sx={{ fontSize: { xs: "0.75rem", md: "0.9rem" } }}>{row[1]}</TableCell>
                            <TableCell sx={{ fontSize: { xs: "0.75rem", md: "0.9rem" } }}>{row[2]}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>

              </Stack>
            </CardContent>
          </AccordionDetails>
        </Accordion>
      </Card>

      <Card sx={{ borderRadius: 5 ,marginTop:"1rem",...doodleCard}}>
        <CardContent sx={{ p: { xs: 2, md: 4 } }}>
          <Typography
            variant="h6"
            fontWeight={600}
            mb={2}
            sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            Learn More from Trusted Sources
          </Typography>

          <Stack spacing={2}>
            <Paper
              component={Link}
              href="https://www.who.int/health-topics/obesity"
              target="_blank"
              underline="none"
              sx={{
                p: 2.5,
                borderRadius: 3,
                border: "1px solid #e5e7eb",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "0.2s",
                "&:hover": {
                  boxShadow: "0 6px 16px rgba(0,0,0,0.08)"
                }
              }}
            >
              <Box>
                <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" }, fontWeight: 600 }} >
                  WHO — Obesity & Health
                </Typography>
                <Typography sx={{ fontSize: { xs: "0.75rem", md: "0.9rem" } }} color="text.secondary">
                  Global obesity data, risks, and prevention guidance
                </Typography>
              </Box>
              <OpenInNewIcon color="primary" />
            </Paper>

            <Paper
              component={Link}
              href="https://www.cdc.gov/obesity/basics/index.html"
              target="_blank"
              underline="none"
              sx={{
                p: 2.5,
                borderRadius: 3,
                border: "1px solid #e5e7eb",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "0.2s",
                "&:hover": {
                  boxShadow: "0 6px 16px rgba(0,0,0,0.08)"
                }
              }}
            >
              <Box>
                <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" }, fontWeight: 600 }}>
                  CDC — Body Fat & Obesity Basics
                </Typography>
                <Typography sx={{ fontSize: { xs: "0.75rem", md: "0.9rem" } }} color="text.secondary">
                  Health impacts, statistics, and clinical guidance
                </Typography>
              </Box>
              <OpenInNewIcon color="primary" />
            </Paper>

            <Paper
              component={Link}
              href="https://www.acefitness.org/education-and-resources/lifestyle/blog/112/what-are-the-ideal-body-fat-percentages/"
              target="_blank"
              underline="none"
              sx={{
                p: 2.5,
                borderRadius: 3,
                border: "1px solid #e5e7eb",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "0.2s",
                "&:hover": {
                  boxShadow: "0 6px 16px rgba(0,0,0,0.08)"
                }
              }}
            >
              <Box>
                <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" }, fontWeight: 600 }}>
                  ACE — Body Fat Categories
                </Typography>
                <Typography sx={{ fontSize: { xs: "0.75rem", md: "0.9rem" } }} color="text.secondary">
                  Official body fat percentage ranges by gender
                </Typography>
              </Box>
              <OpenInNewIcon color="primary" />
            </Paper>

            <Paper
              component={Link}
              href="https://www.med.navy.mil/Naval-Medical-Research-Center/"
              target="_blank"
              underline="none"
              sx={{
                p: 2.5,
                borderRadius: 3,
                border: "1px solid #e5e7eb",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "0.2s",
                "&:hover": {
                  boxShadow: "0 6px 16px rgba(0,0,0,0.08)"
                }
              }}
            >
              <Box>
                <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" }, fontWeight: 600 }}>
                  U.S. Navy — Body Fat Methodology
                </Typography>
                <Typography sx={{ fontSize: { xs: "0.75rem", md: "0.9rem" } }} color="text.secondary">
                  Research behind the Navy body fat equations
                </Typography>
              </Box>
              <OpenInNewIcon color="primary" />
            </Paper>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}