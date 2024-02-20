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
import Clock from "../apps/clock/Clock";
import Image from "next/image";
import imgDay from "./day.svg";
import imgNight from "./moon.svg";

export default function Nav() {
  const { StateGlobal } = useContext(Context);
  const { Close } = useClose();
  const { formattedDate, formattedTime } = Clock();
  let dataTime = formattedDate.split(",")[1].split("de");
  let imgTime =
    formattedTime.split(":")[0] > 20 || formattedTime.split(":")[0] < 4
      ? imgNight
      : imgDay;

  const Month = [
    " enero ",
    " febrero ",
    " marzo ",
    " abril ",
    " mayo ",
    " junio ",
    " julio ",
    " agosto ",
    " septiembre ",
    " octubre ",
    " noviembre  ",
    " diciembre ",
  ];

  return (
    <section className="app__header">
      <span className="app__header__background"></span>
      <span className="app__header__day_nigth">
        <picture>
          <Image
            className="app__header__day_nigth__img"
            src={imgTime}
            alt=""
            width={"auto"}
            height={"auto"}
          />
        </picture>
      </span>
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
            name={"google"}
            use={"header"}
            path={"google"}
          />
          <span
            className="app_header__content__icone__span"
            id={`${StateGlobal.aplications.google[0]}`}
          ></span>
        </div>
      </div>
      <div className="app__header__data">
        <section className="app__header__data__time">
          <span>{formattedTime}</span>
          <p>
            {dataTime[0]}/{Month.indexOf(dataTime[1]) + 1}/{dataTime[2]}
          </p>
        </section>
      </div>
    </section>
  );
}
