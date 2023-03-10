import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import hearthIcon from "../assets/hearth.svg";
import hearthLoseIcon from "../assets/hearthLose.svg";
import ModalStatus from "./ModalStatus";
import FlagContainer from "../components/FlagContainer";
import flagNeutral from "../assets/neutral.png";
import CustomButton from "../components/CustomButton";

// https://www.banderas-mundo.es/descargar/api

const css = {
  image: {
    width: "69px",
    height: "69px",
    borderRadius: "15%",
    objectFit: "cover",
  },
  background: {
    background:
      "radial-gradient(73.29% 73.29% at 50% 26.71%, #A659FE 0%, #6F53FD 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  flagsContainer: {
    display: "grid",
    gridTemplateColumns: {xs: "repeat(2, 1fr)", lg: "repeat(4, 1fr)"},
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    gap: {xs:"10px",lg:"20px"},
    pb: {xs:"20px", lg: "0px"},
    m: {xs: "0 10px", lg: "0 150px"},
  },
};
const countries = [
  { code: "co", country: "Colombia", color: "#ffe800" },
  { code: "cn", country: "China", color: "#de2910" },
  { code: "cl", country: "Chile", color: "#0039a6" },
  { code: "us", country: "Estados Unidos", color: "#bd3d44" },
  { code: "hu", country: "Hungria", color: "#d43516" },
  { code: "br", country: "Brasil", color: "#176b2e" },
  { code: "ch", country: "Suiza", color: "#d52b1e" },
  { code: "de", country: "Alemania", color: "#000000" },
];

