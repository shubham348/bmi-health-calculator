import { Card, CardContent, Typography, Stack } from "@mui/material";

export default function CalorieResult({ maintenance, loss, gain }) {
  return (
    <Card sx={{ borderRadius: 5 }}>
      <CardContent sx={{ p: { xs: 3, md: 5 } }}>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Your Daily Calorie Needs
        </Typography>

        <Stack spacing={1.5}>
          <Typography variant="h4" fontWeight={700}>
            {maintenance} kcal/day
          </Typography>

          <Typography color="text.secondary">
            Weight loss: ~{loss} kcal/day
          </Typography>

          <Typography color="text.secondary">
            Weight gain: ~{gain} kcal/day
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
