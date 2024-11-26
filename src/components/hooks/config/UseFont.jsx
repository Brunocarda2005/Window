"use client";
import Context from "../../Context/Context";
import { useContext } from "react";

export default function UseConfigFont() {
  const { StateGlobal, setStateGlobal } = useContext(Context);

  const ChangeConfigFont = (e) => {
    let value = e.target.value;

    setStateGlobal((prevData) => ({
      ...prevData,
      Config: {
        colorSecundarioW: StateGlobal.Config.colorSecundarioW,
        colorBarra: StateGlobal.Config.colorBarra,
        Font: {
          size:
            e.target.id === "Size" ? `${value}` : StateGlobal.Config.Font.size,
          weight:
            e.target.id === "Weight"
              ? `${value}`
              : StateGlobal.Config.Font.weight,
          shadow:
            e.target.id === "Contrast"
              ? `${value}`
              : StateGlobal.Config.Font.shadow,
        },
      },
    }));
  };

  return { ChangeConfigFont, StateGlobal };
}
