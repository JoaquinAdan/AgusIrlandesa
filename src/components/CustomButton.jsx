import React from "react";
import { Box, Typography } from "@mui/material";

export default function CustomButton({ variant,children, ...props }) {
  const css = {
    buttonBackground: {
      borderRadius: "8px",
      p: "5px 10px",
      borderBottom: variant !== "eliminar" ? "5px solid #08B9FF" : "5px solid #c34444",
      background: variant !== "eliminar" ? "linear-gradient(50deg, #70e0fd, #70e0fd 60%, #4CDAFE 60%, #4CDAFE)" : "linear-gradient(50deg, #fe5959, #fe5959 60%, #e74f4f 60%, #e74f4f)",
      width: variant !== "eliminar" ? "113px" : "auto",
      transition: ".3s ease",
      height: "100%",
      "&:hover": {
        transform: "translateY(1px)",
        background: variant !== "eliminar" ? "linear-gradient(50deg, #66cde7, #66cde7 60%, #3caecb 60%, #3caecb)" : "linear-gradient(50deg, #e74f4f, #e74f4f 60%, #d54848 60%, #d54848)",
        borderBottom: variant !== "eliminar" ? "5px solid #0694cc":"5px solid #b33e3e",
        cursor: "pointer",
      },
    },
    buttonText: {
      color: "#fff",
      fontSize: variant === "eliminar" ? "20px" : "16px",
      textAlign: "center",
    },
  };
  return (
    <Box sx={css.buttonBackground} {...props}>
      <Typography sx={css.buttonText}>{children}</Typography>
    </Box>
  );
}
