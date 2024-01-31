import imgLogo from "../../../static/fotos/fondoLinkedin.jpg";
import imgPhone from "../../../static/svg/phonesvg.svg";
import imgMail from "../../../static/svg/Mailsvg.svg";
import Image from "next/image";

export default function HeaderContact() {
  return (
    <aside className="app__contact__conten__about">
      <section className="app__contact__conten__about__profile">
        <picture className="app__contact__conten__about__profile__img">
          <Image
            className="app__contact__conten__about__profile__img"
            src={imgLogo}
            alt=""
          />
        </picture>
        <div className="app__contact__conten__about__profile__title">
          <span id="name">Bruno</span>
          <span id="lastName">Cardamone</span>
        </div>
      </section>
      <section className="app__contact__conten__about__contact">
        <aside className="app__contact__conten__about__contact__info phone">
          <Image src={imgPhone} alt="" />
          <span>+54 9 2477685189</span>
        </aside>
        <aside className="app__contact__conten__about__contact__info mail">
          <Image src={imgMail} alt="" />
          <span>Brunocardamone03@gmial.com</span>
        </aside>
      </section>
      <section className="app__contact__conten__about__aboutText">
        <h5 className="app__contact__conten__about__aboutText__title">
          About me
        </h5>
        <article className="app__contact__conten__about__aboutText__text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            excepturi alias laborum earum quidem et, id cum. Ab atque nostrum
            quos dolorem ullam accusamus, esse nemo. Accusamus, asperiores?
            Illum, similique.
          </p>
        </article>
      </section>
    </aside>
  );
}
