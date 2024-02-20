"use client";
import "./google.css";
import "../../../../static/css/animations.css";
import { useContext } from "react";
import ContentGoogle from "../content/ContentGoogle";
import HeaderGoogle from "../header/Header";
import Context from "../../../../Context/Context";
import AppComponent from "../../../appComponent/AppComponent";

export default function Google(params) {
  const { StateGlobal } = useContext(Context);

  return (
    <AppComponent name={"google"} data={StateGlobal.aplications.google}>
      <HeaderGoogle />
      <ContentGoogle>{params.children}</ContentGoogle>
    </AppComponent>
  );
}
