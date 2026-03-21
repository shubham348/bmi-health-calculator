import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#2e7d32" },
    background: { default: "#f9fafb" }
  },
  typography: {
    fontFamily: "Inter, sans-serif"
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        /* 🔥 GLOBAL SCROLLBAR */
        "*::-webkit-scrollbar": {
          width: "6px",
          height: "6px"
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#d1d5db",
          borderRadius: "10px"
        },
        "*::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#9ca3af"
        },

        /* Firefox support */
        "*": {
          scrollbarWidth: "thin",
          scrollbarColor: "#d1d5db transparent"
        }
      }
    }
  }
});