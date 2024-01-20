"use client";
import "./window.css";
import Context from "@/components/Context/Context";
import Icon from "@/components/icon/Icon";
import { useContext } from "react";
import imgFolder from "../../static/svg/folder.svg";
import imgConfig from "../../static/svg/config.svg";
import imgText from "../../static/svg/document.svg";
import imgGoogle from "../../static/svg/google.svg";
import imgProfile from "../../static/svg/Group 10.svg";
import imgOff from "../../static/svg/off-on-power-svgrepo-com.svg";
import Image from "next/image";

export default function Window() {
  const { StateGlobal } = useContext(Context);

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
              name={"Portofolio"}
              use={"window"}
              path={""}
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
                Nazareno Cardamone
              </p>
            </div>
          </section>
          <section className="app__window__content__header__off-content">
            <Image src={imgOff} alt="" width={16} height={16}/>
          </section>
        </header>
      </section>
    </main>
  );
}
