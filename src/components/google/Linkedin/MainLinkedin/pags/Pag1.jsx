import UNR from "../../../../static/fotos/logounr.png";
import Fondo from "../../../../static/fotos/fondoLinkedin.jpg";
import User from "../../../../static/svg/Group 10.svg";
import "./GeneralPagsStyle.css"

export default function Pag1() {
  return (
    <section className="social__content__background__app pag1">
      <div className="social__content__background__app__fondo">
        <picture className="social__content__background__app__fondo__picture">
          <img
            className="social__content__background__app__fondo__picture__img"
            src={Fondo}
            alt="fondo linkedin"
          />
        </picture>
      </div>
      <section className="social__content__background__app__content">
        <aside className="social__content__background__app__content__grid user">
          <div className="social__content__background__app__user">
            <aside className="social__content__background__app__user__perfil">
              <picture>
                <img
                  className="social__content__background__app__user__perfil__img"
                  src={User}
                  alt="user linkedin perfil yo bruno cardamone"
                />
              </picture>
            </aside>
            <aside className="social__content__background__app__user__info">
              <h2 className="social__content__background__app__user__info__title">
                Bruno Cardamone
              </h2>
              <p>Web Designer</p>
              <a href="#">Brunocardamone03@gmail.com</a>
              <a href="#">Github</a>
            </aside>
            <aside className="social__content__background__app__user__links">
                <div className="social__content__background__app__user__links__skills card_link">
                    <span>Skills</span>
                </div>
                <div className="social__content__background__app__user__links__works card_link">
                    <span>Experience</span>
                </div>
            </aside>
          </div>
        </aside>
        <aside className="social__content__background__app__content__grid unv">
          <div className="social__content__background__app__unervisity">
            <aside className="social__content__background__app__unervisity__content">
              <picture>
                <img
                  className="social__content__background__app__unervisity__img"
                  src={UNR}
                  alt=""
                />
              </picture>
              <h3 className="social__content__background__app__unervisity__text">
                National University of Rosario
              </h3>
            </aside>
          </div>
        </aside>
      </section>
    </section>
  );
}
