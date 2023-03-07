import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "./utils/theme";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme(lightTheme)}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
