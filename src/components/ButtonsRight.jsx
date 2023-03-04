import React, { useState } from "react";
import { Box, Button } from "@mui/material";

const css = {
  container: { margin: "100px 300px" },
  buttonContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    mb: "30px",
  },
};

const ButtonsRight = () => {
  const [buttonOne, setButtonOne] = useState(false);
  const [buttonTwo, setButtonTwo] = useState(false);
  const [buttonThree, setButtonThree] = useState(false);
  const [buttonFour, setButtonFour] = useState(false);
  const [buttonFive, setButtonFive] = useState(false);
  
  return (
    <Box sx={css.buttonContainer}>
      <Button
        variant="contained"
        size="large"
        disabled={buttonOne}
        sx={{ width: "200px", height: "80px", fontSize: "30px" }}
        onClick={() => {
          setButtonOne(true);
          alert("no");
        }}
      >
        HOLA
      </Button>
      <Button
        variant="contained"
        size="large"
        disabled={buttonTwo}
        sx={{ width: "200px", height: "80px", fontSize: "30px" }}
        onClick={() => {
          setButtonTwo(true);
          alert("si");
        }}
      >
        HOLA
      </Button>
      <Button
        variant="contained"
        size="large"
        disabled={buttonThree}
        sx={{ width: "200px", height: "80px", fontSize: "30px" }}
        onClick={() => {
          setButtonThree(true);
          alert("no");
        }}
      >
        HOLA
      </Button>
      <Button
        variant="contained"
        size="large"
        disabled={buttonFour}
        sx={{ width: "200px", height: "80px", fontSize: "30px" }}
        onClick={() => {
          setButtonFour(true);
          alert("no");
        }}
      >
        HOLA
      </Button>
      <Button
        variant="contained"
        size="large"
        disabled={buttonFive}
        sx={{ width: "200px", height: "80px", fontSize: "30px" }}
        onClick={() => {
          setButtonFive(true);
          alert("no");
        }}
      >
        HOLA
      </Button>
    </Box>
  );
};

export default ButtonsRight;
