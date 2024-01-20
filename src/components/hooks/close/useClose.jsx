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
        },
        aplications: {
          google:
            nameApp === "portofolio"
              ? [cl, exp]
              : StateGlobal.aplications.google,
          text:
            nameApp === "text"
              ? [cl, exp, StateGlobal.aplications.text[2]]
              : StateGlobal.aplications.text,
          configure:
            nameApp === "config"
              ? [cl, exp]
              : StateGlobal.aplications.configure,
          games:
            nameApp === "folder"
              ? [cl, exp, StateGlobal.aplications.games[2]]
              : StateGlobal.aplications.games,
          window: nameApp === "window" ? !cl : StateGlobal.aplications.window,
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
    } else {
      setStateGlobal((prev) => ({
        ...prev,
        aplications: {
          google:
            nameApp === "portofolio"
              ? [cl, exp]
              : StateGlobal.aplications.google,
          text:
            nameApp === "text"
              ? [cl, exp, StateGlobal.aplications.text[2]]
              : StateGlobal.aplications.text,
          configure:
            nameApp === "config"
              ? [cl, exp]
              : StateGlobal.aplications.configure,
          games:
            nameApp === "folder"
              ? [cl, exp, StateGlobal.aplications.games[2]]
              : StateGlobal.aplications.games,
          window: nameApp === "window" ? !cl : StateGlobal.aplications.window,
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
      }));
    }
  };
  return { Close, StateGlobal };
}
