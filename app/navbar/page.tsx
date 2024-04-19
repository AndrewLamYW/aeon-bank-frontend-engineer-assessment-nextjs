import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "./navbar";

export default function NavbarPage() {
  return (
    <Box style={{ height: "100vh" }}>
      <Navbar />

      <Container component="main" sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h1" gutterBottom>
          Challenge 2: Navbar
        </Typography>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" gutterBottom>
            Requirements
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            Create a blank page using React that contains the navbar as below.
          </Typography>

          <Box component="ol" type="a" sx={{ px: 8 }}>
            <li>
              Navbar title can be any name. You can follow the sample image
              below
            </li>
            <li>Navbar should use &lt;a&gt; tag with href=”/”</li>
            <li>Please only create a search input without any functions.</li>
            <li>Mobile view is optional.</li>
          </Box>
        </Box>

        <Box>
          <Typography variant="h2" gutterBottom>
            Andrew&apos;s Comments <em>(Developer)</em>
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            This navbar was built from scratch without using MUI components to
            showcase my foundational CSS skills.
          </Typography>

          <Typography variant="body1">
            In actual project, using the project&apos;s UI framework{" "}
            <em>(in this case is MUI)</em> components would streamline
            development and guarantee consistent styling across the application.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
