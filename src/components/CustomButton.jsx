import React from "react";
import { Box, Typography } from "@mui/material";

export default function CustomButton({
  fontSize= "16px",
  borderRadius="8px",
  width,
  colorClaro,
  colorOscuro,
  colorClaroHover,
  colorOscuroHover,
  borderBottom,
  borderBottomHover,
  variant,
  children,
  ...props
}) {
  const css = {
    buttonBackground: {
      borderRadius: borderRadius,
      p: "5px 10px",
      borderBottom: `5px solid ${borderBottom}`,
      background: `linear-gradient(50deg, ${colorClaro}, ${colorClaro} 60%, ${colorOscuro} 60%, ${colorOscuro})`,
      width: width,
      transition: ".3s ease",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        transform: "translateY(1px)",
        background: `linear-gradient(50deg, ${colorClaroHover}, ${colorClaroHover} 60%, ${colorOscuroHover} 60%, ${colorOscuroHover})`,
        borderBottom: `5px solid ${borderBottomHover}`,
        cursor: "pointer",
      },
    },
    buttonText: {
      color: "#fff",
      fontSize: fontSize,
      textAlign: "center",
    },
  };
  return (
    <Box sx={css.buttonBackground} {...props}>
      <Typography sx={css.buttonText}>{children}</Typography>
    </Box>
  );
}
