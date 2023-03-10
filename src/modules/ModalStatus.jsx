import React from "react";
import { Box, styled, Typography, Modal } from "@mui/material";
import headerFlag from "../assets/flag.svg";
import hearthLose from "../assets/hearthLose.svg";
import medalIcon from "../assets/medal.svg";
import sadEmoji from "../assets/sadEmoji.svg";
import logo from "../assets/logo.png";
import Trophy from "../assets/Trophy.svg";
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
    p: { xs: "16px 0px", lg: "16px 24px" },
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

export default function ModalStatus({ lifes, setOpen, open, variant }) {
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
            <Box
              component="img"
              src={headerFlag}
              sx={{
                zIndex: "4",
                transform: { xs: "scale(.9)", lg: "scale(1)" },
              }}
            />
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
                {variant === "levelOneError" &&
                  (lifes !== 0 ? "OH NO" : "HAS FALLADO")}
                {variant === "levelThreeError" &&
                  (lifes !== 0 ? "OH NO" : "HAS FALLADO")}
                {variant === "levelOneSuccess" && ":)"}
                {variant === "levelThreeSuccess" && "??FELICITACIONES!"}
                {variant === "levelTwoSuccess" && "??GENIAL!"}
                {variant === "levelTwoError" && "UPS..."}
                {variant === "levelAward" && "??CONGRATULATIONS!"}
              </Typography>
              <Typography
                sx={{
                  ...css.flagText,
                  top: "30px",
                  fontSize: "13px",
                  color: "#b20d78",
                }}
              >
                {variant === "buttonsError" && "SIGUE INTENTANDO Y LO LOGRAR??S"}
                {variant === "levelOneError" &&
                  (lifes !== 0 ? "HAS PERDIDO UNA VIDA" : "YA NO QUEDAN VIDAS")}
                {variant === "levelThreeError" &&
                  (lifes !== 0 ? "HAS PERDIDO UNA VIDA" : "YA NO QUEDAN VIDAS")}
                {variant === "levelOneSuccess" && "JAJA XD"}
                {variant === "levelThreeSuccess" && "LO CONSEGUISTE"}
                {variant === "levelTwoSuccess" && "SAB??A QUE LO LOGRAR??AS"}
                {variant === "levelTwoError" && "ESE NO ERA"}
                {variant === "levelAward" && "ADEM??S DE ARGENTINA"}
              </Typography>
            </Box>
          </Box>
          <Typography sx={css.titleContainer}>
            {variant === "levelOneError" &&
              (lifes !== 0
                ? `TRANQUILA, ??TODAV??A TE QUEDAN ${lifes} VIDAS!`
                : "TE QUEDASTE SIN VIDAS, PERO...")}
            {variant === "levelThreeError" &&
              (lifes !== 0
                ? `TRANQUILA, ??TODAV??A TE QUEDAN ${lifes} VIDAS!`
                : "TE QUEDASTE SIN VIDAS, PERO...")}
            {variant === "levelOneSuccess" && "GANASTE PORQUE ESTO ERA TROLL"}
            {variant === "levelThreeSuccess" &&
              "??BRAVO! YA PUEDES RECIBIR TU PREMIO"}
            {variant === "levelTwoError" && "SIGUE INTENTANDO Y LO LOGRAR??S"}
            {variant === "levelTwoSuccess" && "AQU?? EST?? TU TROFEO"}
            {variant === "levelAward" && "YA ERES..."}
          </Typography>
          {variant === "levelOneError" &&
            (lifes !== 0 ? (
              <Box component="img" src={hearthLose} />
            ) : (
              <Box sx={{ display: "flex" }}>
                {[1, 2, 3, 4, 5].map(() => (
                  <Box component="img" src={hearthLose} />
                ))}
              </Box>
            ))}
          {variant === "levelThreeError" &&
            (lifes !== 0 ? (
              <Box component="img" src={hearthLose} />
            ) : (
              <Box sx={{ display: "flex" }}>
                {[1, 2, 3, 4, 5].map(() => (
                  <Box component="img" src={hearthLose} />
                ))}
              </Box>
            ))}
          {variant === "levelOneSuccess" && (
            <Box component="img" src={medalIcon} />
          )}
          {variant === "levelAward" && <Box component="img" src={logo} />}
          {variant === "levelThreeSuccess" && (
            <Box component="img" src={medalIcon} />
          )}
          {variant === "levelTwoSuccess" && (
            <Box component="img" src={Trophy} />
          )}
          {variant === "levelTwoError" && (
            <Box component="img" src={sadEmoji} />
          )}
          {variant !== "levelAward" ? (
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
                onClick={() => {
                  variant === "levelOneError" &&
                    (lifes !== 0 ? setOpen(!open) : navigate("/loading-1"));
                  variant === "levelThreeError" &&
                    (lifes !== 0 ? setOpen(!open) : window.location.reload());
                  variant === "levelOneSuccess" && navigate("/loading-2");
                  variant === "levelThreeSuccess" && navigate("/loading-4");
                  variant === "levelTwoSuccess" && navigate("/loading-3");
                  variant === "levelTwoError" && setOpen(false);
                }}
              >
                {variant === "levelOneError" &&
                  (lifes !== 0 ? "PRUEBA OTRA VEZ" : "JUEGA DE NUEVO")}
                {variant === "levelThreeError" &&
                  (lifes !== 0 ? "PRUEBA OTRA VEZ" : "JUEGA DE NUEVO")}
                {variant === "levelOneSuccess" && "SIGUIENTE NIVEL"}
                {variant === "levelThreeSuccess" && "RECIBIR RECOMPENSA"}
                {variant === "levelTwoSuccess" && "SIGUIENTE NIVEL"}
                {variant === "levelTwoError" && "PRUEBA OTRA VEZ"}
              </CustomButton>{" "}
            </Box>
          ) : (
            <Typography sx={{...css.titleContainer, mt: "0px"}}>TE AMAMOS</Typography>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
