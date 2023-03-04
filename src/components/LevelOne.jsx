import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import flagNeutral from "../assets/neutral.png";
import ModalSuccess from "./ModalSuccess";

// https://www.banderas-mundo.es/descargar/api

export default function LevelOne() {
  const [flag, setFlag] = useState({ flag1: "vacio", flag2: "vacio" });
  const [lifes, setLifes] = useState(5);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (
      (flag.flag1 !== "ar" || flag.flag2 !== "ie") &&
      (flag.flag1 !== "ie" || flag.flag2 !== "ar") &&
      (flag.flag1 !== "vacio" || flag.flag2 !== "vacio") &&
      (flag.flag1 !== "ar" || flag.flag2 !== "vacio") &&
      (flag.flag1 !== "us" || flag.flag2 !== "vacio") &&
      (flag.flag1 !== "cl" || flag.flag2 !== "vacio") &&
      (flag.flag1 !== "ie" || flag.flag2 !== "vacio") &&
      (flag.flag1 !== "vacio" || flag.flag2 !== "ar") &&
      (flag.flag1 !== "vacio" || flag.flag2 !== "us") &&
      (flag.flag1 !== "vacio" || flag.flag2 !== "cl") &&
      (flag.flag1 !== "vacio" || flag.flag2 !== "ie")
    ) {
      setLifes(lifes - 1);
    }
    if (
      (flag.flag1 === "ar" && flag.flag2 === "ie") ||
      (flag.flag2 === "ar" && flag.flag1 === "ie")
    ) {
      setOpen(true);
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
    return `https://flagcdn.com/108x81/${country}.png`;
  };

  const lifesToSimbol =
    lifes === 5
      ? "❤❤❤❤❤"
      : lifes === 4
      ? "❤❤❤❤"
      : lifes === 3
      ? "❤❤❤"
      : lifes === 2
      ? "❤❤"
      : lifes === 1 && "❤";

  const clearFlag1 = () => {
    flag.flag1 = "vacio";
    setFlag({ ...flag });
  };
  const clearFlag2 = () => {
    flag.flag2 = "vacio";
    setFlag({ ...flag });
  };
  return (
    <Box className="App">
      <Box sx={{ position: "absolute", letterSpacing: "10px" }}>
        {lifesToSimbol}
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
          />
          <Box onClick={clearFlag1}>X</Box>
        </Box>
        <Box sx={{ fontSize: "20px" }}>
          <Box
            component="img"
            src={flag.flag2 === "vacio" ? flagNeutral : flagImg(flag.flag2)}
          />
          <Box onClick={clearFlag2}>X</Box>
        </Box>
      </Box>
      <Box>
        <Box value="ar" onClick={() => handleBandera("ar")}>
          <Box component="img" src={flagImg("ar")} />
        </Box>
        <Box value="ie" onClick={() => handleBandera("ie")}>
          <Box component="img" src={flagImg("ie")} />
        </Box>
        <Box value="cl" onClick={() => handleBandera("cl")}>
          <Box component="img" src={flagImg("cl")} />
        </Box>
        <Box value="us" onClick={() => handleBandera("us")}>
          <Box component="img" src={flagImg("us")} />
        </Box>
      </Box>
      <ModalSuccess open={open} />
    </Box>
  );
}
