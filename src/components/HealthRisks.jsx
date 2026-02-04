import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Divider
} from "@mui/material";

export default function HealthRisks() {
  return (
    <Card sx={{ borderRadius: 5 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          Health Risks Associated with BMI
        </Typography>

        {/* OVERWEIGHT */}
        <Typography fontWeight={600} mt={2}>
          Risks Associated with Being Overweight
        </Typography>

        <Typography color="text.secondary" mt={1}>
          Being overweight increases the risk of a number of serious diseases and
          health conditions, according to the Centers for Disease Control and
          Prevention (CDC):
        </Typography>

        <List>
          <ListItem sx={{ display: "list-item" }}>High blood pressure</ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Higher LDL (“bad”) cholesterol, lower HDL (“good”) cholesterol, and
            high triglycerides
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>Type II diabetes</ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Coronary heart disease
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>Stroke</ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Gallbladder disease
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Osteoarthritis (joint damage)
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Sleep apnea and breathing problems
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Certain cancers (endometrial, breast, colon, kidney, gallbladder,
            liver)
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Reduced quality of life
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Mental health conditions such as depression and anxiety
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Body pain and reduced physical function
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Increased overall mortality risk
          </ListItem>
        </List>

        <Typography color="text.secondary" mt={2}>
          Maintaining a BMI below 25 kg/m² is generally recommended, but
          individuals should consult a healthcare professional for personalized
          guidance.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* UNDERWEIGHT */}
        <Typography fontWeight={600}>
          Risks Associated with Being Underweight
        </Typography>

        <List>
          <ListItem sx={{ display: "list-item" }}>
            Malnutrition, vitamin deficiencies, and anemia
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Osteoporosis and increased fracture risk
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Decreased immune function
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Growth and development issues in children and adolescents
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Reproductive and hormonal issues in women, including miscarriage
            risk
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Surgical complications
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Increased overall mortality risk
          </ListItem>
        </List>

        <Typography color="text.secondary" mt={2}>
          In some cases, being underweight may indicate an underlying medical
          condition such as anorexia nervosa. Medical consultation is advised
          when the cause is unclear.
        </Typography>
      </CardContent>
    </Card>
  );
}
