import React from "react";
import { Box } from "@mui/material";
const css = {
  background: {
    background:
      "radial-gradient(73.29% 73.29% at 50% 26.71%, #A659FE 0%, #6F53FD 100%)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
};

const Award = () => {
  return <Box sx={css.background}>award</Box>;
};

export default Award;
