"use client";
import { useState } from "react";
import Context from "./Context";

export default function UseState(params) {
  const [StateGlobal, setStateGlobal] = useState({
    app: {
      x: 10,
      y: 10,
      app: "off",
      data: {
        name: "",
        password: "",
      },
    },
    aplications: {
      google: false,
      text: false,
      configure: false,
      games: false,
      window: false,
      expand: false,
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
    Config: {
      colorSecundarioW: "#5c77ff",
      colorBarra: "#5c77ff90",
      Font: {
        size: 0,
        weight: 0,
        shadow: 0,
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
