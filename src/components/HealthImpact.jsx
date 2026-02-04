import { Card, CardContent, Typography, List, ListItem } from "@mui/material";
import { healthImpact } from "../utils/healthImpact";

export default function HealthImpact({ category }) {
  return (
    <Card sx={{ borderRadius: 5 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h6" mb={2}>
          Why this matters
        </Typography>

        <List>
          {healthImpact[category].map((item, i) => (
            <ListItem key={i} sx={{ display: "list-item" }}>
              {item}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
