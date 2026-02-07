import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Dialog,
  DialogContent,
  IconButton
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { proteinVideos } from "../../utils/proteinVideos";

export default function ProteinRecipes() {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const handleOpen = video => {
    setActiveVideo(video);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveVideo(null);
  };

  return (
    <>
      <Card sx={{ borderRadius: 5 }}>
        <Accordion
          defaultExpanded
          sx={{
            borderRadius: 5,
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            "&::before": { display: "none" }
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ px: 4, py: 2 }}
          >
            <Typography variant="h5" fontWeight={600}>
              High Protein Recipe Videos
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Card elevation={0}>
              <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                <Typography color="text.secondary" mb={4}>
                  Indian high-protein recipes for muscle gain, fat loss, and
                  budget diets. Watch directly here.
                </Typography>

                <Grid container spacing={4}>
                  {proteinVideos.map((video, i) => (
                    <Grid item xs={12} md={6} key={i}>
                      <Card
                        sx={{
                          borderRadius: 4,
                          overflow: "hidden",
                          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                          cursor: "pointer"
                        }}
                        onClick={() => handleOpen(video)}
                      >
                        {/* Thumbnail */}
                        <Box sx={{ position: "relative" }}>
                          <Box
                            component="img"
                            src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                            alt={video.title}
                            sx={{
                              width: "100%",
                              height: 220,
                              objectFit: "cover"
                            }}
                          />

                          <PlayCircleOutlineIcon
                            sx={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%,x,-50%)",
                              fontSize: 64,
                              color: "#fff",
                              opacity: 0.9
                            }}
                          />
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </AccordionDetails>
        </Accordion>
      </Card>

      {/* ===== VIDEO DIALOG ===== */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ p: 0, position: "relative" }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8, zIndex: 10 }}
          >
            <CloseIcon />
          </IconButton>

          {activeVideo && (
            <Box
              sx={{
                position: "relative",
                paddingTop: "56.25%" // 16:9
              }}
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0
                }}
              />
            </Box>
          )}

          {/* Fallback */}
          {activeVideo && (
            <Box sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                If video doesn’t load,{" "}
                <a
                  href={activeVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  open on YouTube
                </a>
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
