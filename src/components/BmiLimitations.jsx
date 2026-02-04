import { Card, CardContent, Typography } from "@mui/material";

export default function BmiLimitations() {
  return (
    <Card sx={{ borderRadius: 5 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          Limitations of BMI
        </Typography>

        <Typography color="text.secondary" mb={2}>
          Although BMI is widely used and helpful as a screening tool, it is only
          an estimate and does not directly measure body fat or body composition.
          It should be considered alongside other clinical assessments.
        </Typography>

        <Typography fontWeight={600} mt={2}>
          In Adults
        </Typography>

        <Typography color="text.secondary" mt={1}>
          BMI reflects excess body weight rather than excess body fat and is
          influenced by age, sex, ethnicity, muscle mass, bone density, and
          activity level.
        </Typography>

        <Typography color="text.secondary" mt={1}>
          For example, older adults may have higher body fat at the same BMI as
          younger individuals. Women generally carry more body fat than men at
          the same BMI. Muscular individuals and athletes may have elevated BMI
          values despite having healthy body composition.
        </Typography>

        <Typography fontWeight={600} mt={3}>
          In Children and Adolescents
        </Typography>

        <Typography color="text.secondary" mt={1}>
          BMI interpretation in children is further affected by growth patterns,
          height, and sexual maturation. BMI is more reliable for identifying
          obesity than overweight in children.
        </Typography>

        <Typography color="text.secondary" mt={1}>
          Differences in BMI among thin children may reflect fat-free mass rather
          than unhealthy fat levels.
        </Typography>

        <Typography color="text.secondary" mt={2}>
          Despite these limitations, BMI is a useful indicator of body fat for
          approximately 90–95% of the population when used alongside other
          health assessments.
        </Typography>
      </CardContent>
    </Card>
  );
}
