import { styled } from "@mui/material";

export const VisuallyHiddenInput = styled("input")({
  height: 1,
  width: 1,
  border: 0,
  margin: -1,
  padding: 0,
  position: "absolute",
  overflow: "hidden",
  whiteSpace: "nowrap",
  clip: "rect(0 0 0 0)",
});
