import React from "react";
import { styled } from "../../../styled-system/jsx";

export const Card = styled("div", {
  base: {
    rounded: "xl",
    borderWidth: "1px",
    shadow: "shadow",
  },
});

export const CardContent = styled("div", {
  base: {
    p: "6",
  },
});

export const CardHeader = styled("div", {
  base: {
    display: "flex",
    flexDir: "column",
    mt: "1.5",
    mb: "1.5",
    p: "6",
  },
});
