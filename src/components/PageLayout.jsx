import { Box, Container } from "@mui/material";
import PageHeader from "./PageHeader";

export default function PageLayout({ children, title, showBreadcrumb = false }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        {showBreadcrumb && <PageHeader title={title} />}
        {children}
      </Container>
    </Box>
  );
}
