import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import ProtectedRoute 

const LevelOne = lazy(() => import('../modules/LevelOne'))
const LevelTwo = lazy(() => import('../modules/LevelTwo'))
const Invitation = lazy(() => import('../modules/Invitation'))
const Loading = lazy(() => import('../modules/Loading'))

const DefRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Invitation />} />
        <Route path="/country-fake" element={<LevelOne />} />
        <Route path="/button-level" element={<LevelTwo />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </>
  );
};

export default DefRoutes;
