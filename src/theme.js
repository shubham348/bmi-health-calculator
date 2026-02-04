import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#2e7d32" },
    background: { default: "#f9fafb" }
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "Inter, sans-serif"
  }
});
