"use client";
import "../Window.css";
import Configuracion from "../../components/apps/config/Configuracion";
import ListConfig from "../../components/apps/config/content/listConfig/ListConfig";

export default function ConfigurePage() {
  return (
    <Configuracion>
      <ListConfig />
    </Configuracion>
  );
}
