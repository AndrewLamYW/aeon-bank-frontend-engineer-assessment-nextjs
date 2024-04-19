"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "../components/navbar/navbar";

export default function Mcq() {
  return (
    <Box style={{ height: "100vh" }}>
      <Navbar />

      <Container component="main" sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h1" gutterBottom>
          Multiple-Choice Questions
        </Typography>

        <Box component="ol" mx={4}>
          <li>a</li>
          <li>c</li>
          <li>c</li>
          <li>b</li>
          <li>c</li>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>a</li>
          <li>a</li>
          <li>d</li>
          <li>b</li>
        </Box>
      </Container>
    </Box>
  );
}
