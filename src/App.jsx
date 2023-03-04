import { Suspense } from "react";
import DefRoutes from "./utils/routes";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Suspense fallback={<Loading />}>
        <DefRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;