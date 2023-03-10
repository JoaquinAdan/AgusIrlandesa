import React from "react";
import { Box, styled, Typography, Modal } from "@mui/material";
import headerFlag from "../assets/flag.svg";
import medalIcon from "../assets/medal.svg";
import CustomButton from "../components/CustomButton";
import headerFlagLights from "../assets/flagLights.svg";
import { useNavigate } from "react-router-dom";

const css = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: "16px 24px",
    borderBottom: "10px solid  #d1d8ff",
    borderRadius: "21px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    minWidth: "360px",
    outline: "none",
  },
  titleContainer: {
    mt: "40px",
    fontSize: "16px",
    textAlign: "center",
    color: "#4CDAFE",
  },
  bandera: {
    position: "absolute",
    top: "-20px",
  },
  flagText: {
    position: "absolute",
    m: "auto",
    right: 0,
    left: 0,
    whiteSpace: "nowrap",
    textAlign: "center",
  },
  light: {
    position: "absolute",
    m: "auto",
    left: "-45px",
    top: "-80px",
    zIndex: "2",
  },
};
const LightsImg = styled("img")({
  "@keyframes pulsate": {
    "0%": { transform: "rotate(-2deg)", opacity: ".6" },
    "50%": { transform: "rotate(2deg)", opacity: "1" },
    "100%": { transform: "rotate(-2deg)", opacity: ".6" },
  },
  position: "absolute",
  m: "auto",
  left: "-45px",
  top: "-80px",
  zIndex: "2",
  animation: "pulsate 2s linear infinite",
});

export default function ModalSuccess({ open }) {
  const navigate = useNavigate();
  return (
    <Box>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={css.modal}>
          <Box sx={css.bandera}>
            <Box component="img" src={headerFlag} sx={{ zIndex: "4" }} />
            <LightsImg src={headerFlagLights} />
            <Box>
              <Typography
                sx={{
                  ...css.flagText,
                  color: "#fff",
                  fontSize: "24px",
                  top: 0,
                }}
              >
                WAOUH!!
              </Typography>
              <Typography
                sx={{
                  ...css.flagText,
                  top: "30px",
                  fontSize: "13px",
                  color: "#b20d78",
                }}
              >
                LO CONSEGUISTE
              </Typography>
            </Box>
          </Box>
          <Typography sx={css.titleContainer}>
            ¡BRAVO! LO HAS LOGRADO
          </Typography>
          <Box component="img" src={medalIcon} />

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
              width="230px"
              onClick={() => navigate("/loading-2")}
            >
              SIGUIENTE NIVEL
            </CustomButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
