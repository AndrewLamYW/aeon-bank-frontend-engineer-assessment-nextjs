"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "../components/navbar/navbar";

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
            <li>Navbar title can be any name.</li>
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
            I hand-coded this navbar using pure CSS to demonstrate my
            understanding of layout and styling. 💪 However, in a real-world
            project, I would leverage the project&apos;s UI framework (such as
            MUI) or a third-party library to streamline development and maintain
            a consistent user experience across the application. 👍
          </Typography>

          <Typography variant="body1" sx={{ mb: 6 }}>
            For example,{" "}
            <a
              href="https://mui.com/material-ui/react-app-bar/"
              style={{ textDecoration: "underline" }}
              target="_blank"
            >
              MUI&apos;s App Bar React component
            </a>{" "}
            offers convenient building blocks for this purpose. Please let me
            know if you are interested to see how I customize it to fit the
            design. 😁
          </Typography>

          <Typography variant="h3" gutterBottom>
            Mobile Navbar
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            To create a responsive mobile navbar with smooth dropdown
            animations, I employed React hooks (useEffect, useMemo, useState,
            useRef). Test the responsiveness by resizing your screen or viewing
            it on a mobile phone.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
