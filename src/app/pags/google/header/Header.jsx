"use client";
import "./header.css";
import Image from "next/image";
import { useContext, useRef, useEffect, useState } from "react";
import logo from "../../../../components/static/svg/next-js.svg";
import arrowL from "../../../../components/apps/google/static/svg/arrow-sm-left-svgrepo-com.svg";
import arrowR from "../../../../components/apps/google/static/svg/arrow-sm-right-svgrepo-com.svg";
import reload from "../../../../components/apps/google/static/svg/reload-svgrepo-com.svg";
import alert from "../../../../components/apps/google/static/svg/alert.svg";
import user from "../../../../components/apps/google/static/svg/config.svg";
import Actions from "./actionsTop/Actions";
import Context from "../../../../components/Context/Context";
import useClose from "../../../../components/hooks/close/useClose";
import useMove from "../../../../components/hooks/move/useMove";

export default function HeaderGoogle() {
  const { StateGlobal } = useContext(Context);
  const [width, setWidth] = useState(0);
  const { Close } = useClose();
  const Element = useRef(null);

  useEffect(() => {
    setWidth(Element.current.parentNode.offsetWidth);
  }, [Element]);
  const { moveHeader, setMoveAct } = useMove(width);

  return (
    <header className="google-header" ref={Element}>
      <section className="google-header-web">
        <aside
          className="google-header-web-info"
          onMouseDown={() => setMoveAct(true)}
          onMouseUp={() => setMoveAct(false)}
          onMouseMove={moveHeader}
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
                  Bruno | google
                </p>
              </div>
              <div
                className="google-header-web-info-content-close"
                onClick={() => Close(StateGlobal.aplications.google[1], false)}
              >
                <span className="google-header-web-info-content-close-span"></span>
              </div>
              <span className="google-header-web-info-content-plus"></span>
            </div>
          </section>
        </aside>
        <Actions data={StateGlobal.aplications.google} name={"portofolio"} />
      </section>
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
          <div className="google-header-serch-input-content">
            <Image
              width={20}
              className="google-header-serch-input-content-img"
              src={alert}
              alt=""
            />
            <input
              className="google-header-serch-input-content-input"
              type="text"
              name="serch"
              id="serch"
              placeholder="https://brunocarda2005.github.io/Bruno/"
            />
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
    </header>
  );
}
