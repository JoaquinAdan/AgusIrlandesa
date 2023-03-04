import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import ProtectedRoute 

const LevelOne = lazy(() => import('../components/LevelOne'))
const LevelTwo = lazy(() => import('../components/LevelTwo'))

const DefRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LevelOne />} />
        <Route path="/button-level" element={<LevelTwo />} />
      </Routes>
    </>
  );
};

export default DefRoutes;