export default function LevelOne() {
  const [flag, setFlag] = useState({
    flag1: "vacio",
    flag1Color: "",
    flag1Name: "",
    flag2: "vacio",
    flag2Color: "",
    flag2Name: "",
  });
  const [lifes, setLifes] = useState(5);
  const [open, setOpen] = useState(false);
  const [openLose, setOpenLose] = useState(false);
  console.log(open);
  useEffect(() => {
    const flagsArray = ["ar", "ie"];
    if (flag.flag1 !== "vacio" || flag.flag2 !== "vacio") {
      if (flagsArray.includes(flag.flag1) && flagsArray.includes(flag.flag2)) {
        // console.log("No hago nada")
      } else if (flag.flag1 === "vacio" || flag.flag2 === "vacio") {
        // console.log("No hago nada")
      } else {
        setLifes(lifes - 1);
      }
    }
  }, [flag]);

  useEffect(() => {
    lifes === 4 && setOpenLose(!openLose);
    lifes === 3 && setOpenLose(!openLose);
    lifes === 2 && setOpenLose(!openLose);
    lifes === 1 && setOpenLose(!openLose);
    lifes === 0 && setOpen(true);;
  }, [lifes]);

  const handleBandera = (code, name, color) => {
    if (flag.flag1 === "vacio" && flag.flag2 === "vacio") {
      if (flag.flag1 === "vacio" && flag.flag2 !== code) {
        flag.flag1 = code;
        flag.flag1Name = name;
        flag.flag1Color = color;
        setFlag({ ...flag });
      }
    } else {
      if (flag.flag2 === "vacio" && flag.flag1 !== code) {
        flag.flag2 = code;
        flag.flag2Name = name;
        flag.flag2Color = color;
        setFlag({ ...flag });
      }
      if (flag.flag1 === "vacio" && flag.flag2 !== code) {
        flag.flag1 = code;
        flag.flag1Name = name;
        flag.flag1Color = color;
        setFlag({ ...flag });
      }
    }
  };

  const flagImg = (country) => {
    // return `https://flagcdn.com/108x81/${country}.png`;
    return `https://raw.githubusercontent.com/swantzter/square-flags/master/png/1x1/512/${country}.png`;
  };

  const lifesToSimbol =
    lifes === 5
      ? ["❤1", "❤2", "❤3", "❤4", "❤5"]
      : lifes === 4
      ? ["❤1", "❤2", "❤3", "❤4"]
      : lifes === 3
      ? ["❤1", "❤2", "❤3"]
      : lifes === 2
      ? ["❤1", "❤2"]
      : lifes === 1
      ? ["❤1"]
      : lifes === 0 && [];

  const lifesToLose =
    lifes === 5
      ? []
      : lifes === 4
      ? ["❤1"]
      : lifes === 3
      ? ["❤1", "❤2"]
      : lifes === 2
      ? ["❤1", "❤2", "❤3"]
      : lifes === 1
      ? ["❤1", "❤2", "❤3", "❤4"]
      : lifes === 0 && ["❤1", "❤2", "❤3", "❤4", "❤5"];

  const clearFlag1 = () => {
    flag.flag1 = "vacio";
    flag.flag1Name = "";
    flag.flag1Color = "";
    setFlag({ ...flag });
  };
  const clearFlag2 = () => {
    flag.flag2 = "vacio";
    flag.flag2Name = "";
    flag.flag2Color = "";
    setFlag({ ...flag });
  };
  const clearBothFlags = () => {
    flag.flag1 = "vacio";
    flag.flag1Name = "";
    flag.flag1Color = "";
    flag.flag2 = "vacio";
    flag.flag2Name = "";
    flag.flag2Color = "";
    setFlag({ ...flag });
  };
  //hearthLoseIcon
  console.log(lifesToSimbol);
  return (
    <Box sx={css.background}>
      <Typography sx={{color: "#fff", fontSize: "26px", textAlign: "center", mb: {xs: "0px",lg:"20px"}}}>SELECCIONA TUS PAÍSES</Typography>
      <Box
        sx={{
          position: {xs: "block",lg:"absolute"},
          letterSpacing: "10px",
          top: "10px",
          right: "10px",
          display: "flex",
          justifyContent: "center",
          mb: "10px"
        }}
      >
        {lifesToLose.map(() => (
          <Box component="img" src={hearthLoseIcon} sx={{ mr: "10px" }} />
        ))}
        {lifesToSimbol?.map((lifes, i) => (
          <Box
            key={lifesToSimbol[i]}
            component="img"
            src={hearthIcon}
            onClick={() => console.log(lifesToSimbol.length)}
            sx={{ mr: "10px" }}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: {xs: "25px",lg:"15%"},
          mb: {xs: "10px",lg: "20px"},
        }}
      >
        <FlagContainer
          flagColor={flag.flag1Color}
          flagName={flag.flag1Name}
          flagToShow={flag.flag1 === "vacio" ? flagNeutral : flag.flag1}
          flagImg={flagImg}
          handleBandera={handleBandera}
          variant="seleccionado"
          clearFlag={clearFlag1}
        />
        <FlagContainer
          flagColor={flag.flag2Color}
          flagName={flag.flag2Name}
          flagToShow={flag.flag2 === "vacio" ? flagNeutral : flag.flag2}
          flagImg={flagImg}
          handleBandera={handleBandera}
          variant="seleccionado"
          clearFlag={clearFlag2}
        />
      </Box>
      <Box
        sx={{
          alignSelf: "center",
          background: "#ffffff5e",
          p: "2.5px 2.6px",
          borderRadius: "8px",
          mb: {xs:"10px",lg:"60px"},
        }}
      >
        <Box
          sx={{
            borderBottom: "4px solid  #9f2e30",
            borderRadius: "8px",
            p: "3px",
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
            onClick={clearBothFlags}
          >
            Borrar todo
          </CustomButton>
        </Box>
      </Box>
      <Box sx={css.flagsContainer}>
        {countries.map((country) => (
          <FlagContainer
            key={country.code}
            flagColor={country.color}
            flagName={country.country}
            flagToShow={country.code}
            flagImg={flagImg}
            handleBandera={handleBandera}
          />
        ))}
      </Box>

      {openLose ? (
        <ModalStatus
          lifes={lifes}
          setOpen={setOpenLose}
          open={openLose}
          variant="levelOneError"
        />
      ) : open ? (
        <ModalStatus open={open} variant="levelOneSuccess"/>
      ) : null}
    </Box>
  );
}
