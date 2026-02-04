import { Card, CardContent, Typography, Box } from "@mui/material";

export default function BmiFormula() {
  return (
    <Card sx={{ borderRadius: 5 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          BMI Formula
        </Typography>

        <Typography color="text.secondary" mb={3}>
          Below are the equations used to calculate Body Mass Index (BMI) using
          both the International System of Units (SI) and the US Customary System
          (USC).
        </Typography>

        {/* USC */}
        <Box mb={3}>
          <Typography fontWeight={600}>US Customary Units (USC)</Typography>
          <Typography mt={1}>
            BMI = 703 × ( weight (lb) ÷ height² (in) )
          </Typography>
          <Typography color="text.secondary" mt={1}>
            Example: 703 × (160 ÷ 70²) = <b>23.0</b>
          </Typography>
        </Box>

        {/* SI */}
        <Box>
          <Typography fontWeight={600}>
            International System of Units (SI / Metric)
          </Typography>
          <Typography mt={1}>
            BMI = weight (kg) ÷ height² (m)
          </Typography>
          <Typography color="text.secondary" mt={1}>
            Example: 72.57 ÷ 1.778² = <b>23.0</b>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
