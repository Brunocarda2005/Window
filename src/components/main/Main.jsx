"use client";
import { useContext, useEffect, useRef } from "react";
import Context from "../Context/Context";
import Aplications from "../aplication/Aplication";
import Header from "../HeaderNav/Header";
import Background from "../background/background";
import Window from "../apps/window/Window";
import UserHome from "../apps/userHome/UserHome";
import "../../app/Window.css";

export default function MainNav({ children }) {
  const { StateGlobal } = useContext(Context);
  const WidthElement = useRef(null);
  const FontSize = ["0.5em", "0.6em", "0.7em", "0.8em"];
  const FontWeight = ["200", "400", "600", "800"];
  const FontShadow = [
    "0 0 3px #000",
    "0 0 4px #000",
    "0 0 5.5px #000",
    "0 0 10px #000",
  ];

  useEffect(() => {}, [WidthElement]);

  const responsive = () => {
    let width = WidthElement.current.offsetWidth;

    if (StateGlobal.aplications.expand) {
    }
  };

  return (
    <main
      className={`app ${StateGlobal.Config.colorChangeDayNight}`}
      style={{
        "--color-secundarioW": StateGlobal.Config.colorSecundarioW,
        "--color-secundarioBarra": StateGlobal.Config.colorBarra,
        "--Font-size": FontSize[StateGlobal.Config.Font.size],
        "--Font-weight": FontWeight[StateGlobal.Config.Font.weight],
        "--Font-shadow": FontShadow[StateGlobal.Config.Font.shadow],
      }}
      ref={WidthElement}
    >
      <Background />
      <UserHome />
      <Aplications use={"window"} />
      {children}
      <Header />
      <Window />
    </main>
  );
}
