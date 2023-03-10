import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CustomButton from "./CustomButton";
import ModalStatus from "../modules/ModalStatus";

const css = {
  container: { margin: "100px 300px" },
  buttonContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
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
  const [open, setOpen] = useState(false);
  return (
    <Box sx={css.buttonContainer}>
      {buttonState.map((element, i) => (
        <Box
          sx={{
            borderBottom: "4px solid  #9f2e30",
            borderRadius: "8px",
            p: "3px",
            height: "80px",
          }}
        >
          <CustomButton
            fontSize="20px"
            colorClaro="#ff3f3f"
            colorOscuro="#ff0f0f"
            colorClaroHover="#eb3636"
            colorOscuroHover="#d90808"
            borderBottom="#c00000"
            borderBottomHover="#a70000"
            width="200px"
            onClick={() => {
              setOpen(!open);
            }}
          >
            HOGAR
          </CustomButton>
        </Box>
      ))}
      <ModalStatus open={open} variant="levelTwoError" setOpen={setOpen} />
    </Box>
  );
};

export default Buttons;
