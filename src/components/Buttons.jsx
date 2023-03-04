import React, { useState } from "react";
import { Box, Button } from "@mui/material";

const css = {
  container: { margin: "100px 300px" },
  buttonContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    mb: "30px"
  },
};

const Buttons = () => {
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
    <Box sx={css.buttonContainer}>
      {buttonState.map((element, i) => (
        <Button
          variant="contained"
          size="large"
          disabled={buttonState[i]}
          sx={{ width: "200px", height: "80px", fontSize: "30px" }}
          onClick={() => {
            disableSelect(i, !buttonState[i]);
            alert("no")
          }}
        >
          HOLA
        </Button>
      ))}
    </Box>
  );
};

export default Buttons;
