import { Card, CardContent, Typography, Stack } from "@mui/material";

export default function BodyFatResult({
  bodyFatPercent,
  category,
  fatMass,
  leanMass
}) {
  return (
    <Card sx={{ borderRadius: 5 }}>
      <CardContent sx={{ p: { xs: 3, md: 5 } }}>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Your Body Fat Result
        </Typography>

        <Stack spacing={1.5}>
          <Typography variant="h4" fontWeight={700}>
            {bodyFatPercent}%
          </Typography>

          <Typography color="primary" fontWeight={600}>
            {category}
          </Typography>

          <Typography color="text.secondary">
            Fat Mass: <b>{fatMass} kg</b>
          </Typography>

          <Typography color="text.secondary">
            Lean Mass: <b>{leanMass} kg</b>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
