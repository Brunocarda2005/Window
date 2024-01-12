"use client";
import "./Header.css";
import { useContext } from "react";
import Context from "../Context/Context";
import Icone from "../icone/Icone";
import imgFolder from "../static/svg/folder.svg";
import imgConfig from "../static/svg/config.svg";
import imgText from "../static/svg/document.svg";
import imgGoogle from "../static/svg/google.svg";

export default function Nav() {
  const { StateGlobal } = useContext(Context);

  return (
    <section className="app__header">
      <span className="app__header__background"></span>
      <aside className="app__header__icone">
        <div className="app__background__window header_window">
          <span className="app__background__window__span"></span>
          <span className="app__background__window__span"></span>
          <span className="app__background__window__span"></span>
          <span className="app__background__window__span"></span>
        </div>
        <span
          className={`app__header__icone_active_${StateGlobal.aplications.window}`}
        ></span>
      </aside>
      <div className="app_header__content">
        <div
          className="app_header__content__icone"
          id={`${StateGlobal.aplications.configure[0]}`}
        >
          <Icone
            img={imgConfig}
            alt={"configure winows"}
            name={"Configuracion"}
            use={"header"}
          />
          <span
            className="app_header__content__icone__span"
            id={`${StateGlobal.aplications.configure[0]}`}
          ></span>
        </div>
        <div
          className="app_header__content__icone"
          id={`${StateGlobal.aplications.games}`}
        >
          <Icone
            img={imgFolder}
            alt={"folder winows"}
            name={"Games"}
            use={"header"}
          />
          <span
            className="app_header__content__icone__span"
            id={`${StateGlobal.aplications.games}`}
          ></span>
        </div>
        <div
          className="app_header__content__icone"
          id={`${StateGlobal.aplications.text[0]}`}
        >
          <Icone
            img={imgText}
            alt={"text explication winows"}
            name={"Explication"}
            use={"header"}
          />
          <span
            className="app_header__content__icone__span"
            id={`${StateGlobal.aplications.text[0]}`}
          ></span>
        </div>
        <div
          className="app_header__content__icone"
          id={`${StateGlobal.aplications.google[0]}`}
        >
          <Icone
            img={imgGoogle}
            alt={"portofolio winows"}
            name={"Portofolio"}
            use={"header"}
          />
          <span
            className="app_header__content__icone__span"
            id={`${StateGlobal.aplications.google[0]}`}
          ></span>
        </div>
      </div>
    </section>
  );
}
