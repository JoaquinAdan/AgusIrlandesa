import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import ProtectedRoute 

const LevelOne = lazy(() => import('../modules/LevelOne'))
const LevelTwo = lazy(() => import('../modules/LevelTwo'))
const LevelThree = lazy(() => import('../modules/LevelThree'))
const Invitation = lazy(() => import('../modules/Invitation'))
const LoadingLevelInitial = lazy(() => import('../modules/loadings/LoadingLevelInitial'))
const LoadingOne = lazy(() => import('../modules/loadings/LoadingLevelOne'))
const LoadingTwo = lazy(() => import('../modules/loadings/LoadingLevelTwo'))
const LoadingThree = lazy(() => import('../modules/loadings/LoadingLevelThree'))
const LoadingAward = lazy(() => import('../modules/loadings/LoadingLevelAward'))
const Award = lazy(() => import('../modules/Award'))

const DefRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoadingLevelInitial />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/loading-1" element={<LoadingOne />} />
        <Route path="/loading-2" element={<LoadingTwo />} />
        <Route path="/loading-3" element={<LoadingThree />} />
        <Route path="/loading-4" element={<LoadingAward />} />
        <Route path="/country-fake" element={<LevelOne />} />
        <Route path="/button-level" element={<LevelTwo />} />
        <Route path="/country-real" element={<LevelThree />} />
        <Route path="/award" element={<Award />} />
      </Routes>
    </>
  );
};

export default DefRoutes;
