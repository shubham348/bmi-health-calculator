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

export default function BodyFatEducation() {
  return (
    <>
      <Card sx={{ borderRadius: 5 }}>
        <Accordion defaultExpanded sx={{ borderRadius: 5 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 4, py: 2 }}>
            <Typography variant="h5" fontWeight={600}>
              Body Fat Education & Health Information
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Stack spacing={4}>

                {/* ================= INTRODUCTION ================= */}
                <Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Body Fat, Overweight, and Obesity
                  </Typography>

                  <Typography color="text.secondary" paragraph>
                    The scientific term for body fat is <b>adipose tissue</b>. Adipose
                    tissue serves a number of important functions. Its primary purpose
                    is to store lipids from which the body creates energy. In addition,
                    it secretes a number of important hormones, and provides the body
                    with cushioning as well as insulation.
                  </Typography>

                  <Typography color="text.secondary" paragraph>
                    Body fat includes <b>essential body fat</b> and <b>storage body fat</b>.
                    Essential body fat is a base level of fat that is found in most parts
                    of the body and is necessary for life and reproductive functions.
                    Essential fat levels typically range from <b>2–5%</b> in men and
                    <b>10–13%</b> in women.
                  </Typography>

                  <Typography color="text.secondary" paragraph>
                    Storage fat accumulates as subcutaneous fat (beneath the skin) or
                    visceral fat (within the abdominal cavity around organs). While some
                    storage fat is healthy, excess amounts can have serious negative
                    health implications.
                  </Typography>

                  <Typography color="text.secondary">
                    Being overweight does not necessarily indicate excess body fat.
                    Body weight includes muscle, bone density, and water content.
                    Highly muscular individuals may be classified as overweight despite
                    having low body fat.
                  </Typography>
                </Box>

                <Divider />

                {/* ================= COMPLICATIONS ================= */}
                <Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Potential Complications of Excess Body Fat
                  </Typography>

                  <Typography color="text.secondary" paragraph>
                    The World Health Organization (WHO) classifies obesity as one of the
                    leading preventable causes of death worldwide. In the U.S., obesity
                    is estimated to contribute to 111,909 to 365,000 deaths per year, and
                    approximately 36.5% of adults are classified as obese according to
                    the Centers for Disease Control and Prevention (CDC).
                  </Typography>

                  <Typography component="ul" color="text.secondary" sx={{ pl: 2 }}>
                    <li>Cardiovascular disease and stroke</li>
                    <li>Type 2 diabetes and insulin resistance</li>
                    <li>Obstructive sleep apnea</li>
                    <li>Certain cancers</li>
                    <li>Reduced quality of life and mental health issues</li>
                  </Typography>

                  <Typography color="text.secondary" paragraph mt={2}>
                    Excess visceral fat disrupts hormone balance and releases cytokines
                    that increase inflammation, LDL cholesterol, insulin resistance,
                    and cardiovascular risk.
                  </Typography>
                </Box>

                <Divider />

                {/* ================= NAVY METHOD ================= */}
                <Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Measuring Body Fat Percentage (U.S. Navy Method)
                  </Typography>

                  <Typography color="text.secondary" paragraph>
                    This calculator uses formulas developed at the Naval Health Research
                    Center by Hodgdon and Beckett (1984). Measurements must be taken
                    carefully for accuracy.
                  </Typography>

                  <Typography component="ul" color="text.secondary" sx={{ pl: 2 }}>
                    <li>Men: waist and neck circumference</li>
                    <li>Women: waist, neck, and hip circumference</li>
                    <li>Measurements should not involve stomach flexing</li>
                  </Typography>

                  <Typography fontWeight={600} mt={2}>
                    SI (Metric) Formulas
                  </Typography>

                  <Typography color="text.secondary" sx={{ fontFamily: "monospace" }}>
                    Men: BFP = (495 / (1.0324 − 0.19077 × log10(waist − neck) + 0.15456 × log10(height))) − 450
                  </Typography>

                  <Typography color="text.secondary" sx={{ fontFamily: "monospace", mt: 1 }}>
                    Women: BFP = (495 / (1.29579 − 0.35004 × log10(waist + hip − neck) + 0.22100 × log10(height))) − 450
                  </Typography>
                </Box>

                <Divider />

                {/* ================= BMI METHOD ================= */}
                <Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    BMI Method for Body Fat Estimation
                  </Typography>

                  <Typography color="text.secondary" paragraph>
                    Body fat percentage can also be estimated using BMI and age. This
                    method is less accurate for athletes and older adults.
                  </Typography>

                  <Typography color="text.secondary" sx={{ fontFamily: "monospace" }}>
                    Men: BFP = 1.20 × BMI + 0.23 × Age − 16.2
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontFamily: "monospace" }}>
                    Women: BFP = 1.20 × BMI + 0.23 × Age − 5.4
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontFamily: "monospace" }}>
                    Boys: BFP = 1.51 × BMI − 0.70 × Age − 2.2
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontFamily: "monospace" }}>
                    Girls: BFP = 1.51 × BMI − 0.70 × Age + 1.4
                  </Typography>
                </Box>

                <Divider />

                {/* ================= ACE TABLE ================= */}
                <Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    American Council on Exercise (ACE) Body Fat Categories
                  </Typography>

                  <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
                    <Table>
                      <TableHead sx={{ backgroundColor: "#f5f7fa" }}>
                        <TableRow>
                          <TableCell><b>Category</b></TableCell>
                          <TableCell><b>Women</b></TableCell>
                          <TableCell><b>Men</b></TableCell>
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
                            <TableCell>{row[0]}</TableCell>
                            <TableCell>{row[1]}</TableCell>
                            <TableCell>{row[2]}</TableCell>
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
      {/* ================= SOURCES ================= */}
      <Card sx={{ borderRadius: 5 ,marginTop:"1rem"}}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h6" fontWeight={600} mb={2}>
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
                <Typography fontWeight={600}>
                  WHO — Obesity & Health
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
                <Typography fontWeight={600}>
                  CDC — Body Fat & Obesity Basics
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
                <Typography fontWeight={600}>
                  ACE — Body Fat Categories
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
                <Typography fontWeight={600}>
                  U.S. Navy — Body Fat Methodology
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
