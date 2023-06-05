import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useAppSelector } from "../../app/hooks";

export const IsLoadingLinear = () => {
  const isLoading = useAppSelector((state) => state.app.isLoading);

  return (
    <>
      <Box sx={{ width: "100%" }}>{isLoading && <LinearProgress />}</Box>
    </>
  );
};
