"use client";
import { useContext, useEffect, useState } from "react";
import Context from "../../Context/Context";

export default function useMove(width) {
  const { StateGlobal, setStateGlobal } = useContext(Context);
  const [moveAct, setMoveAct] = useState(false);
  const [moveWAct, setMoveWAct] = useState(false);

  useEffect(() => {
    setMoveWAct(true);
  }, [width]);

  const moveHeader = (e) => {
    if (moveWAct) {
      let Elwidth = width / 2;
      if (moveAct) {
        setStateGlobal({
          app: {
            x: e.clientX - Elwidth,
            y: e.clientY - 20,
            app: StateGlobal.app.app,
            data: StateGlobal.app.data
          },
          aplications: StateGlobal.aplications,
          Google: StateGlobal.Google,
          Config: StateGlobal.Config
        });
      }
    }
  };

  return { moveHeader, setMoveAct };
}
