import React from "react";
import "./Loader.scss";
import LogoIcon from "components/icons/LogoIcon";
import { useEffect } from "react";

function Loader() {
  useEffect(() => {
    const logo = document.getElementById("logo");
    const logoPaths = document.querySelectorAll("#logo path");
    let delay = 0.2;
    const delayOffset = 0.02;
    for (let i = 0; i < logoPaths.length; i++) {
      logoPaths[i].style.strokeDasharray = logoPaths[i].getTotalLength();
      logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
      logoPaths[i].style.webkitAnimation = `line-anim 1s ease forwards ${delay}s`;
      if (logoPaths[i].id === "colored") {
        logoPaths[i].style.webkitAnimation = `fill-purple 1s ease forwards 3s`;
      }
      delay += delayOffset;
    }
    logo.style.webkitAnimation = "fill-white 0.5s ease forwards 2s, fade-out 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards 4.5s";
  }, []);

  return (
    <div className="Loader">
      <div className="Container">
        <LogoIcon />
      </div>
    </div>
  );
}

export default Loader;
