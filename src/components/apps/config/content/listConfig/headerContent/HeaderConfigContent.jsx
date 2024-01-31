import Image from "next/image";
import Fondo from "../../../../../static/fotos/fondo_pantalla.png";
import { useState } from "react";

export default function HeaderConfig() {
  const [name, setName] = useState("Bruno");

  return (
    <header className="app__config__content__content__cards-content__header">
      <Image
        className="app__config__content__content__cards-content__header__img"
        width={"auto"}
        height={"auto"}
        src={Fondo}
        alt="fondo"
      />
      <div className="app__config__content__content__cards-content__header__text">
        <p className="app__config__content__content__cards-content__header__text__name">
          {name}
        </p>
        <span className="app__config__content__content__cards-content__header__text__info">
          hp-31edw
        </span>
        <span
          className="app__config__content__content__cards-content__header__text__change"
          id="change"
        >
          Cambiar nombre
        </span>
      </div>
    </header>
  );
}
