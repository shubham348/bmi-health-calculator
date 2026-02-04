import { useState } from "react";
import {
  Stack,
  Typography,
  List,
  ListItem,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Button
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function BmiEducation() {
  const [activeChart, setActiveChart] = useState(null);
  // activeChart: "boys" | "girls" | null


  return (
    <Accordion
      sx={{
        borderRadius: 5,
        border: "1px solid #e5e7eb",
        "&:before": { display: "none" }
      }}
    >
      {/* ===== HEADER ===== */}
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ px: 4, py: 2 }}
      >
        <Typography variant="h5" fontWeight={700}>
          BMI Education & Health Information
        </Typography>
      </AccordionSummary>

      {/* ===== CONTENT ===== */}
      <AccordionDetails sx={{ px: { xs: 3, md: 5 }, pb: 4 }}>

        {/* ================= INTRODUCTION ================= */}
        <Typography variant="h6" fontWeight={700} gutterBottom>
          Introduction
        </Typography>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }} paragraph>
          Body Mass Index (BMI) is a measurement of a person’s leanness or
          corpulence based on their height and weight, and is intended to
          quantify overall tissue mass. It is widely used as a general indicator
          of whether a person has a healthy body weight for their height.
        </Typography>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }} paragraph>
          The BMI value is used to categorize individuals as underweight, normal
          weight, overweight, or obese depending on the range in which the value
          falls. These ranges may vary based on age and region and can be further
          divided into subcategories such as severely underweight or very
          severely obese.
        </Typography>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }}>
          While BMI is not a perfect measure of healthy body weight, it is a
          useful screening tool for identifying whether further medical
          evaluation or lifestyle changes may be required.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* ================= BMI TABLE FOR ADULTS ================= */}
        <Typography variant="h6" fontWeight={700} gutterBottom>
          BMI Table for Adults
        </Typography>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }} paragraph>
          This table shows the World Health Organization (WHO) recommended BMI
          classifications for adults. It applies to both men and women aged 20 years or
          older.
        </Typography>

        <Table
          sx={{
            mt: 2,
            border: "1px solid #e5e7eb",
            borderRadius: 2
          }}
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f3f4f6" }}>
              <TableCell sx={{ fontWeight: 700 }}>
                Classification
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }}>
                BMI Range (kg/m²)
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {[
              ["Severe Thinness", "< 16"],
              ["Moderate Thinness", "16 – 17"],
              ["Mild Thinness", "17 – 18.5"],
              ["Normal", "18.5 – 25"],
              ["Overweight", "25 – 30"],
              ["Obese Class I", "30 – 35"],
              ["Obese Class II", "35 – 40"],
              ["Obese Class III", "> 40"]
            ].map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row[0]}</TableCell>
                <TableCell>{row[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Divider sx={{ my: 4 }} />
        {/* ================= BMI CHART FOR ADULTS ================= */}
        <Typography variant="h6" fontWeight={700} gutterBottom>
          BMI Chart for Adults
        </Typography>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }} paragraph>
          This chart illustrates Body Mass Index (BMI) categories based on World Health
          Organization (WHO) data. The colors represent the major BMI classifications,
          while the contour lines represent integer BMI values for different
          height–weight combinations.
        </Typography>

        <Box
          component="img"
          src="https://d26tpo4cm8sb6k.cloudfront.net/img/bmi-chart.png"
          alt="BMI chart for adults"
          sx={{
            width: "100%",
            maxWidth: 700,
            display: "block",
            mx: "auto",
            my: 3,
            borderRadius: 2,
            border: "1px solid #e5e7eb"
          }}
        />
        <Divider sx={{ my: 4 }} />
        
        {/* ================= BMI TABLE FOR CHILDREN & TEENS ================= */}
        <Typography variant="h6" fontWeight={700} gutterBottom>
          BMI Table for Children and Teens (Age 2–20)
        </Typography>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }} paragraph>
          The Centers for Disease Control and Prevention (CDC) recommends BMI
          categorization for children and teens between the ages of 2 and 20 years.
          Unlike adults, BMI for children and adolescents is interpreted using
          age- and sex-specific percentiles.
        </Typography>

        <Table
          sx={{
            mt: 2,
            border: "1px solid #e5e7eb",
            borderRadius: 2
          }}
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f3f4f6" }}>
              <TableCell sx={{ fontWeight: 700 }}>
                Category
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }}>
                Percentile Range
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {[
              ["Underweight", "< 5%"],
              ["Healthy weight", "5% – 85%"],
              ["At risk of overweight", "85% – 95%"],
              ["Overweight", "> 95%"]
            ].map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row[0]}</TableCell>
                <TableCell>{row[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Divider sx={{ my: 4 }} />

        {/* ================= BMI CHART FOR CHILDREN & TEENS ================= */}
        <Typography variant="h6" fontWeight={700} gutterBottom>
          BMI Chart for Children and Teens (Age 2–20)
        </Typography>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }} paragraph>
          The Centers for Disease Control and Prevention (CDC) provides BMI-for-age
          percentile growth charts for children and adolescents. These charts help
          assess body mass index relative to age and sex.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          mb={2}
        >
          <Button
            variant="outlined"
            startIcon={<VisibilityIcon />}
            onClick={() =>
              setActiveChart(activeChart === "boys" ? null : "boys")
            }
            sx={{
              textTransform: "none",
              borderRadius: 3,
              fontWeight: 600
            }}
          >
            {activeChart === "boys" ? "Hide" : "Preview"} Boys Chart
          </Button>

          <Button
            variant="outlined"
            startIcon={<VisibilityIcon />}
            onClick={() =>
              setActiveChart(activeChart === "girls" ? null : "girls")
            }
            sx={{
              textTransform: "none",
              borderRadius: 3,
              fontWeight: 600
            }}
          >
            {activeChart === "girls" ? "Hide" : "Preview"} Girls Chart
          </Button>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          mb={3}
        >
          <Button
            variant="text"
            startIcon={<DownloadIcon />}
            href="https://www.calculator.net/pdf/bmi-chart-boys.pdf"
            target="_blank"
            sx={{ textTransform: "none", fontWeight: 600 }}
          >
            Download Boys Chart (PDF)
          </Button>

          <Button
            variant="text"
            startIcon={<DownloadIcon />}
            href="https://www.calculator.net/pdf/bmi-chart-girls.pdf"
            target="_blank"
            sx={{ textTransform: "none", fontWeight: 600 }}
          >
            Download Girls Chart (PDF)
          </Button>
        </Stack>
        {activeChart && (
          <Box
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 3,
              overflow: "hidden",
              height: { xs: 360, md: 500 },
              mb: 3
            }}
          >
            <iframe
              title={
                activeChart === "boys"
                  ? "BMI Chart for Boys"
                  : "BMI Chart for Girls"
              }
              src={
                activeChart === "boys"
                  ? "https://www.calculator.net/pdf/bmi-chart-boys.pdf"
                  : "https://www.calculator.net/pdf/bmi-chart-girls.pdf"
              }
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </Box>
        )}

        <Divider sx={{ my: 4 }} />

        {/* ================= RISK ASSESSMENT ================= */}
        <Typography variant="h6" fontWeight={700} gutterBottom>
          Risk Assessment
        </Typography>

        <Typography fontWeight={600} sx={{ mt: 2 }}>
          Risks Associated with Being Overweight
        </Typography>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }} paragraph>
          Being overweight increases the risk of a number of serious diseases and
          health conditions. According to the Centers for Disease Control and
          Prevention (CDC), these include:
        </Typography>

        <List sx={{
          color: "#374151", pl: 3, "& .MuiListItem-root": {
            display: "list-item",
            listStyleType: "disc",
            py: 0.5,
            color: "#374151",
            lineHeight: 1.6
          }
        }}>
          {[
            "High blood pressure",
            "Higher LDL (“bad”) cholesterol, lower HDL (“good”) cholesterol, and high triglycerides",
            "Type II diabetes",
            "Coronary heart disease",
            "Stroke",
            "Gallbladder disease",
            "Osteoarthritis due to joint cartilage breakdown",
            "Sleep apnea and breathing problems",
            "Certain cancers (endometrial, breast, colon, kidney, gallbladder, liver)",
            "Reduced quality of life",
            "Mental health conditions such as depression and anxiety",
            "Body pain and difficulty with physical functions",
            "Increased overall risk of mortality compared to a healthy BMI"
          ].map((item, i) => (
            <ListItem key={i} sx={{ display: "list-item", py: 0.5 }}>
              {item}
            </ListItem>
          ))}
        </List>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }} paragraph>
          Maintaining a BMI below 25 kg/m² is generally recommended, but
          individuals should consult a healthcare professional for personalized
          advice.
        </Typography>

        <Typography fontWeight={600} sx={{ mt: 3 }}>
          Risks Associated with Being Underweight
        </Typography>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }} paragraph>
          Being underweight also carries health risks, including:
        </Typography>

        <List sx={{
          color: "#374151", pl: 3, "& .MuiListItem-root": {
            display: "list-item",
            listStyleType: "disc",
            py: 0.5,
            color: "#374151",
            lineHeight: 1.6
          }
        }}>
          {[
            "Malnutrition, vitamin deficiencies, and anemia",
            "Osteoporosis and increased fracture risk",
            "Decreased immune function",
            "Growth and development issues, especially in children and teenagers",
            "Hormonal and reproductive issues in women, including increased miscarriage risk",
            "Potential surgical complications",
            "Increased overall risk of mortality compared to a healthy BMI"
          ].map((item, i) => (
            <ListItem key={i} sx={{ display: "list-item", py: 0.5 }}>
              {item}
            </ListItem>
          ))}
        </List>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }}>
          In some cases, being underweight may indicate an underlying medical
          condition such as anorexia nervosa. Medical evaluation is recommended
          when the cause is unclear.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* ================= BMI FORMULA (SI UNITS) ================= */}
        <Typography variant="h6" fontWeight={700} gutterBottom>
          BMI Formula (Metric Units)
        </Typography>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }} paragraph>
          Body Mass Index (BMI) is calculated using a person’s weight and height. Below
          is the formula used in the International System of Units (SI), which uses
          kilograms and meters.
        </Typography>

        <Box
          sx={{
            my: 2,
            p: 2.5,
            backgroundColor: "#f9fafb",
            borderRadius: 2,
            border: "1px solid #e5e7eb"
          }}
        >
          <Typography fontSize={18} fontWeight={600} align="center">
            BMI = weight (kg) ÷ height² (m)
          </Typography>
        </Box>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }} paragraph>
          <b>Example:</b> For a person who weighs 72.57 kg and is 1.778 m tall:
        </Typography>

        <Box
          sx={{
            p: 2,
            backgroundColor: "#ffffff",
            borderRadius: 2,
            border: "1px dashed #d1d5db"
          }}
        >
          <Typography>
            BMI = 72.57 ÷ (1.778 × 1.778)
          </Typography>
          <Typography fontWeight={600} mt={1}>
            BMI = 23.0
          </Typography>
        </Box>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }} mt={2}>
          This is the same formula used by this calculator to compute your BMI.
        </Typography>

        <Divider sx={{ my: 4 }} />


        {/* ================= BMI PRIME ================= */}
        <Typography variant="h6" fontWeight={700} gutterBottom>
          BMI Prime
        </Typography>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }} paragraph>
          BMI Prime is the ratio of a person’s measured BMI to the upper limit of BMI
          that is considered “normal” by institutions such as the World Health
          Organization (WHO) and the Centers for Disease Control and Prevention (CDC).
          Although this upper limit may differ in some regions, such as parts of Asia,
          it is generally defined as 25 kg/m².
        </Typography>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }} paragraph>
          Because BMI Prime is a ratio of two BMI values, it is a dimensionless number.
          It allows for a quick assessment of how much a person’s BMI differs from the
          upper boundary of the healthy range and enables comparisons across populations
          with different BMI standards.
        </Typography>

        {/* FORMULA */}
        <Typography fontWeight={600} mt={2}>
          BMI Prime Formula
        </Typography>

        <Box
          sx={{
            my: 2,
            p: 2,
            backgroundColor: "#f9fafb",
            borderRadius: 2,
            border: "1px solid #e5e7eb",
            textAlign: "center"
          }}
        >
          <Typography fontSize={18} fontWeight={600}>
            BMI Prime = BMI ÷ 25
          </Typography>
        </Box>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }} paragraph>
          A BMI Prime value below 0.74 is classified as underweight. Values between 0.74
          and 1 are considered normal. Values greater than 1 indicate overweight, while
          values above 1.2 indicate obesity.
        </Typography>

        {/* TABLE */}
        <Typography fontWeight={600} mt={3} gutterBottom>
          BMI Prime Classification Table
        </Typography>

        <Table
          sx={{
            border: "1px solid #e5e7eb",
            borderRadius: 2
          }}
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f3f4f6" }}>
              <TableCell sx={{ fontWeight: 700 }}>
                Classification
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }}>
                BMI
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }}>
                BMI Prime
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {[
              ["Severe Thinness", "< 16", "< 0.64"],
              ["Moderate Thinness", "16 – 17", "0.64 – 0.68"],
              ["Mild Thinness", "17 – 18.5", "0.68 – 0.74"],
              ["Normal", "18.5 – 25", "0.74 – 1"],
              ["Overweight", "25 – 30", "1 – 1.2"],
              ["Obese Class I", "30 – 35", "1.2 – 1.4"],
              ["Obese Class II", "35 – 40", "1.4 – 1.6"],
              ["Obese Class III", "> 40", "> 1.6"]
            ].map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row[0]}</TableCell>
                <TableCell>{row[1]}</TableCell>
                <TableCell>{row[2]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Divider sx={{ my: 4 }} />


        {/* ================= LIMITATIONS ================= */}
        <Typography variant="h6" fontWeight={700} gutterBottom>
          Limitations of BMI
        </Typography>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }} paragraph>
          BMI is a widely used screening tool, but it does not account for body
          composition such as muscle mass, bone density, or fat distribution.
          Because of this, BMI should not be used as the sole indicator of
          overall health.
        </Typography>

        <Typography fontWeight={600} sx={{ mt: 2 }}>
          In Adults
        </Typography>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }} paragraph>
          BMI reflects excess body weight rather than excess body fat and is
          influenced by factors such as age, sex, ethnicity, activity level, and
          muscle mass. Older adults may have higher body fat levels at the same
          BMI, while muscular individuals and athletes may appear overweight
          despite being healthy.
        </Typography>

        <Typography fontWeight={600} sx={{ mt: 2 }}>
          In Children and Adolescents
        </Typography>

        <Typography sx={{ color: "#374151", lineHeight: 1.7 }}>
          Growth patterns, height, and sexual maturation affect BMI
          interpretation in children. BMI is more reliable for identifying
          obesity than overweight, where values may reflect fat-free mass rather
          than unhealthy fat levels. Despite these limitations, BMI is a useful
          indicator for approximately 90–95% of the population when used
          alongside other assessments.
        </Typography>

      </AccordionDetails>
    </Accordion>
  );
}
