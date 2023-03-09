import React from "react";
import logo from "../assets/logo.png";
import { Box, Typography } from "@mui/material";

const css = {
  background: {
    background:
      "radial-gradient(73.29% 73.29% at 50% 26.71%, #A659FE 0%, #6F53FD 100%)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
const Loading = () => {
  return (
    <Box sx={css.background}>
       <Box component="img" src={logo}/>
    </Box>
  );
};

export default Loading;
