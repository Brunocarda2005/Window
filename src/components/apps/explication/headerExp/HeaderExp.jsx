"use client";
import Image from "next/image";
import icone from "../../../static/svg/document.svg";
import HeaderApps from "@/components/headerApps/HeaderApps";

export default function HeaderExp(params) {
  return (
    <main>
      <HeaderApps
        classNameHeader={"app__explication__header"}
        classNameNav={"app__explication__header__nav"}
        classNameSection={"app__explication__header__nav__info"}
        data={params.data}
        name={"text"}
      >
        <Image
          className="app__explication__header__nav__info__img"
          width={15}
          height={15}
          src={icone}
          alt="bruno"
        />
        <aside className="app__explication__header__nav__info__content">
          <div className="app__explication__header__nav__info__content__info_name">
            <p className="app__explication__header__nav__info__content__info_name__text">
              explication
            </p>
            <div className="app__explication__header__nav__info__content__info_name__close">
              <span className="app__explication__header__nav__info__content__info_name__close__span"></span>
            </div>
          </div>
        </aside>
      </HeaderApps>
      <section className="app__explication__header__edit"></section>
    </main>
  );
}
