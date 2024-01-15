"use client";
import { useState } from "react";
import Context from "./Context";

export default function UseState(params) {
  const [StateGlobal, setStateGlobal] = useState({
    app: {
      x: 100,
      y: 100,
      app: "portofolio",
    },
    aplications: {
      google: [true, false],
      text: [false, false, "Explication"],
      configure: [false, false],
      games: [false, false, 0],
      window: [false, false],
    },
    Google: {
      Instagram: {
        Imgs: [],
        state: false,
        interaction: {},
      },
      linkedin: {
        img: "react.svg",
        stats: "",
      },
      portofolio: {
        des: "Hace casi un año comencé a practicar con React, la cantidad de herramientas que te otorga es increíble, sumado a su baja curva de aprendizaje hace que sea de lo más cómodo para trabajar.",
        level: "intermediate",
        img: "/_next/static/media/react.34ec7d27.svg",
        alt: "react bruno cardamone vite github",
      },
    },
  });

  return (
    <Context.Provider
      value={{
        StateGlobal,
        setStateGlobal,
      }}
    >
      {params.children}
    </Context.Provider>
  );
}
