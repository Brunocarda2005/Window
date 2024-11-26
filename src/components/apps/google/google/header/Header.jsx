"use client";
import "./header.css";
import Image from "next/image";
import { useContext } from "react";
import HeaderApps from "../../../../headerApps/HeaderApps";
import logo from "../../../../../../public/svg/google.svg";
import arrowL from "../../../../../../public/svg/arrow-sm-left-svgrepo-com.svg";
import arrowR from "../../../../../../public/svg/arrow-sm-right-svgrepo-com.svg";
import reload from "../../../../../../public/svg/reload-svgrepo-com.svg";
import alert from "../../../../../../public/svg/alert.svg";
import user from "../../../../../../public/svg/config.svg";
import Context from "../../../../Context/Context";
import useClose from "../../../../hooks/close/useClose";
import Serch from "../serch/Serch";

export default function HeaderGoogle() {
  const { StateGlobal } = useContext(Context);
  const { Close } = useClose();

  return (
    <main className="google-header">
      <HeaderApps
        classNameHeader={"google-header"}
        classNameNav={"google-header-web"}
        classNameSection={"google-header-web-info"}
        data={StateGlobal.aplications.google}
        name={"google"}
      >
        <section className="google-header-web-info-before"></section>
        <section className="google-header-web-info-content">
          <div className="google-header-web-info-content-background">
            <span className="google-header-web-info-content-span"></span>
            <span className="google-header-web-info-content-span_left"></span>
            <div className="google-header-web-info-content-info">
              <Image
                width={20}
                className="google-header-web-info-content-img"
                src={logo}
                alt=""
              />
              <p className="google-header-web-info-content-text">
                Nueva pestaña
              </p>
            </div>
            <div
              className="google-header-web-info-content-close"
              onClick={() => Close(StateGlobal.aplications.google, false)}
            >
              <span className="google-header-web-info-content-close-span"></span>
            </div>
            <span className="google-header-web-info-content-plus"></span>
          </div>
        </section>
      </HeaderApps>
      <section className="google-header-serch">
        <aside className="google-header-serch-arrow">
          <picture className="google-header-serch-arrow-img_content">
            <Image
              width={20}
              className="google-header-serch-arrow-img_content-img"
              src={arrowL}
              alt=""
            />
          </picture>
          <picture className="google-header-serch-arrow-img_content">
            <Image
              width={20}
              className="google-header-serch-arrow-img_content-img"
              src={arrowR}
              alt=""
            />
          </picture>
          <picture className="google-header-serch-arrow-img_content">
            <Image
              width={20}
              className="google-header-serch-arrow-img_content-img reload"
              src={reload}
              alt=""
            />
          </picture>
        </aside>
        <aside className="google-header-serch-input">
          <div className="google-header-serch-input__content">
            <div className="google-header-serch-input-content">
              <Serch
                use={"header"}
                img={alert}
                placeholder={"Busca en Google o escribe una URL"}
              />
            </div>
          </div>
        </aside>
        <aside className="google-header-serch-profile">
          <picture className="google-header-serch-profile-user">
            <Image
              width={20}
              className="google-header-serch-profile-user-img"
              src={user}
              alt="user bruno cardamone google"
            />
          </picture>
          <div className="google-header-serch-profile-menu">
            <span className="google-header-serch-profile-menu-span"></span>
          </div>
        </aside>
      </section>
    </main>
  );
}
