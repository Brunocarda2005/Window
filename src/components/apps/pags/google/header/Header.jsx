import "./header.css";
import logo from "../../static/svg/vite.svg";
import arrowL from "../../static/svg/arrow-sm-left-svgrepo-com.svg";
import arrowR from "../../static/svg/arrow-sm-right-svgrepo-com.svg";
import reload from "../../static/svg/reload-svgrepo-com.svg";
import alert from "../../static/svg/alert.svg";
import user from "../../static/svg/config.svg";
import Actions from "./actionsTop/Actions";
import { useContext } from "react";
import Context from "../../../../Context/Context";
import useClose from "../../../../hooks/close/useClose";
import useMove from "../../../../hooks/move/useMove";

export default function HeaderGoogle(params) {
  const { StateGlobal } = useContext(Context);
  const { Close } = useClose();
  const { moveHeader, setMoveAct } = useMove(params.Width.current)


  return (
    <header className="google-header">
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
                <img
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
        <Actions data={StateGlobal.aplications.google} name={"portofolio"}/>
      </section>
      <section className="google-header-serch">
        <aside className="google-header-serch-arrow">
          <picture className="google-header-serch-arrow-img_content">
            <img
              className="google-header-serch-arrow-img_content-img"
              src={arrowL}
              alt=""
            />
          </picture>
          <picture className="google-header-serch-arrow-img_content">
            <img
              className="google-header-serch-arrow-img_content-img"
              src={arrowR}
              alt=""
            />
          </picture>
          <picture className="google-header-serch-arrow-img_content">
            <img
              className="google-header-serch-arrow-img_content-img reload"
              src={reload}
              alt=""
            />
          </picture>
        </aside>
        <aside className="google-header-serch-input">
          <div className="google-header-serch-input-content">
            <img
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
            <img
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
