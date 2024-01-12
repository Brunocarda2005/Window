"use client";
import { useContext, useState } from "react";
import Context from "../../Context/Context";

export default function useMove(width) {
  const { StateGlobal, setStateGlobal } = useContext(Context);
  const [moveAct, setMoveAct] = useState(false);

  const moveHeader = (e) => {
    let Elwidth = width.offsetWidth / 2;
    if (moveAct) {
      setStateGlobal({
        app: {
          x: e.clientX - Elwidth,
          y: e.clientY - 20,
          app: StateGlobal.app.app,
        },
        aplications: {
          google: StateGlobal.aplications.google,
          text: StateGlobal.aplications.text,
          configure: StateGlobal.aplications.configure,
          games: StateGlobal.aplications.games,
          window: StateGlobal.aplications.window,
        },
        Google: {
          Instagram: {
            Imgs: StateGlobal.Google.Instagram.Img,
            state: StateGlobal.Google.Instagram.state,
            interaction: StateGlobal.Google.Instagram.interaction,
          },
          linkedin: {
            img: StateGlobal.Google.linkedin.img,
            stats: StateGlobal.Google.linkedin.stats,
          },
          portofolio: {
            des: StateGlobal.Google.portofolio.des,
            level: StateGlobal.Google.portofolio.level,
            img: StateGlobal.Google.portofolio.img,
            alt: StateGlobal.Google.portofolio.alt,
          },
        },
      });
    }
  };

  return { moveHeader, setMoveAct };
}
