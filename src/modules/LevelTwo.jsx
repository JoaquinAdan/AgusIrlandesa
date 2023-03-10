import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Buttons from "../components/Buttons";
import ButtonsRight from "../components/ButtonsRight";
import ModalStatus from "./ModalStatus";

const css = {
  background: {
    background:
      "radial-gradient(73.29% 73.29% at 50% 26.71%, #A659FE 0%, #6F53FD 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    p: {xs:"5px 5px", lg:"50px 50px"},
    background: "#FFFEFF",
    borderBottom: "10px solid  #d1d8ff",
    boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.25)",
    borderRadius: "21px",
    display: "flex",
    width: { xs: "95%", lg: "auto" },
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
  const [open, setOpen] = useState(false);
  const [openLose, setOpenLose] = useState(false);
  
  return (
    <Box sx={css.background}>
      <Typography sx={{color: "#fff", fontSize: "26px", textAlign: "center", mb: {xs: "10px",lg:"20px"}}}>SELECCIONE EL BOTÓN QUE TE LLEVA A TU CASA</Typography>
      <Box sx={css.container}>
        <Buttons open={openLose} setOpen={setOpenLose} />
        <Buttons open={openLose} setOpen={setOpenLose} />
        <Buttons open={openLose} setOpen={setOpenLose} />
        <ButtonsRight open={open} setOpen={setOpen} openLose={openLose} setOpenLose={setOpenLose} />
        <Buttons open={openLose} setOpen={setOpenLose} />
        <Buttons open={openLose} setOpen={setOpenLose} />
      </Box>
            
      {openLose ? (
        <ModalStatus
          setOpen={setOpenLose}
          open={openLose}
          variant="levelTwoError"
        />
      ) : open ? (
        <ModalStatus open={open} variant="levelTwoSuccess"/>
      ) : <Box/>}
    </Box>
  );
};

export default LevelTwo;
