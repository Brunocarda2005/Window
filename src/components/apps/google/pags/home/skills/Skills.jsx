"use client";
import Frontend from "./skills-frontend/Frontend";
import UX_UI from "./skills-ux-ui/UX_UI";
import Backend from "./skills-backend/Backend";
import "./Skills.css";
import { useContext } from "react";
import Context from "../../../../../Context/Context";
import Image from "next/image";

export default function Skills() {
  const { StateGlobal } = useContext(Context);

  return (
    <main className="skills" id="skills">
      <section className="skills__content">
        <section className="title-skills">
          <div className="title-skills-content">
            <picture>
              <Image
                width={100}
                height={100}
                className="title-skills-content-img"
                src={StateGlobal.Google.portofolio.img}
                alt={StateGlobal.Google.portofolio.alt}
              />
            </picture>
            <p className="title-skills-content-des">
              {StateGlobal.Google.portofolio.des}
            </p>
            <h4 className="title-skills-content-level">
              {StateGlobal.Google.portofolio.level}
            </h4>
          </div>
        </section>
        <section className="social__content__background__app__skills">
          <aside className="social__content__background__app__skills__cards">
            <Frontend />
            <UX_UI />
            <Backend />
          </aside>
        </section>
      </section>
    </main>
  );
}
