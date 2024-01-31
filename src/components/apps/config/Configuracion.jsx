"use client";
import "./config.css";
import "../../static/css/animations.css";
import { useContext } from "react";
import AppComponent from "../appComponent/AppComponent";
import Context from "../../Context/Context";
import HeaderConfig from "./header/HeaderConfig";

export default function Configuracion({ children }) {
  const { StateGlobal } = useContext(Context);

  return (
    <AppComponent name={"config"} data={StateGlobal.aplications.configure}>
      <div className="app__config__content">
        <HeaderConfig data={StateGlobal.aplications.configure} />
        {children}
      </div>
    </AppComponent>
  );
}
