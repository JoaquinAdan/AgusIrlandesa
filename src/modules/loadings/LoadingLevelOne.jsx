import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import { Box, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

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
  textAnimation: {
    color: "#bc93ff",
    fontSize: "16px",
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
const LoadingOne = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/country-fake")
    }, 4500);
  }, [])
  
  return (
    <Box sx={css.background}>
      <Box component="img" src={logo} />
      <Box sx={css.textContainer}>
        <Typography sx={{ ...css.textAnimation, mr: "3px", ml: "40px" }}>
          LOADING
        </Typography>
        <Box
          sx={{ ...css.textAnimation, letterSpacing: "2px", width: "32px" }}
          component={TypeAnimation}
          sequence={[
            ".", // Types 'One'
            250, // Waits 1s
            "..", // Deletes 'One' and types 'Two'
            250, // Waits 2s
            "...", // Types 'Three' without deleting 'Two'
            250, // Waits 2s
            "....", // Types 'Three' without deleting 'Two'
            250, // Waits 2s
            ".....", // Types 'Three' without deleting 'Two'
            250,
            "......", // Types 'Three' without deleting 'Two'
            250,
            () => {
              console.log("Done typing!"); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="div"
          cursor={false}
          repeat={Infinity}
        />
      </Box>
    </Box>
  );
};

export default LoadingOne;
