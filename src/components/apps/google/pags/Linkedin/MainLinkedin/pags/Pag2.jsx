import "./GeneralPagsStyle.css";
import Frontend from "../skills/skills-frontend/Frontend";
import Backend from "../skills/skills-backend/Backend";
import UX_UI from "../skills/skills-ux-ui/UX_UI";
import { useContext } from "react";
import Context from "../../../../../Context/Context";

export default function Pag2() {
  const { StateGlobal } = useContext(Context);
  let LinkedinIMG = StateGlobal.linkedin.img;
  let LinkedinLevel = StateGlobal.linkedin.stats;

  return (
    <section className="mainLin_skills social__content__background__app">
      <div className="social__content__background__app__content__grid links">
        <div className="social__content__background__app__links-nav">
          <aside className="social__content__background__app__links-nav__skills">
            <aside className="social__content__background__app__links-nav__skills__cards">
              <Frontend />
              <UX_UI />
              <Backend />
            </aside>
          </aside>
        </div>
        <aside className="social__content__background__app__info-skills">
          <div className="social__content__background__app__info-skills__imagen">
            <img
              className="social__content__background__app__info-skills__imagen__img"
              src={`/bruno/src/components/static/svg/${LinkedinIMG}`}
              alt={LinkedinIMG}
            />
          </div>
          <div className="social__content__background__app__info-skills__text ">
              <h4 className="social__content__background__app__info-skills__text__title">React</h4>
              <p className="social__content__background__app__info-skills__text__description">esta es una de las herramientas favoritas mias, la suelo usar con regularidad si el proyecto lo requiere, la prendi de mi viejo, es mi primera chamba, mi primer diaaa</p>
              <p className="social__content__background__app__info-skills__text__level">{LinkedinLevel}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
