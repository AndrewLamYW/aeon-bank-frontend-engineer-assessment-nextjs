"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ChangeEvent, KeyboardEventHandler, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Navbar from "../components/navbar/navbar";

type FormInputs = {
  numberForArray: string;
  targetNumber: string;
};

export default function TwoSum() {
  const [inputItem, setInputItem] = useState<string>();
  const [inputArray, setInputArray] = useState<number[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInputs>();

  const twoSum = (numbers: number[], target: number): number[] => {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
      const sum = numbers[left] + numbers[right];

      if (sum === target) {
        return [left + 1, right + 1];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    return [];
  };

  const onSubmit: SubmitHandler<FormInputs> = ({
    numberForArray,
    targetNumber,
  }) => {
    console.log(Number(numberForArray) + Number(targetNumber));
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

          <Stack spacing={2}>
            <Stack direction="row" spacing={4}>
              <TextField
                label="Number to Add to Array"
                type="number"
                variant="filled"
                value={inputItem}
                onChange={handleInputItemChange}
                sx={{ flexGrow: 1 }}
                onKeyDown={handleInputItemKeyPress}
              />

              <Button variant="contained" onClick={handleAddToArray}>
                Add to Array
              </Button>
            </Stack>

            <p>{inputArray.length ? `[${inputArray.join(", ")}]` : "[ ]"}</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label="Target Number"
                type="number"
                variant="filled"
                {...register("targetNumber", { required: true })}
              />

              <Button variant="contained" type="submit">
                Add Two Numbers
              </Button>

              <p>Returned Value:</p>
            </form>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
