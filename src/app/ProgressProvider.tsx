"use client";
import React from "react";
import { Next13ProgressBar } from "next13-progressbar";

const ProgressProvider = () => {
  return (
    <>
      <Next13ProgressBar
        height="4px"
        color="#0bab7c"
        options={{ showSpinner: true }}
        showOnShallow
      />
    </>
  );
};

export default ProgressProvider;
