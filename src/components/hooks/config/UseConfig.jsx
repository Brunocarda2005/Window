"use client";
import Context from "../../Context/Context";
import { useContext } from "react";

export default function UseConfig() {
  const { StateGlobal, setStateGlobal } = useContext(Context);

  const ConfigChange = (colorConfig, barraConfig, dayConfig) => {
    setStateGlobal((prevData) => ({
      ...prevData,
      Config: {
        Font: {
          size: StateGlobal.Config.Font.size,
          weight: StateGlobal.Config.Font.weight,
          shadow: StateGlobal.Config.Font.shadow,
        },
        colorSecundarioW:
          colorConfig != "" ? colorConfig : StateGlobal.Config.colorSecundarioW,
        colorBarra:
          barraConfig != "" ? barraConfig : StateGlobal.Config.colorBarra,
        colorChangeDayNight:
          dayConfig != "" ? dayConfig : StateGlobal.Config.colorChangeDayNight,
      },
    }));
  };

  return { StateGlobal, ConfigChange };
}
