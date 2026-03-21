import { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Dialog,
  DialogContent,
  IconButton,
  TextField,
  FormControl,
  Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { proteinRecipesText } from "../../utils/proteinVideos";

export default function ProteinTextRecipes() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [activeRecipe, setActiveRecipe] = useState(null);

  const filteredRecipes = useMemo(() => {
    return proteinRecipesText.filter((recipe) => {
      const q = search.toLowerCase();
      return (
        recipe.title.toLowerCase().includes(q) ||
        recipe.ingredients.some((i) =>
          i.toLowerCase().includes(q)
        )
      );
    });
  }, [search]);

  const handleOpen = (recipe) => {
    setActiveRecipe(recipe);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveRecipe(null);
  };

  const handleCopy = () => {
    if (!activeRecipe) return;

    const text = `
${activeRecipe.title}

Ingredients:
${activeRecipe.ingredients.map(i => "- " + i).join("\n")}

Steps:
${activeRecipe.steps.map((s, i) => `${i + 1}. ${s}`).join("\n")}
    `;

    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <Card elevation={0}>
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Typography color="text.secondary" mb={2}>
            Home Made Recipes
          </Typography>

          <Box sx={{ mb: 1, maxWidth: 300 }}>
            <FormControl fullWidth size="small">
              <TextField

                placeholder="Search recipes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                size="small"
                sx={{
                  mb: 3,
                  maxWidth: 300,
                  background: "#fafafa",
                  borderRadius: 2
                }}
              />
            </FormControl>
          </Box>
          {/* SEARCH */}


          {/* LIST */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              maxHeight: "520px",
              overflowY: "auto",
              p: 2,

              /* ✅ Clean scrollbar */
              "&::-webkit-scrollbar": {
                width: "6px"
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#d1d5db",
                borderRadius: "10px"
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#9ca3af"
              }
            }}
          >
            {filteredRecipes.map((recipe, i) => (
              <Card
                key={i}
                onClick={() => handleOpen(recipe)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  overflow: "unset",
                  px: 2,
                  py: 1.5, // ✅ reduced height

                  borderRadius: 3,
                  cursor: "pointer",

                  transition: "all 0.2s ease",

                  "&:hover": {
                    transform: "translateY(-2px)"
                  }
                }}
              >
                <Box sx={{
                  display: "flex", alignItems: "center", gap: 2, width: "100%", flexDirection: "row",
                  "@media (max-width:360px)": {
                    flexDirection: "column-reverse"
                  }
                }}>

                  {/* TITLE */}
                  <Typography fontWeight={600}>
                    {recipe.title}
                  </Typography>

                  {/* PUSH IMAGE RIGHT */}
                  <Box sx={{ flexGrow: 1 }} />

                  {/* IMAGE */}
                  <Box
                    component="img"
                    src={
                      recipe.image ||
                      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400"
                    }
                    sx={{
                      width: 60,
                      height: 60,
                      objectFit: "cover",
                      borderRadius: 2
                    }}
                  />
                </Box>
              </Card>
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* MODAL */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent sx={{ p: 0 }}>
          {activeRecipe && (
            <Box>
              {/* HEADER */}
              <Box
                sx={{
                  px: 3,
                  py: 2,
                  borderBottom: "1px solid #eee",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Typography variant="h5" fontWeight={700}>
                  {activeRecipe.title}
                </Typography>

                <Box>
                  <IconButton onClick={handleCopy}>
                    <ContentCopyIcon />
                  </IconButton>
                  <IconButton onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Box>

              {/* CONTENT */}
              <Box
                sx={{
                  p: 3,
                  maxHeight: "70vh",
                  overflowY: "auto",

                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": {
                    display: "none"
                  }
                }}
              >
                {/* INGREDIENT + IMAGE */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    flexDirection: {
                      xs: "column",
                      md: "row"
                    }
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography fontWeight={600} mb={1}>
                      Ingredients
                    </Typography>
                    {activeRecipe.ingredients.map((item, i) => (
                      <Typography key={i} color="text.secondary">
                        • {item}
                      </Typography>
                    ))}
                  </Box>

                  <Box
                    component="img"
                    src={
                      activeRecipe.image ||
                      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600"
                    }
                    sx={{
                      width: { xs: "100%", md: 240 },
                      height: 180,
                      objectFit: "cover",
                      borderRadius: 2
                    }}
                  />
                </Box>

                {/* STEPS */}
                <Typography fontWeight={600} mt={3} mb={1}>
                  Steps
                </Typography>
                {activeRecipe.steps.map((step, i) => (
                  <Typography key={i} color="text.secondary">
                    {i + 1}. {step}
                  </Typography>
                ))}
                {/* 
                <Button
                  variant="contained"
                  startIcon={<ContentCopyIcon />}
                  onClick={handleCopy}
                  sx={{
                    mt: 3,
                    borderRadius: 3,
                    textTransform: "none",
                    background:
                      "linear-gradient(135deg, #0f766e, #10b981)"
                  }}
                >
                  Copy Recipe
                </Button> */}
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}