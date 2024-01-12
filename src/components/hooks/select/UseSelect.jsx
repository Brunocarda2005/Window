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
  };

  return {Select}
}
