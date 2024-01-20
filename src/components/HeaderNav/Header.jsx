"use client";
import "./Header.css";
import { useContext } from "react";
import Context from "../Context/Context";
import Icon from "../icon/Icon";
import imgFolder from "../static/svg/folder.svg";
import imgConfig from "../static/svg/config.svg";
import imgText from "../static/svg/document.svg";
import imgGoogle from "../static/svg/google.svg";
import useClose from "../hooks/close/useClose";

export default function Nav() {
  const { StateGlobal } = useContext(Context);
  const { Close } = useClose();

  return (
    <section className="app__header">
      <span className="app__header__background"></span>
      <div className="app_header__content">
        <aside
          className="app__header__icone"
          onClick={() => Close(StateGlobal.aplications.window, false, "window")}
        >
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
        <div
          className="app_header__content__icone"
          id={`${StateGlobal.aplications.configure[0]}`}
        >
          <Icon
            img={imgConfig}
            alt={"configure winows"}
            name={"Configuracion"}
            use={"header"}
            path={"config"}
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
          <Icon
            img={imgFolder}
            alt={"folder winows"}
            name={"Games"}
            use={"header"}
            path={"folder"}
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
          <Icon
            img={imgText}
            alt={"text explication winows"}
            name={"Explication"}
            use={"header"}
            path={"exp"}
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
          <Icon
            img={imgGoogle}
            alt={"portofolio winows"}
            name={"Portofolio"}
            use={"header"}
            path={""}
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
