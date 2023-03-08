import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import flagNeutral from "../assets/neutral.png";
import corazonImg from "../assets/corazon.png";
import ModalSuccess from "./ModalSuccess";
import FlagContainer from "./FlagContainer";

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
  const [flag, setFlag] = useState({ flag1: "vacio", flag2: "vacio" });
  const [lifes, setLifes] = useState(5);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // if (
    //   (flag.flag1 !== "ar" || flag.flag2 !== "ie") &&
    //   (flag.flag1 !== "ie" || flag.flag2 !== "ar") &&
    //   (flag.flag1 !== "vacio" || flag.flag2 !== "vacio") &&
    //   (flag.flag1 !== "ar" || flag.flag2 !== "vacio") &&
    //   (flag.flag1 !== "us" || flag.flag2 !== "vacio") &&
    //   (flag.flag1 !== "cl" || flag.flag2 !== "vacio") &&
    //   (flag.flag1 !== "ie" || flag.flag2 !== "vacio") &&
    //   (flag.flag1 !== "hu" || flag.flag2 !== "vacio") &&
    //   (flag.flag1 !== "bf" || flag.flag2 !== "vacio") &&
    //   (flag.flag1 !== "cy" || flag.flag2 !== "vacio") &&
    //   (flag.flag1 !== "de" || flag.flag2 !== "vacio") &&
    //   (flag.flag1 !== "vacio" || flag.flag2 !== "ar") &&
    //   (flag.flag1 !== "vacio" || flag.flag2 !== "us") &&
    //   (flag.flag1 !== "vacio" || flag.flag2 !== "cl") &&
    //   (flag.flag1 !== "vacio" || flag.flag2 !== "hu") &&
    //   (flag.flag1 !== "vacio" || flag.flag2 !== "bf") &&
    //   (flag.flag1 !== "vacio" || flag.flag2 !== "cy") &&
    //   (flag.flag1 !== "vacio" || flag.flag2 !== "de") &&
    //   (flag.flag1 !== "vacio" || flag.flag2 !== "ie")
    // ) {
    //   setLifes(lifes - 1);
    // }
    // if (
    //   (flag.flag1 === "ar" && flag.flag2 === "ie") ||
    //   (flag.flag2 === "ar" && flag.flag1 === "ie")
    // ) {
    //   setOpen(true);
    // }
    const flagsArray = ["ar", "ie"];
    if (flag.flag1 !== "vacio" || flag.flag2 !== "vacio") {
      if (flagsArray.includes(flag.flag1) && flagsArray.includes(flag.flag2)) {
        setOpen(true);
      } else if (flag.flag1 === "vacio" || flag.flag2 === "vacio") {
      } else {
        setLifes(lifes - 1);
      }
    }
  }, [flag]);

  useEffect(() => {
    lifes === 4 && alert(":( Te quedan 4 vidas");
    lifes === 3 && alert(":( Te quedan 3 vidas");
    lifes === 2 && alert(":( Te quedan 2 vidas");
    lifes === 1 && alert(":( Te quedan 1 vidas");
    lifes === 0 && alert("jaja perdiste");
  }, [lifes]);

  const handleBandera = (country) => {
    if (flag.flag1 === "vacio" && flag.flag2 === "vacio") {
      if (flag.flag1 === "vacio" && flag.flag2 !== country) {
        flag.flag1 = country;
        setFlag({ ...flag });
      }
    } else {
      if (flag.flag2 === "vacio" && flag.flag1 !== country) {
        flag.flag2 = country;
        setFlag({ ...flag });
      }
      if (flag.flag1 === "vacio" && flag.flag2 !== country) {
        flag.flag1 = country;
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
    setFlag({ ...flag });
  };
  const clearFlag2 = () => {
    flag.flag2 = "vacio";
    setFlag({ ...flag });
  };
  const clearBothFlags = () => {
    flag.flag1 = "vacio";
    flag.flag2 = "vacio";
    setFlag({ ...flag });
  };
  return (
    <Box sx={css.background}>
      <Box sx={{ position: "absolute", letterSpacing: "10px" }}>
        {lifesToSimbol?.map((lifes, i) => (
          <Box
            key={lifesToSimbol[i]}
            component="img"
            src={corazonImg}
            sx={{ width: "100px", mr: "10px" }}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          mb: "20px",
        }}
      >
        <Box sx={{ fontSize: "20px" }}>
          <Box
            component="img"
            src={flag.flag1 === "vacio" ? flagNeutral : flagImg(flag.flag1)}
            sx={css.image}
          />
          <Box onClick={clearFlag1}>X</Box>
        </Box>
        <Box sx={{ fontSize: "20px" }}>
          <Box
            component="img"
            src={flag.flag2 === "vacio" ? flagNeutral : flagImg(flag.flag2)}
            sx={css.image}
          />
          <Box onClick={clearFlag2}>X</Box>
        </Box>
        <Button onClick={clearBothFlags}>Borrar todo</Button>
      </Box>

      <Box sx={css.flagsContainer}>
        {countries.map((country) => (
          <FlagContainer
            key={country.code}
            country={country}
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
