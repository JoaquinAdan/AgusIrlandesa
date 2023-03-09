import React from "react";
import giftBox from "../assets/giftBox.svg";
import CustomButton from "../components/CustomButton";
import interrogationBox from "../assets/interrogationBox.svg";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const css = {
  background: {
    background:
      "radial-gradient(73.29% 73.29% at 50% 26.71%, #A659FE 0%, #6F53FD 100%)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "50%",
    height: "60%",
    background: "#FFFEFF",
    borderBottom: "10px solid  #d1d8ff",
    boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.25)",
    borderRadius: "21px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
  },
  invitationText: {
    fontSize: "32px",
    textAlign: "center",
  },
  titleContainer: {
    background: "#4CDAFE",
    width: "591px",
    height: "63px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "19px",
  },
};

const InterrogationIcon = styled("img")({
  "@keyframes pulsate": {
    "0%": { transform: "rotate(-10deg) scale(.8)" },
    "50%": { transform: "rotate(10deg) scale(1)" },
    "100%": { transform: "rotate(-10deg) scale(.8)" },
  },
  position: "absolute",
  left: "45px",
  top: "-32px",
  right: 0,
  animation: "pulsate 2s linear infinite",
});

const Invitation = () => {
  const navigate = useNavigate()
  return (
    <Box sx={css.background}>
      <Box sx={css.container}>
        <Box sx={css.titleContainer}>
          <Typography sx={{ ...css.invitationText, color: "#FFFFFF" }}>
            HOLA, AGUSTINA
          </Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Box component="img" src={giftBox} />
          <InterrogationIcon src={interrogationBox} />
        </Box>
        <Typography
          sx={{ ...css.invitationText, color: "#4CDAFE", width: "433px" }}
        >
          TE HAN INVITADO A JUGAR A IRISH AGUS
        </Typography>
        <Box
          sx={{
            borderBottom: "4px solid  #d9d8d9",
            borderRadius: "50px",
            p: "3px",
            height: "50px",
          }}
        >
          <CustomButton
            borderRadius="50px"
            colorClaro="#86ef04"
            colorOscuro="#67eb00"
            colorClaroHover="#7bdd03"
            colorOscuroHover="#57c501"
            borderBottom="#4ec307"
            borderBottomHover="#41a306"
            fontSize="24px"
            width="118px"
            onClick={() => navigate("/country-fake")}
          >
            PLAY
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Invitation;
