import React from "react";
import { Box, Typography } from "@mui/material";
import PlusIcon from "../assets/plus.svg";

const css = {
  image: {
    width: "69px",
    height: "69px",
    borderRadius: "15%",
    objectFit: "cover",
  },
  flagContainer: {
    background: "#fff",
    p: "20px",
    borderRadius: "21px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    borderBottom: "5px solid  #D1D8FF",
    minWidth: "254px",
    minHeight: "229px",
  },
  title: {
    color: "#fff",
    fontSize: "18px",
  },
  buttonContainer: {
    borderBottom: "4px solid  #d9d8d9",
    borderRadius: "8px",
    p: "3px",
  },
  buttonBackground: {
    borderRadius: "8px",
    p: "5px 10px",
    borderBottom: "5px solid #08B9FF",
    background:
      "linear-gradient(50deg, #70e0fd, #70e0fd 60%, #4CDAFE 60%, #4CDAFE)",
    width: "113px",
    transition: ".3s ease",
    "&:hover": {
      transform: "translateY(1px)",
      background:
        "linear-gradient(50deg, #66cde7, #66cde7 60%, #3caecb 60%, #3caecb)",
      borderBottom: "5px solid #0694cc",
      cursor: "pointer",
    },
  },
  buttonText: {
    color: "#fff",
    fontSize: "16px",
  },
};

const FlagContainer = ({
  flagImg,
  handleBandera,
  flagToShow,
  flagColor,
  flagName,
}) => {
  return (
    <Box sx={css.flagContainer}>
      {flagColor === "" || flagName === "" ? (
        <Box sx={{ display: "grid", placeContent: "center" }}>
          <Box component="img" src={PlusIcon} alt={"Select flag"} />
        </Box>
      ) : (
        <>
          <Box
            sx={{
              background: flagColor,
              borderRadius: "25px",
              textAlign: "center",
              width: "214px",
            }}
          >
            <Typography sx={css.title}>{flagName}</Typography>
          </Box>
          <Box
            component="img"
            src={flagImg(flagToShow)}
            alt={flagName || "no flag"}
            sx={css.image}
          />
          <Box sx={css.buttonContainer}>
            <Box
              sx={css.buttonBackground}
              onClick={() => handleBandera(flagToShow, flagName, flagColor)}
            >
              <Typography sx={css.buttonText}>SELECCIONAR</Typography>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default FlagContainer;
