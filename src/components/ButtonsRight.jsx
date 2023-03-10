import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CustomButton from "./CustomButton";
import ModalStatus from "../modules/ModalStatus";

const css = {
  container: { margin: "100px 300px" },
  buttonContainer: {
    display: {xs: "grid",lg: "flex"},
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    justifyContent: "space-between",
  },
};

const ButtonsRight = ({ setOpen, open, setOpenLose, openLose }) => {

  return (
    <Box sx={css.buttonContainer}>
      <Box
        sx={{
          borderBottom: "4px solid  #9f2e30",
          borderRadius: "8px",
          p: "3px",
          height: "80px",
        }}
        onClick={() => {
          setOpenLose(!openLose);
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
          width={{xs: "160px", lg: "200px"}}
        >
          HOGAR
        </CustomButton>
      </Box>
      <Box
        sx={{
          borderBottom: "4px solid  #9f2e30",
          borderRadius: "8px",
          p: "3px",
          height: "80px",
        }}
        onClick={() => {
          setOpen(!open)
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
          width={{xs: "160px", lg: "200px"}}
        >
          HOGAR
        </CustomButton>
      </Box>
      <Box
        sx={{
          borderBottom: "4px solid  #9f2e30",
          borderRadius: "8px",
          p: "3px",
          height: "80px",
        }}
        onClick={() => {
          setOpenLose(!openLose);
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
          width={{xs: "160px", lg: "200px"}}
        >
          HOGAR
        </CustomButton>
      </Box>
      <Box
        sx={{
          borderBottom: "4px solid  #9f2e30",
          borderRadius: "8px",
          p: "3px",
          height: "80px",
        }}
        onClick={() => {
          setOpenLose(!openLose);
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
          width={{xs: "160px", lg: "200px"}}
        >
          HOGAR
        </CustomButton>
      </Box>
      <Box
        sx={{
          borderBottom: "4px solid  #9f2e30",
          borderRadius: "8px",
          p: "3px",
          height: "80px",
        }}
        onClick={() => {
          setOpenLose(!openLose);
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
          width={{xs: "160px", lg: "200px"}}
        >
          HOGAR
        </CustomButton>
      </Box>
      <Box
        sx={{
          borderBottom: "4px solid  #9f2e30",
          borderRadius: "8px",
          p: "3px",
          height: "80px",
        }}
        onClick={() => {
          setOpenLose(!openLose);
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
          width={{xs: "160px", lg: "200px"}}
        >
          HOGAR
        </CustomButton>
      </Box>
    </Box>
  );
};

export default ButtonsRight;
