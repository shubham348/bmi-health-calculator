import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const resources = [
  {
    title: "BMI Basics",
    subtitle: "Understand how BMI is calculated",
    url: "https://www.cdc.gov/healthyweight/assessing/bmi",
    source: "CDC"
  },
  {
    title: "Healthy Weight Guide",
    subtitle: "Learn how to maintain a healthy weight",
    url: "https://www.nhs.uk/live-well/healthy-weight/",
    source: "NHS"
  },
  {
    title: "Obesity & Health",
    subtitle: "Health risks and prevention insights",
    url: "https://www.who.int/health-topics/obesity",
    source: "WHO"
  }
];

export default function Resources() {
  return (
    <Card sx={{ borderRadius: 5 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" fontWeight={700} mb={3}>
          Learn More from Trusted Sources
        </Typography>

        <Stack spacing={2}>
          {resources.map((res, i) => (
            <Box
              key={i}
              component="a"
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
                color: "inherit"
              }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  p: 2.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid #e5e7eb",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    transform: "translateY(-2px)"
                  }
                }}
              >
                <Box>
                  <Typography fontWeight={600}>
                    {res.source} — {res.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {res.subtitle}
                  </Typography>
                </Box>

                <OpenInNewIcon color="primary" />
              </Card>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
