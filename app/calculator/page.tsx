"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
  input1: string;
  input2: string;
};

export default function Calculator() {
  const [total, setTotal] = useState<number>();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = ({ input1, input2 }) =>
    setTotal(Number(input1) + Number(input2));

  const getHelperText = (fieldName: keyof FormInputs) =>
    errors[fieldName]?.type === "required" && "This field is required";

  return (
    <Container maxWidth="xs" sx={{ height: "100vh" }}>
      <Button variant="outlined" startIcon={<ArrowBackIcon />} sx={{ mt: 3 }}>
        <Link href="/">HOME</Link>
      </Button>

      <Box sx={{ pt: 6 }}>
        <Typography variant="h1" gutterBottom>
          Calculator
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          Adding Two Numbers
        </Typography>

        <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={2}>
          <TextField
            error={!!errors.input1}
            helperText={getHelperText("input1")}
            label="First Number"
            type="number"
            variant="filled"
            {...register("input1", { required: true })}
          />

          <TextField
            error={!!errors.input2}
            helperText={getHelperText("input2")}
            label="Second Number"
            type="number"
            variant="filled"
            {...register("input2", { required: true })}
          />

          <Button variant="contained" type="submit">
            Add Two Numbers
          </Button>

          <p>Total: {isValid && total}</p>
        </Stack>
      </Box>
    </Container>
  );
}
