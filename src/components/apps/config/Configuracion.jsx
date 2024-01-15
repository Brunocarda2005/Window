"use client";
import { useContext } from "react";
import AppComponent from "../appComponent/AppComponent";
import Context from "../../Context/Context";
import "./config.css"


export default function Configuracion() {
  const { StateGlobal } = useContext(Context);

  return (
    <AppComponent name={"config"} data={StateGlobal.aplications.configure}>
      <section className="configuracion__content"></section>
    </AppComponent>
  );
}
