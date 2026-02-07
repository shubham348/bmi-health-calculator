import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  Divider,
} from "@mui/material";

export default function CalorieEducation() {

  return (
    <Card sx={{ borderRadius: 5 }}>
      <CardContent sx={{ p: { xs: 4, md: 5 } }}>
        <Stack spacing={4}>
          {/* ================= HEADER ================= */}
          <Typography variant="h5" fontWeight={600}>
            Calorie Education & Energy Balance
          </Typography>

          {/* ================= INTRO ================= */}
          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              What Are Calories?
            </Typography>
            <Typography color="text.secondary">
              Calories are a unit of energy. The human body requires energy to
              perform essential functions such as breathing, circulation,
              digestion, temperature regulation, and physical activity.
              Calories consumed through food and drink provide this energy.
            </Typography>

            <Typography color="text.secondary" mt={1}>
              Consuming more calories than the body expends leads to weight
              gain, while consuming fewer calories than expended results in
              weight loss. However, calorie balance is influenced by many
              biological, hormonal, and behavioral factors.
            </Typography>
          </Box>

          <Divider />

          {/* ================= BMR EXPLANATION ================= */}
          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Basal Metabolic Rate (BMR)
            </Typography>

            <Typography color="text.secondary">
              Basal Metabolic Rate (BMR) represents the amount of energy the body
              expends per day while at rest. It accounts for energy required to
              sustain vital functions such as heartbeat, respiration, and brain
              activity.
            </Typography>

            <Typography color="text.secondary" mt={1}>
              This calculator uses the <b>Mifflin–St Jeor Equation</b>, which has
              been shown to be more accurate than the older Harris–Benedict
              Equation for most individuals. The Katch–McArdle formula may be
              more accurate for lean individuals who know their body fat
              percentage, as it accounts for lean body mass.
            </Typography>
          </Box>

          <Divider />

          {/* ================= ACTIVITY & CALORIES ================= */}
          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Activity Level & Daily Calorie Needs
            </Typography>

            <Typography color="text.secondary">
              The BMR value represents calories needed at rest. To estimate real
              daily calorie requirements, BMR is multiplied by an activity
              factor (typically ranging from 1.2 to 1.9) depending on physical
              activity levels.
            </Typography>

            <Typography color="text.secondary" mt={1}>
              The resulting value estimates how many calories a person can
              consume daily to maintain their current body weight.
            </Typography>
          </Box>

          <Divider />

          {/* ================= WEIGHT LOSS ================= */}
          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Calories & Weight Loss
            </Typography>

            <Typography color="text.secondary">
              Approximately 3,500 calories equate to 1 pound (~0.45 kg) of body
              weight. Reducing daily calorie intake by about 500 calories may
              result in a theoretical loss of 1 pound per week.
            </Typography>

            <Typography color="text.secondary" mt={1}>
              It is generally not recommended to reduce intake by more than
              1,000 calories per day, as rapid weight loss can lead to muscle
              loss, metabolic slowdown, nutrient deficiencies, dehydration,
              and eventual weight regain.
            </Typography>

            <Typography color="text.secondary" mt={1}>
              Sustainable weight loss is best achieved through a combination of
              moderate calorie reduction, adequate protein intake, sufficient
              fiber, and regular physical activity.
            </Typography>
          </Box>

          <Divider />

          {/* ================= CALORIE COUNTING ================= */}
          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Calorie Counting as a Weight-Loss Tool
            </Typography>

            <Typography color="text.secondary">
              Calorie counting helps improve nutritional awareness. Many people
              underestimate how many calories they consume daily, especially
              from snacks and beverages.
            </Typography>

            <Typography color="text.secondary" mt={1}>
              While calorie counting can be effective, it is not an exact
              science. Food digestion, chewing effort, thermic effect of food,
              and food quality all influence how many calories the body actually
              absorbs.
            </Typography>

            <Typography color="text.secondary" mt={1}>
              Minimally processed foods such as vegetables, fruits, whole
              grains, and lean proteins generally promote satiety and metabolic
              health more effectively than highly processed foods.
            </Typography>
          </Box>

          <Divider />

          {/* ================= ZIGZAG DIET ================= */}
          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Zigzag Calorie Cycling
            </Typography>

            <Typography color="text.secondary">
              Zigzag calorie cycling involves alternating higher-calorie and
              lower-calorie days while maintaining the same weekly calorie
              total. This approach may help prevent metabolic adaptation and
              weight-loss plateaus.
            </Typography>

            <Typography color="text.secondary" mt={1}>
              There is no universally optimal zigzag pattern. Adjustments should
              be based on activity level, lifestyle, and personal adherence.
            </Typography>
          </Box>

          <Divider />

          {/* ================= FINAL NOTE ================= */}
          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Final Note on Calories & Health
            </Typography>

            <Typography color="text.secondary">
              Calories alone do not define health. Food quality, nutrient
              density, physical activity, sleep, and long-term consistency all
              play critical roles. The most effective strategy is one that fits
              your lifestyle and can be sustained over time.
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
