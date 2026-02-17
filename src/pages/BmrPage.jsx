import { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  MenuItem,
  Typography,
  Box
} from "@mui/material";
import PageLayout from "../components/PageLayout";
import { calculateBMR } from "../utils/bmr";

export default function BmrPage() {
  const [bmr, setBmr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const result = calculateBMR({
      weight: Number(data.get("weight")),
      height: Number(data.get("height")),
      age: Number(data.get("age")),
      gender: data.get("gender")
    });

    setBmr(Math.round(result));
  };

  return (
    <PageLayout title="BMR Calculator" showBreadcrumb>
      <Box
        sx={{
          mt: 4,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: bmr ? "1fr 1fr" : "1fr"
          },
          gap: 4,
          alignItems: "start",
          maxWidth: 1100,
          mx: "auto"
        }}
      >
        {/* ===== FORM CARD ===== */}
        <Card
          sx={{
            borderRadius: 5,
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="h5" fontWeight={600} mb={1}>
              Calculate Your BMR
            </Typography>

            <Typography color="text.secondary" mb={3}>
              Basal Metabolic Rate tells you how many calories your body burns at rest.
            </Typography>

            <form onSubmit={handleSubmit}>
              <Stack spacing={2.5}>
                <TextField
                  label="Age"
                  name="age"
                  type="number"
                  required
                  fullWidth
                />

                <TextField
                  select
                  label="Gender"
                  name="gender"
                  required
                  fullWidth
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </TextField>

                <TextField
                  label="Height (cm)"
                  name="height"
                  type="number"
                  required
                  fullWidth
                />

                <TextField
                  label="Weight (kg)"
                  name="weight"
                  type="number"
                  required
                  fullWidth
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    mt: 1,
                    py: 1.4,
                    borderRadius: 3,
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: 16
                  }}
                >
                  Calculate BMR
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>

        {/* ===== RESULT CARD ===== */}
        {bmr && (
          <Card
            sx={{
              borderRadius: 5,
              background: "linear-gradient(135deg, #ecfdf5, #ffffff)",
              border: "1px solid #e5e7eb"
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                Your BMR Result
              </Typography>

              <Typography fontSize={36} fontWeight={700}>
                {bmr} kcal/day
              </Typography>

              <Typography color="text.secondary" mt={1}>
                This is the number of calories your body needs daily at complete rest.
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
    </PageLayout>
  );
}
