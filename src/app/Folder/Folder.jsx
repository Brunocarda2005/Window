import { useContext, useRef } from "react";
import "./folder.css";
import "../../../static/css/animations.css";
import Context from "../../Context/Context";
import HeaderFolder from "./headerFolder/HeaderFolder";
import useSelect from "../../hooks/select/useSelect";
import ContentFolder from "./content/ContentFolder";
import imgFolder from "../../../static/svg/folder.svg";
import { useState } from "react";

export default function Folder() {
  const { StateGlobal } = useContext(Context); // context para class
  const { Select } = useSelect(); // hook para seleccionar app
  const Element = useRef(null); // principalmente el width para poder hacer calculos en el movimiento
  const [icone, setIcone] = useState({
    img: imgFolder,
    name: "Games"
  }); // icone

  const selectApp = () => Select("games"); // seleccionar una app, en este caso carpetas de juegos
  let style = {
    top: `${StateGlobal.app.y}px`,
    left: `${StateGlobal.app.x}px`,
  }; // estilos que cambian para poder mover el elemento

  return (
    <main
      className={`app__folder 
                  folder_exp-${StateGlobal.aplications.games[1]} 
                  folder_${StateGlobal.aplications.games[0]}`}
      onFocus={selectApp}
      style={style}
      ref={Element}
    >
      <HeaderFolder Width={Element} icone={icone} />
      <ContentFolder Icone={setIcone} />
    </main>
  );
}
