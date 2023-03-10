import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Buttons from "../components/Buttons";
import ButtonsRight from "../components/ButtonsRight";

const css = {
  background: {
    background:
      "radial-gradient(73.29% 73.29% at 50% 26.71%, #A659FE 0%, #6F53FD 100%)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    p: "50px 50px",
    background: "#FFFEFF",
    borderBottom: "10px solid  #d1d8ff",
    boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.25)",
    borderRadius: "21px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px"
  },
};

const LevelTwo = () => {
  const [buttonState, setButtonState] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const disableSelect = (i, bool) => {
    const aux = [...buttonState];
    aux[i] = bool;
    setButtonState(aux);
  };
  return (
    <Box sx={css.background}>
      <Box sx={css.container}>
        <Buttons />
        <Buttons />
        <Buttons />
        <ButtonsRight />
        <Buttons />
        <Buttons />
      </Box>
    </Box>
  );
};

export default LevelTwo;
