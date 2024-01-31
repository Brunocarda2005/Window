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
          },
          aplications: StateGlobal.aplications,
          Google: StateGlobal.Google
        });
      }
    }
  };

  return { moveHeader, setMoveAct };
}
