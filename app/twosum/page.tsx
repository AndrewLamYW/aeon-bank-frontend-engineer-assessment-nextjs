import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "../components/navbar/navbar";

export default function Twosum() {
  return (
    <Box style={{ height: "100vh" }}>
      <Navbar />

      <Container component="main" sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h1" gutterBottom>
          Challenge 3: Two Sum II- Input Array Is Sorted
        </Typography>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" gutterBottom>
            Requirements
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Given a 1-indexed array of integers numbers that is already sorted
            in non-decreasing order, find two numbers such that they add up to a
            specific target number. Let these two numbers be numbers[index1] and
            numbers[index2] where 1 &lt;= index1 &lt; index2 &lt;
            numbers.length.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Return the indices of the two numbers, index1 and index2, added by
            one as an integer array [index1, index2] of length 2.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            The tests are generated such that there is exactly one solution. You
            may not use the same element twice.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Your solution must use only constant extra space.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            You can use Javascript or Typescript.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
