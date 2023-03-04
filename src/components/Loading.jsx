import React from "react";
import neutralImg from "../assets/neutral.png"

const Loading = () => {
  return (
    <div style={{width: "100%", height: "100vh", display: "flex", placeContent: "center"}}>
      <img src={neutralImg} className="loading" alt="imagen de carga" />
    </div>
  );
};

export default Loading;
