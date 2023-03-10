import React, { useState, useEffect, Suspense } from "react";
import { Box, Typography, styled } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import fourthImage from "../assets/4.jpeg";
import secondImage from "../assets/2.jpeg";
import thirdImage from "../assets/3.jpeg";
import firstImage from "../assets/1.jpg";
import ModalStatus from "./ModalStatus";

const Award = () => {
  const [firstText, setFirstText] = useState(true);
  const [secondText, setSecondText] = useState(false);
  const [imageStart, setImageStart] = useState(false);
  const [secondImageStart, setSecondImageStart] = useState(false);
  const [thirdImageStart, setThirdImageStart] = useState(false);
  const [fourthImageStart, setFourthImageStart] = useState(false);
  const [open, setOpen] = useState(false);

  const FirstText = styled(TypeAnimation)({
    "@keyframes vanish": {
      "0%": { opacity: "1" },
      "50%": { opacity: "0.5" },
      "100%": { opacity: "0" },
    },
    letterSpacing: "2px",
    color: "#fff",
    fontSize: "24px",
    textAlign: "center",
    animationName: "vanish",
    animationDuration: "4s",
    animationDelay: "2s",
    animationTimingFunction: "linear",
  });

  const FirstImage = styled("img")({
    "@keyframes appearfi": {
      "0%": { opacity: 1 },
      "1%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
    position: "absolute",
    left: "10px",
    top: "100px",
    width: "80%",
    borderRadius: "20px",
    animationName: "appearfi",
    animationDuration: "3s",
    animationTimingFunction: "linear",
    animationPlayState: secondImageStart ? "paused" : "running"
  });

  const SecondImage = styled("img")({
    "@keyframes appeartw": {
      "0%": { opacity: 1 },
      "1%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
    position: "absolute",
    right: "10px",
    top: "200px",
    width: "80%",
    borderRadius: "20px",
    animationName: "appeartw",
    animationDuration: "3s",
    animationTimingFunction: "linear",
    animationPlayState: thirdImageStart ? "paused" : "running"
  });

  const ThirdImage = styled("img")({
    "@keyframes appeart": {
      "0%": { opacity: 1 },
      "1%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
    position: "absolute",
    left: "10px",
    top: "300px",
    width: "80%",
    borderRadius: "20px",
    animationName: "appeart",
    animationDuration: "3s",
    animationTimingFunction: "linear",
    animationPlayState: fourthImageStart ? "paused" : "running"
  });

  const FourthImage = styled("img")({
    "@keyframes appearfo": {
      "0%": { opacity: 1 },
      "1%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
    position: "absolute",
    right: "10px",
    top: "400px",
    width: "80%",
    borderRadius: "20px",
    animationName: "appearfo",
    animationDuration: "3s",
    animationTimingFunction: "linear",
    animationPlayState: open ? "paused" : "running"
  });

  const css = {
    background: {
      background:
        "radial-gradient(73.29% 73.29% at 50% 26.71%, #A659FE 0%, #6F53FD 100%)",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: secondText ? "flex-start" : "center",
      pt: secondText ? "30px" : "0",
    },
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setFirstImageStart(true);
  //     setTimeout(() => {
  //       setSecondImageStart(true);
  //     }, 3000);
  //   }, 6150);
  // }, []);

  console.log(imageStart);
  console.log(secondImageStart);
  console.log(thirdImageStart);
  console.log(fourthImageStart);
  return (
    <Box sx={css.background}>
      {firstText && (
        <FirstText
          sequence={[
            "AQUÍ TIENES TU RECOMPENSA LUEGO DE TANTO JUGAR...",
            2650,
            () => {
              setFirstText(false); // Place optional callbacks anywhere in the array
              setSecondText(true); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="div"
          cursor={false}
        />
      )}
      {secondText && (
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              letterSpacing: "2px",
              color: "#fff",
              fontSize: "24px",
              textAlign: "center",
            }}
            component={TypeAnimation}
            sequence={[
              "ESTAS LISTA.......? ACA TENES. ¡FELICIDADES!",
              500,
              () => setImageStart(true)
            ]}
            wrapper="div"
            cursor={false}
          />
          <Box
            component={TypeAnimation}
            sequence={[
              "",
              6000,
              () => setSecondImageStart(true),
            ]}
            wrapper="div"
            cursor={false}
          />
          <Box
            component={TypeAnimation}
            sequence={[
              "",
              9000,
              () => setThirdImageStart(true),
            ]}
            wrapper="div"
            cursor={false}
          />
          <Box
            component={TypeAnimation}
            sequence={[
              "",
              12000,
              () => setFourthImageStart(true),
            ]}
            wrapper="div"
            cursor={false}
          />
          <Box
            component={TypeAnimation}
            sequence={[
              "",
              15000,
              () => setOpen(true),
            ]}
            wrapper="div"
            cursor={false}
          />
          {imageStart === true && <FirstImage src={firstImage} />}
          {secondImageStart === true && <SecondImage src={secondImage} />}
          {thirdImageStart === true && <ThirdImage src={thirdImage} />}
          {fourthImageStart === true && <FourthImage src={fourthImage} />}
        </Box>
      )}
      <ModalStatus open={open} variant="levelAward"/>
    </Box>
  );
};

export default Award;
