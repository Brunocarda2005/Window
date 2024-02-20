"use client";
import { useContext } from "react";
import Context from "../../Context/Context";

export default function useClose() {
  const { StateGlobal, setStateGlobal } = useContext(Context);
  const Close = (cl, exp, nameApp) => {
    if (exp) {
      setStateGlobal({
        app: {
          x: 0,
          y: 0,
          app: nameApp,
          data: StateGlobal.app.data,
        },
        aplications: {
          google: nameApp === "google" ? cl : StateGlobal.aplications.google,
          text: nameApp === "text" ? cl : StateGlobal.aplications.text,
          configure:
            nameApp === "config" ? cl : StateGlobal.aplications.configure,
          games: nameApp === "folder" ? cl : StateGlobal.aplications.games,
          window: nameApp === "window" ? !cl : StateGlobal.aplications.window,
          expand: true,
        },
        Google: StateGlobal.Google,
        Config: StateGlobal.Config,
      });
    } else {
      setStateGlobal((prev) => ({
        ...prev,
        aplications: {
          google: nameApp === "google" ? cl : StateGlobal.aplications.google,
          text: nameApp === "text" ? cl : StateGlobal.aplications.text,
          configure:
            nameApp === "config" ? cl : StateGlobal.aplications.configure,
          games: nameApp === "folder" ? cl : StateGlobal.aplications.games,
          window: nameApp === "window" ? !cl : StateGlobal.aplications.window,
          expand: false,
        },
        Google: StateGlobal.Google,
        Config: StateGlobal.Config,
      }));
    }
  };
  return { Close, StateGlobal };
}
