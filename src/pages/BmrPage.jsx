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
import { doodleCard } from "../utils/style";

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
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            ...doodleCard
          }}
        >
          <CardContent sx={{ p: { xs: 2, md: 4 } }}>
            <Typography
              fontWeight={600}
              mb={1}
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
            >
              Calculate Your BMR
            </Typography>

            <Typography
              color="text.secondary"
              mb={3}
              sx={{ fontSize: { xs: "0.8rem", md: "0.95rem" } }}
            >
              Basal Metabolic Rate tells you how many calories your body burns at rest.
            </Typography>

            <form onSubmit={handleSubmit}>
              <Stack spacing={{ xs: 2, md: 2.5 }}>
                <TextField
                  label="Age"
                  name="age"
                  type="number"
                  required
                  fullWidth
                  size="small"
                />

                <TextField
                  select
                  label="Gender"
                  name="gender"
                  required
                  fullWidth
                  size="small"
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
                  size="small"
                />

                <TextField
                  label="Weight (kg)"
                  name="weight"
                  type="number"
                  required
                  fullWidth
                  size="small"
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 1,
                    py: { xs: 1, md: 1.4 },
                    borderRadius: 3,
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: { xs: 13, md: 16 }
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
            <CardContent sx={{ p: { xs: 2, md: 4 } }}>
              <Typography
                gutterBottom
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, fontWeight: 600 }}
              >
                Your BMR Result
              </Typography>

              <Typography
                fontWeight={700}
                sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" } }}
              >
                {bmr} kcal/day
              </Typography>

              <Typography
                color="text.secondary"
                mt={1}
                sx={{ fontSize: { xs: "0.8rem", md: "0.95rem" } }}
              >
                This is the number of calories your body needs daily at complete rest.
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
    </PageLayout>
  );
}