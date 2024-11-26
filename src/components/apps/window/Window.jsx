"use client";
import "./window.css";
import Context from "@/components/Context/Context";
import Icon from "@/components/icon/Icon";
import { useContext } from "react";
import imgFolder from "../../../../public/svg/folder.svg";
import imgConfig from "../../../../public/svg/config.svg";
import imgText from "../../../../public/svg/document.svg";
import imgGoogle from "../../../../public/svg/google.svg";
import imgProfile from "../../../../public/svg/Group 10.svg";
import imgOff from "../../../../public/svg/off-on-power-svgrepo-com.svg";
import Image from "next/image";

export default function Window() {
  const { StateGlobal, setStateGlobal } = useContext(Context);

  const offPage = () => {
    setStateGlobal({
      app: {
        x: StateGlobal.app.x,
        y: StateGlobal.app.y,
        app: "off",
        data: StateGlobal.app.data,
      },
      aplications: StateGlobal.aplications,
      Google: StateGlobal.Google,
      Config: StateGlobal.Config,
    });
  };
  return (
    <main
      className="app__window"
      id={`window_${StateGlobal.aplications.window}`}
    >
      <section className="app__window__content">
        <aside className="app__window__content__aplication">
          <p className="app__window__content__aplication__title">Anclado</p>
          <div className="app__window__content__aplication__icon">
            <Icon
              img={imgConfig}
              alt={"configure winows"}
              name={"Configuracion"}
              use={"window"}
              path={"config"}
            />
            <Icon
              img={imgGoogle}
              alt={"portofolio winows"}
              name={"google"}
              use={"window"}
              path={"google"}
            />
            <Icon
              img={imgFolder}
              alt={"folder winows"}
              name={"Games"}
              use={"window"}
              path={"folder"}
            />
            <Icon
              img={imgText}
              alt={"text explication winows"}
              name={"Explication"}
              use={"window"}
              path={"exp"}
            />
          </div>
        </aside>
        <header className="app__window__content__header">
          <section className="app__window__content__header__profile">
            <Image
              className="app__window__content__header__profile__img"
              src={imgProfile}
              alt=""
              width={20}
              height={20}
            />
            <div className="app__window__content__header__profile__name">
              <p className="app__window__content__header__profile__name__p">
                {StateGlobal.app.data.name}
              </p>
            </div>
          </section>
          <section className="app__window__content__header__off-content">
            <Image
              className="app__window__content__header__off-content__btn"
              src={imgOff}
              alt=""
              width={16}
              height={16}
              onClick={offPage}
            />
          </section>
        </header>
      </section>
    </main>
  );
}
