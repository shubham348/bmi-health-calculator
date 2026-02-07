import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function ProteinResult({ protein }) {
  return (
    <Card sx={{ borderRadius: 5 }}>
      <CardContent sx={{ p: { xs: 3, md: 5 } }}>
        <Typography variant="h6" fontWeight={600} mb={1}>
          Your Daily Protein Requirement
        </Typography>

        <Typography variant="h4" fontWeight={700} mb={3}>
          {protein} g/day
        </Typography>
      </CardContent>
    </Card>
  );
}
