import "./App.css";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

export default function App() {
  const [flag, setFlag] = useState({ flag1: "vacio", flag2: "vacio" });
  const [lifes, setLifes] = useState(5);
  console.log(flag);
  console.log(lifes);
  console.log("hola jeje");
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
      alert("yes");
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
    return `https://flagcdn.com/108x81/${country}.webp`;
  };

  const lifesToSimbol =
    lifes === 5
      ? "xxxxx"
      : lifes === 4
      ? "xxxx"
      : lifes === 3
      ? "xxx"
      : lifes === 2
      ? "xx"
      : lifes === 1 && "x";

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
          {flag.flag1}
          <Box onClick={clearFlag1}>X</Box>
        </Box>
        <Box sx={{ fontSize: "20px" }}>
          {flag.flag2}
          <Box onClick={clearFlag2}>X</Box>
        </Box>
      </Box>
      <Box>
        <Box value="ar" onClick={() => handleBandera("ar")}>
          ar
          <Box component="img" src={flagImg("ar")} />
        </Box>
        <Box value="ie" onClick={() => handleBandera("ie")}>
          ie
          <Box component="img" src={flagImg("ie")} />
        </Box>
        <Box value="cl" onClick={() => handleBandera("cl")}>
          cl
          <Box component="img" src={flagImg("cl")} />
        </Box>
        <Box value="us" onClick={() => handleBandera("us")}>
          us
          <Box component="img" src={flagImg("us")} />
        </Box>
      </Box>
    </Box>
  );
}
