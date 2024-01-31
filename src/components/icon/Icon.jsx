"use client";
import { useContext } from "react";
import "./icon.css";
import Image from "next/image";
import Context from "../Context/Context";
import Link from "next/link";

export default function Icon(params) {
  const { StateGlobal, setStateGlobal } = useContext(Context);
  const ChangeAPP = () => {
    setStateGlobal((prev) => ({
      ...prev,
      aplications: {
        google: [
          params.name === "Portofolio",
          StateGlobal.aplications.google[1],
        ],
        text: [
          params.name === "Explication",
          StateGlobal.aplications.text[1],
          StateGlobal.aplications.text[2],
        ],
        configure: [
          params.name === "Configuracion",
          StateGlobal.aplications.configure[1],
        ],
        games: [params.name === "Games", StateGlobal.aplications.games[1]],
        window: params.name === "Window",
      },
      Google: StateGlobal.Google
    }));
  };

  return (
    <>
      <Link href={`/${params.path}`} className="link">
        <aside className={`app__icone ${params.use} `} onClick={ChangeAPP}>
          <picture>
            <Image
              width={"auto"}
              height={"auto"}
              className="app__icone__img"
              src={params.img}
              alt={params.alt}
            />
          </picture>
          <p className="app__icone__name">{params.name}</p>
        </aside>
      </Link>
    </>
  );
}
