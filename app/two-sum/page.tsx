"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ChangeEvent, KeyboardEventHandler, useState } from "react";
import Navbar from "../components/navbar/navbar";

export default function TwoSum() {
  const [itemInput, setItemInput] = useState<string>();
  const [items, setItems] = useState<number[]>([]);
  const [outputTuple, setReturnedTuple] = useState<[number, number] | null>();
  const [targetInput, setTargetInput] = useState<string>();

  const findIndexesOfTwoSum = () => {
    if (!targetInput) return;

    for (let i = 0; i < items.length - 1; i++) {
      for (let j = i + 1; j < items.length; j++) {
        const sum = items[i] + items[j];
        const target = Number(targetInput);

        if (sum === target) {
          setReturnedTuple([i + 1, j + 1]);
          return;
        }
      }
    }

    // Handle case where target number is not found
    setReturnedTuple(null);
  };

  const addToArray = () => {
    const inputNumber = Number(itemInput);

    if (!isNaN(inputNumber)) {
      setItems((prevArr) => [...prevArr, inputNumber]);
      setItemInput("");
    }
  };

  const handleKeyPress =
    (callback: () => void): KeyboardEventHandler<HTMLDivElement> =>
    (event) => {
      if (event.key === "Enter") {
        callback();
      }
    };

  const handleInputItemChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItemInput(e.target.value);
  };

  const resetState = () => {
    setItems([]);
    setItemInput("");
    setReturnedTuple(undefined);
    setTargetInput("");
  };

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

        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" gutterBottom>
            Implementation
          </Typography>

          <Box mb={4}>
            <Stack direction="row" spacing={2} mb={2}>
              <TextField
                label="Number to insert"
                onChange={handleInputItemChange}
                onKeyDown={handleKeyPress(addToArray)}
                type="number"
                value={itemInput}
                variant="filled"
              />

              <Button variant="contained" onClick={addToArray}>
                Add to Array
              </Button>
            </Stack>

            <p>{items.length ? `[${items.join(", ")}]` : "[ ]"}</p>
          </Box>

          <Stack direction="row" spacing={2}>
            <TextField
              label="Target number"
              onChange={(e) => setTargetInput(e.target.value)}
              onKeyDown={handleKeyPress(findIndexesOfTwoSum)}
              type="number"
              value={targetInput}
              variant="filled"
            />

            <Button variant="contained" onClick={findIndexesOfTwoSum}>
              Find Two Sum
            </Button>
          </Stack>

          <Box mt={2} mb={2}>
            Output (indices of the two numbers):{" "}
            {outputTuple === null
              ? "No solution found"
              : outputTuple && `[${outputTuple?.join(", ")}]`}
          </Box>

          <Button variant="contained" onClick={resetState}>
            RESET
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
