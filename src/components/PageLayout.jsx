import { Box, Container } from "@mui/material";
import Header from "./Header";
import PageHeader from "./PageHeader";

export default function PageLayout({ children, title, showBreadcrumb = false }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 6,
        background:
          "linear-gradient(to right bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12)"
      }}
    >
      <Container maxWidth="md">
        <Header />

        {showBreadcrumb && <PageHeader title={title} />}

        {children}
      </Container>
    </Box>
  );
}
