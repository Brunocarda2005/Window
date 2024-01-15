"use client";
import Context from "../../Context/Context";
import { useContext } from "react";
import useSelect from "../../hooks/select/UseSelect";

export default function AppComponent(params) {
  const { StateGlobal } = useContext(Context); // context para class
  const { Select } = useSelect(); // hook para seleccionar app

  const selectApp = () => Select(params.name); // seleccionar una app, en este caso carpetas de juegos
  console.log(params.name);
  let style = {
    top: `${StateGlobal.app.y}px`,
    left: `${StateGlobal.app.x}px`,
  }; // estilos que cambian para poder mover el elemento

  return (
    <main
      className={`app__${params.name}
                  app_exp-${params.data[1]} 
                  app_${params.data[0]}`}
      id={`app_${params.data[0]}`}
      onFocus={selectApp}
      style={style}
    >
      {params.children}
    </main>
  );
}
