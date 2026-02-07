import { useMemo } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { formatYoutubeUrls,proteinVideoUrls } from "../../utils/proteinVideos";

export default function ProteinRecipes() {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const proteinVideos = useMemo(() => {
  return formatYoutubeUrls(proteinVideoUrls);
}, []);


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
          {/* HEADER */}
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 4, py: 2 }}>
            <Typography variant="h5" fontWeight={600}>
              High Protein Recipe Videos
            </Typography>
          </AccordionSummary>

          {/* CONTENT */}
          <AccordionDetails>
            <Card elevation={0}>
              <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                <Typography color="text.secondary" mb={4}>
                  Curated Indian high-protein recipes for gym, muscle gain, fat
                  loss, and budget-friendly diets. Tap to watch instantly.
                </Typography>

                {/* VIDEO LIST */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 3,
                    justifyContent: "center"
                  }}
                >
                  {proteinVideos.map((video, i) => (
                    <Box
                      key={i}
                      sx={{
                        flex: {
                          xs: "1 1 100%", // mobile
                          sm: "1 1 48%",  // tablet
                          md: "1 1 30%"   // desktop (max 3)
                        },
                        maxWidth: {
                          xs: "100%",
                          sm: "48%",
                          md: "30%"
                        }
                      }}
                    >
                      <Card
                        onClick={() => handleOpen(video)}
                        sx={{
                          borderRadius: 3,
                          overflow: "hidden",
                          cursor: "pointer",
                          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                          transition: "transform 0.2s ease",
                          "&:hover": {
                            transform: "translateY(-4px)"
                          }
                        }}
                      >
                        {/* THUMBNAIL */}
                        <Box sx={{ position: "relative" }}>
                          <Box
                            component="img"
                            src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                            alt={video.title}
                            sx={{
                              width: "100%",
                              height: 180,
                              objectFit: "cover"
                            }}
                          />

                          <PlayCircleOutlineIcon
                            sx={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              fontSize: 56,
                              color: "#fff",
                              opacity: 0.95
                            }}
                          />
                        </Box>
                      </Card>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </AccordionDetails>
        </Accordion>
      </Card>

      {/* VIDEO PLAYER DIALOG */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent sx={{ p: 0, position: "relative" }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8, zIndex: 10 }}
          >
            <CloseIcon />
          </IconButton>

          {activeVideo && (
            <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
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
        </DialogContent>
      </Dialog>
    </>
  );
}
