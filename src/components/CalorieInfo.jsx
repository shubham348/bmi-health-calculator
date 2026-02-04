import { Card, CardContent, Typography } from "@mui/material";

export default function CalorieInfo({ calories, protein }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Daily Nutrition Estimate</Typography>
        <Typography>Calories: <b>{calories} kcal/day</b></Typography>
        <Typography>Protein: <b>{protein} g/day</b></Typography>
      </CardContent>
    </Card>
  );
}
