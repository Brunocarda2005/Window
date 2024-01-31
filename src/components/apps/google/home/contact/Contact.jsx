import "./contact.css";
import imgFooter from "../../static/svg/wave.svg";
import CardContact from "./card/CardContact";
import HeaderContact from "./header/Header";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="app__contact" id="contact">
      <div className="app__contact__conten">
        <HeaderContact />
        <aside className="app__contact__conten__cards">
          <section className="app__contact__conten__cards__content">
            <CardContact name={"Linkedin"} />
            <CardContact name={"GitHub"} />
          </section>
          <footer className="app__contact__conten__cards__footer">
            <picture>
              <Image
                className="app__contact__conten__cards__footer__img"
                src={imgFooter}
                alt=""
              />
            </picture>
          </footer>
        </aside>
      </div>
    </main>
  );
}
