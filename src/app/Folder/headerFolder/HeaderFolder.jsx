"use client";
import Image from "next/image";
import HeaderApps from "@/components/headerApps/HeaderApps";

export default function HeaderFolder(params) {
  return (
    <main>
      <HeaderApps
        classNameHeader={"app__folder__header"}
        classNameNav={"app__folder__header__header"}
        classNameSection={"app__folder__header__header__content"}
        data={params.data}
        name={"folder"}
      >
        <div className="app__folder__header__header__info">
          <span className="app__folder__header__header__info__span"></span>
          <div className="app__folder__header__header__info__content">
            <picture className="app__folder__header__header__info__content__img">
              <Image width={10} src={params.icone.img} alt="" />
            </picture>
            <span className="app__folder__header__header__info__content__title">
              {params.icone.name}
            </span>
            <div className="app__folder__header__header__info__content__close-content">
              <span className="app__folder__header__header__info__content__close-content__close"></span>
            </div>
          </div>
          <span className="app__folder__header__header__info__span"></span>
        </div>
      </HeaderApps>
      <nav className="app__folder__header__nav"></nav>
    </main>
  );
}
