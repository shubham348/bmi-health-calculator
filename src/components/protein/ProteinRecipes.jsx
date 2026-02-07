import { useMemo, useState } from "react";
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
  IconButton
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

import {
  formatYoutubeUrls,
  proteinVideoUrls
} from "../../utils/proteinVideos";

export default function ProteinRecipes() {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("general");

  /* ===============================
     FORMAT & NORMALIZE VIDEO DATA
  =============================== */
  const proteinVideos = useMemo(() => {
    return formatYoutubeUrls(proteinVideoUrls);
  }, []);

  /* ===============================
     BUILD CATEGORY LIST
  =============================== */
  const categories = useMemo(() => {
    const set = new Set(
      proteinVideos.map(v => v.category || "general")
    );
    return ["general", ...Array.from(set).filter(c => c !== "general")];
  }, [proteinVideos]);

  /* ===============================
     FILTER VIDEOS BY CATEGORY
  =============================== */
  const filteredVideos = useMemo(() => {
    return proteinVideos.filter(
      v => v.category === selectedCategory
    );
  }, [proteinVideos, selectedCategory]);

  /* ===============================
     HANDLERS
  =============================== */
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
          {/* ===== HEADER ===== */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ px: 4, py: 2 }}
          >
            <Typography variant="h5" fontWeight={600}>
              High Protein Recipe Videos
            </Typography>
          </AccordionSummary>

          {/* ===== CONTENT ===== */}
          <AccordionDetails>
            <Card elevation={0}>
              <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                <Typography color="text.secondary" mb={3}>
                  Curated Indian high-protein recipes for muscle gain, fat loss,
                  and budget-friendly diets. Select an ingredient to filter.
                </Typography>

                {/* ===== CATEGORY DROPDOWN ===== */}
                <Box sx={{ mb: 4, maxWidth: 280 }}>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    mb={1}
                  >
                    Filter by ingredient
                  </Typography>

                  <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: "1px solid #ddd",
                      fontSize: 14
                    }}
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat === "general"
                          ? "Gereral"
                          : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </option>
                    ))}
                  </select>
                </Box>

                {/* ===== VIDEO GRID ===== */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 3,
                    justifyContent: "center",
                    maxHeight:"600px",
                    overflow:"auto"
                  }}
                >
                  {filteredVideos.map((video, i) => (
                    <Box
                      key={i}
                      sx={{
                        flex: {
                          xs: "1 1 100%",
                          sm: "1 1 48%",
                          md: "1 1 30%"
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
                            alt="High protein recipe"
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

                  {filteredVideos.length === 0 && (
                    <Typography color="text.secondary">
                      No recipes found for this category.
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          </AccordionDetails>
        </Accordion>
      </Card>

      {/* ===== VIDEO PLAYER DIALOG ===== */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent sx={{ p: 0, position: "relative" }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 10,
              background: "#fff"
            }}
          >
            <CloseIcon />
          </IconButton>

          {activeVideo && (
            <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}`}
                title="Protein recipe video"
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
