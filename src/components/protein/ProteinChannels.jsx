import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  Paper,
  Link
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { youtubeChannels } from "../../utils/proteinVideos";
import { doodleCard } from "../../utils/style";

export default function ProteinChannels() {
  return (
    <Card sx={{ borderRadius: 5, ...doodleCard }}>
      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Recommended High-Protein YouTube Channels
        </Typography>

        <Stack spacing={2}>
          {youtubeChannels.map((channel) => (
            <Paper
              key={channel.url}
              component={Link}
              href={channel.url}
              target="_blank"
              underline="none"
              sx={{
                p: 2.5,
                borderRadius: 3,
                border: "1px solid #e5e7eb",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "0.2s",
                width: "100%",
                boxSizing: "border-box",

                "&:hover": {
                  boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                  transform: "translateY(-2px)"
                }
              }}
            >
              <Box>
                <Typography fontWeight={600}>
                  {channel.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  High-protein recipes, diet tips & fitness content
                </Typography>
              </Box>

              <OpenInNewIcon color="primary" />
            </Paper>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}