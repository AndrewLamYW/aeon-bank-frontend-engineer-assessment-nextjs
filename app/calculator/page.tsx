"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [total, setTotal] = useState("");

  const handleNum1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(e.target.value);
  };

  const handleAdd = () => {
    const sum = Number(num1) + Number(num2);
    setTotal(sum.toString());
  };

  return (
    <div>
      <Link href="/">Home</Link>

      <div>
        <label>Number 1:</label>
        <input type="number" value={num1} onChange={handleNum1Change} />
      </div>

      <div>
        <label>Number 2:</label>
        <input type="number" value={num2} onChange={handleNum2Change} />
      </div>

      <button onClick={handleAdd}>Add</button>

      <p>Total: {total}</p>
    </div>
  );
}
