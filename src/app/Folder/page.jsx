"use client";
import { useContext } from "react";
import "./folder.css";
import "../Window.css";
import "../../components/static/css/animations.css";
import Context from "../../components/Context/Context";
import HeaderFolder from "./headerFolder/HeaderFolder";
import ContentFolder from "./content/ContentFolder";
import imgFolder from "../../../public/svg/folder.svg";
import AppComponent from "@/components/apps/appComponent/AppComponent";
import { useState } from "react";

export default function Folder() {
  const { StateGlobal } = useContext(Context);

  const [icone, setIcone] = useState({
    img: imgFolder,
    name: "Games",
  }); // icone

  return (
    <AppComponent name={"folder"} data={StateGlobal.aplications.games}>
      <HeaderFolder icone={icone} data={StateGlobal.aplications.games} />
      <ContentFolder Icone={setIcone} />
    </AppComponent>
  );
}
