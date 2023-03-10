import { useState, useEffect, Suspense } from 'react';
import DefRoutes from "./utils/routes";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Loading from "./modules/Loading";
import "./App.css";

function App() {
const [loading, setLoading] = useState(true);
const [showFallback, setShowFallback] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowFallback(true);
  }, 2000); // tiempo mínimo de 1 segundo

  return () => clearTimeout(timer);
}, []);
  return (
    <BrowserRouter>
      <CssBaseline />
      <Suspense fallback={showFallback ? <Loading /> : null }>
        <DefRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;