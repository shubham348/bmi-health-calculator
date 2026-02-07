import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Stack,
  Box
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { youtubeChannels } from "../../utils/proteinVideos";

export default function ProteinChannels() {
  return (
    <Card sx={{ borderRadius: 5 }}>
      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
        <Typography variant="h5" fontWeight={600} mb={3}>
          Recommended High-Protein YouTube Channels
        </Typography>

        <Grid container spacing={3}>
          {youtubeChannels.map(channel => (
            <Grid item xs={12} sm={6} md={4} key={channel.url}>
              <Card
                sx={{
                  borderRadius: 4,
                  cursor: "pointer",
                  transition: "0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.12)"
                  }
                }}
                onClick={() => window.open(channel.url, "_blank")}
              >
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      sx={{
                        bgcolor: "primary.main",
                        width: 48,
                        height: 48
                      }}
                    >
                      {channel.name[0]}
                    </Avatar>

                    <Box>
                      <Typography fontWeight={600}>
                        {channel.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        display="flex"
                        alignItems="center"
                        gap={0.5}
                      >
                        View Channel <OpenInNewIcon fontSize="small" />
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
