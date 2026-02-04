import { Card, CardContent, Typography } from "@mui/material";

export default function Disclaimers() {
  return (
    <Card sx={{ borderRadius: 5 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h6" mb={1}>
          Important Notes
        </Typography>

        <Typography color="text.secondary">
          BMI does not account for muscle mass, bone density, or fat distribution.
          Athletes and muscular individuals may have higher BMI without health risk.
        </Typography>

        <Typography color="text.secondary" mt={2}>
          For children and teens, BMI interpretation differs and should be based on age-specific percentiles.
        </Typography>
      </CardContent>
    </Card>
  );
}
