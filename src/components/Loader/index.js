import React from "react";
import { CircularProgress } from "@material-ui/core";

export default function Loader() {
  return (
    <>
      <CircularProgress size={60} thickness={4} color="primary" />
    </>
  );
}
