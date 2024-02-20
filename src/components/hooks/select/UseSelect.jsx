"use client";
import { useContext } from "react";
import Context from "../../Context/Context";

export default function useSelect() {
  const { StateGlobal, setStateGlobal } = useContext(Context);

  const Select = (name) => {
    setStateGlobal({
      app: {
        x: StateGlobal.app.x,
        y: StateGlobal.app.y,
        app: name,
        data: StateGlobal.app.data
      },
      aplications: StateGlobal.aplications,
      Google: StateGlobal.Google,
      Config: StateGlobal.Config
    });
  };

  return {Select}
}
