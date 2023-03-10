import React from "react";
import { Box, Typography } from "@mui/material";
import PlusIcon from "../assets/plus.svg";
import CrossIcon from "../assets/cross.svg";
import CustomButton from "./CustomButton";

const FlagContainer = ({
  flagImg,
  handleBandera,
  flagToShow,
  flagColor,
  flagName,
  variant,
  clearFlag,
}) => {
  const css = {
    image: {
      width: variant === "seleccionado" ? "113px" : "69px",
      height: variant === "seleccionado" ? "113px" : "69px",
      borderRadius: "15%",
      objectFit: "cover",
      mb: variant === "seleccionado" && "15px",
    },
    flagContainer: {
      background: "#fff",
      p: {xs: "10px",lg:"20px"},
      borderRadius: "21px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: {xs: "10px",lg:"20px"},
      borderBottom: "5px solid  #D1D8FF",
      minWidth: {xs: "160px",lg:"254px"},
      minHeight: {xs: "190px",lg:"230px"},
    },
    title: {
      color: "#fff",
      fontSize: "18px",
      alignSelf: "flex-start",
    },
    buttonContainer: {
      borderBottom: "4px solid  #d9d8d9",
      borderRadius: "8px",
      p: "3px",
    },
  };
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
              width: {xs:"140px", lg:"214px"},
              
              position: "relative",
            }}
          >
            <Typography sx={css.title}>{flagName}</Typography>
            {variant === "seleccionado" && (
              <Box
                sx={{
                  position: "absolute",
                  right: "-5px",
                  top: "-5px",
                  background: flagColor,
                  width: "37px",
                  height: "37px",
                  borderRadius: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "5px solid #fff",
                  cursor: "pointer",
                  transition: ".3s ease",
                  "&:hover": {
                    boxShadow: "#00000050 3px 3px 6px 0px inset, #22222250 -3px -3px 6px 1px inset"
                  },
                }}
                onClick={clearFlag}
              >
                <Box component="img" src={CrossIcon} alt={"Select flag"} />
              </Box>
            )}
          </Box>
          <Box
            component="img"
            src={flagImg(flagToShow)}
            alt={flagName || "no flag"}
            sx={css.image}
          />
          {variant !== "seleccionado" && (
            <Box sx={css.buttonContainer}>
              <CustomButton
                colorClaro="#70e0fd"
                colorOscuro="#4CDAFE"
                colorClaroHover="#66cde7"
                colorOscuroHover="#3caecb"
                borderBottom="#08B9FF"
                borderBottomHover="#0694cc"
                width="113px"
                onClick={() => handleBandera(flagToShow, flagName, flagColor)}
              >
                SELECCIONAR
              </CustomButton>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default FlagContainer;
