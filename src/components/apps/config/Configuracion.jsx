"use client";
import "./config.css";
import "../../static/css/animations.css";
import { useContext } from "react";
import AppComponent from "../appComponent/AppComponent";
import Context from "../../Context/Context";
import HeaderConfigContent from "./headerContent/HeaderConfigContent";
import CardConfig from "./card/CardConfig";
import HeaderConfig from "./header/HeaderConfig";
import IconBackground from "../../static/svg/screen-svgrepo-com.svg";
import IconFont from "../../static/svg/font-svgrepo-com.svg";
import IconIcon from "../../static/svg/window-multiple-svgrepo-com.svg";

export default function Configuracion() {
  const { StateGlobal } = useContext(Context);

  return (
    <AppComponent name={"config"} data={StateGlobal.aplications.configure}>
      <div className="app__config__content">
        <HeaderConfig data={StateGlobal.aplications.configure} />
        <section className="app__config__content__content">
          <div className="app__config__content__content__cards-content">
            <HeaderConfigContent />
            <aside className="app__config__content__content__cards-content__card">
              <CardConfig icons={[IconBackground, IconFont, IconIcon]} />
            </aside>
          </div>
        </section>
      </div>
    </AppComponent>
  );
}
