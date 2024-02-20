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
        google: params.name === "google",
        text: params.name === "Explication",
        configure: params.name === "Configuracion",
        games: params.name === "Games",
        window: params.name === "Window",
        expand: false,
      },
      Google: StateGlobal.Google,
      Config: StateGlobal.Config,
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
