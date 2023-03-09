import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Buttons from "../components/Buttons";
import ButtonsRight from "../components/ButtonsRight";

const css = {
  container: { margin: "100px 300px" },
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
    <Box sx={css.container}>
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <ButtonsRight />
      <Buttons />
      <Buttons />
    </Box>
  );
};

export default LevelTwo;
