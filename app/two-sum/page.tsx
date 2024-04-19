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
  const [inputArray, setInputArray] = useState<number[]>([]);
  const [inputItem, setInputItem] = useState<string>();
  const [outputTuple, setReturnedTuple] = useState<[number, number]>();
  const [targetNumber, setTargetNumber] = useState<number>();

  const findIndexOfTwoSum = () => {
    if (!targetNumber) return;

    let left = 0;
    let right = inputArray.length - 1;

    while (left < right) {
      const sum = inputArray[left] + inputArray[right];
      if (sum === targetNumber) {
        setReturnedTuple([left + 1, right + 1]);
        return;
      } else if (sum < targetNumber) {
        left++;
      } else {
        right--;
      }
    }

    setReturnedTuple(undefined);
  };

  const handleAddToArray = () => {
    setInputArray((prevArr) => [...prevArr, Number(inputItem)]);
    setInputItem("");
  };

  const handleInputItemKeyPress: KeyboardEventHandler<HTMLDivElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      handleAddToArray();
    }
  };

  const handleInputTargetKeyPress: KeyboardEventHandler<HTMLDivElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      findIndexOfTwoSum();
    }
  };

  const handleInputItemChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputItem(e.target.value);
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
                onKeyDown={handleInputItemKeyPress}
                type="number"
                value={inputItem}
                variant="filled"
              />

              <Button variant="contained" onClick={handleAddToArray}>
                Add to Array
              </Button>
            </Stack>

            <p>{inputArray.length ? `[${inputArray.join(", ")}]` : "[ ]"}</p>
          </Box>

          <Stack direction="row" spacing={2}>
            <TextField
              label="Target number"
              onChange={(e) => setTargetNumber(Number(e.target.value))}
              onKeyDown={handleInputTargetKeyPress}
              type="number"
              value={targetNumber}
              variant="filled"
            />

            <Button variant="contained" onClick={findIndexOfTwoSum}>
              Find Two Sum
            </Button>
          </Stack>

          <Box mt={2} display="inline-block">
            Output (indices of the two numbers):{" "}
            {outputTuple && `[${outputTuple?.join(", ")}]`}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
