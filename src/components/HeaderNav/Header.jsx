"use client";
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";
import Icon from "../icon/Icon";
import imgFolder from "../../../public/svg/folder.svg";
import imgConfig from "../../../public/svg/config.svg";
import imgText from "../../../public/svg/document.svg";
import imgGoogle from "../../../public/svg/google.svg";
import useClose from "../hooks/close/useClose";
import Clock from "../apps/clock/Clock";
import Image from "next/image";
import imgDay from "../../../public/svg/day.svg";
import imgNight from "../../../public/svg/moon.svg";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const { StateGlobal } = useContext(Context);
  const { Close } = useClose();
  const { formattedDate, formattedTime } = Clock();

  // Extraer fecha y hora
  let dataTime = formattedDate.split(",")[1].split("de");
  const hour = parseInt(formattedTime.split(":")[0], 10);

  // Determinar imagen dependiendo de la hora
  let imgTime = hour > 20 || hour < 4 ? imgNight : imgDay;

  // Meses del año
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
    " noviembre ",
    " diciembre ",
  ];

  // Detectar el tamaño de la pantalla
  useEffect(() => {
    const updateDeviceInfo = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Inicializar y agregar el listener de resize
    updateDeviceInfo();
    window.addEventListener("resize", updateDeviceInfo);

    // Limpiar el listener al desmontar
    return () => {
      window.removeEventListener("resize", updateDeviceInfo);
    };
  }, []);

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
          <span>{isMobile ? formattedTime : null}</span>
          <p>
            {isMobile
              ? `${dataTime[0]} / ${Month.indexOf(dataTime[1]) + 1} / ${
                  dataTime[2]
                }`
              : null}
          </p>
        </section>
      </div>
    </section>
  );
}
