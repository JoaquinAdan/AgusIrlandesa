import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import corazonImg from "../assets/corazon.png";
import hearthIcon from "../assets/hearth.svg";
import ModalSuccess from "./ModalSuccess";
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
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  flagsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    justifyItems: "center",
    alignItems: "center",
    gap: "20px",
    m: "0 150px",
  },
};
const countries = [
  { code: "ar", country: "Argentina", color: "#5984ac" },
  { code: "ie", country: "Irlanda", color: "#ff7900" },
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
  console.log(flag);
  useEffect(() => {
    const flagsArray = ["ar", "ie"];
    if (flag.flag1 !== "vacio" || flag.flag2 !== "vacio") {
      if (flagsArray.includes(flag.flag1) && flagsArray.includes(flag.flag2)) {
        setOpen(true);
      } else if (flag.flag1 === "vacio" || flag.flag2 === "vacio") {
        // console.log("No hago nada")
      } else {
        setLifes(lifes - 1);
      }
    }
  }, [flag]);

  useEffect(() => {
    lifes === 4 && console.log(":( Te quedan 4 vidas");
    lifes === 3 && console.log(":( Te quedan 3 vidas");
    lifes === 2 && console.log(":( Te quedan 2 vidas");
    lifes === 1 && console.log(":( Te quedan 1 vidas");
    lifes === 0 && console.log("jaja perdiste");
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
  return (
    <Box sx={css.background}>
      <Box sx={{ position: "absolute", letterSpacing: "10px", top: 0 }}>
        {lifesToSimbol?.map((lifes, i) => (
          <Box
            key={lifesToSimbol[i]}
            component="img"
            src={hearthIcon}
            sx={{ width: "80px", mr: "10px" }}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "15%",
          mb: "20px",
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
          mb: "60px",
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
      <ModalSuccess open={open} />
    </Box>
  );
}
