"use client";
import Context from "../../Context/Context";
import { useContext } from "react";
import useSelect from "../../hooks/select/UseSelect";

export default function AppComponent(params) {
  const { StateGlobal } = useContext(Context); // context para class
  const { Select } = useSelect(); // hook para seleccionar app

  const selectApp = () => Select(params.name); // seleccionar una app, en este caso carpetas de juegos
  let style = {
    top: `${StateGlobal.app.y}px`,
    left: `${StateGlobal.app.x}px`,
  }; // estilos que cambian para poder mover el elemento

  return (
    <main
      className={`app__${params.name}
                  app_exp-${StateGlobal.aplications.expand} 
                  app_${params.data}`}
      id={`app_${params.data}`}
      onFocus={selectApp}
      style={style}
    >
      {params.children}
    </main>
  );
}
