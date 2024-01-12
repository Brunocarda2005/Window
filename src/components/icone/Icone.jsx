"use client";
import { useContext } from "react";
import "./icone.css";
import Image from "next/image";
import Context from "../Context/Context";

export default function Configure(params) {
  const { StateGlobal, setStateGlobal } = useContext(Context);
  const ChangeAPP = () => {
    setStateGlobal((prev) => ({
      ...prev,
      aplications: {
        google: [
          params.name === "Portofolio",
          StateGlobal.aplications.google[1],
        ],
        text: [params.name === "Explication", StateGlobal.aplications.text[1]],
        configure: [
          params.name === "Configuracion",
          StateGlobal.aplications.configure[1],
        ],
        games: [params.name === "Games", StateGlobal.aplications.games[1]],
        window: [params.name === "Window", StateGlobal.aplications.window[1]],
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
  };

  return (
    <>
      <aside className={`app__icone ${params.use} `} onClick={ChangeAPP}>
        <picture>
          <Image
            className="app__icone__img"
            src={params.img}
            alt={params.alt}
          />
        </picture>
        <p className="app__icone__name">{params.name}</p>
      </aside>
    </>
  );
}
