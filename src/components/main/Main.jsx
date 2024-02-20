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

  useEffect(() => {}, [WidthElement]);

  const responsive = () => {
    let width = WidthElement.current.offsetWidth

    if (StateGlobal.aplications.expand) {
      
    }
  };

  return (
    <main
      className={`app ${StateGlobal.Config.colorChangeDayNight}`}
      style={{
        "--color-secundarioW": StateGlobal.Config.colorSecundarioW,
        "--color-secundarioBarra": StateGlobal.Config.colorBarra,
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
