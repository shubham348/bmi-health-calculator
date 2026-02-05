import { Card, CardContent, Typography, Divider, Stack } from "@mui/material";
import { bmiPrime, healthyWeightRange } from "../../utils/bmi";

export default function BmiResult({ bmi, category, height }) {
  const prime = bmiPrime(bmi);
  const range = healthyWeightRange(height);

  return (
    <Card
      sx={{
        borderRadius: 5,
        background: "linear-gradient(135deg, #ecfdf5, #ffffff)",
        border: "1px solid #e5e7eb"
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          Your Result
        </Typography>

        {/* BMI */}
        <Typography fontSize={36} fontWeight={700}>
          BMI: {bmi}
        </Typography>

        <Typography color="primary" fontWeight={600}>
          {category}
        </Typography>

        <Typography color="text.secondary" mt={1}>
          You are in a healthy weight range.
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* HEALTHY WEIGHT RANGE */}
        <Stack spacing={0.5}>
          <Typography fontWeight={600}>
            Healthy Weight Range
          </Typography>
          <Typography fontSize={18}>
            {range.min} kg – {range.max} kg
          </Typography>
          <Typography color="text.secondary">
            Based on your height.
          </Typography>
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* BMI PRIME */}
        <Stack spacing={0.5}>
          <Typography fontWeight={600}>
            BMI Prime
          </Typography>
          <Typography fontSize={18}>
            {prime}
          </Typography>
          <Typography color="text.secondary">
            Compares your BMI to the upper healthy limit (25).
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
