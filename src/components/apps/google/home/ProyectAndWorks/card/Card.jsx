import Image from "next/image";
import "../ProyectsAndWorks.css";

export default function Card({ icon, a, img }) {
  return (
    <a
      href={a}
      target="_blank"
      className="project_work-card_project_work-cards-card card"
      rel="noreferrer"
    >
      <section className="section__img">
        <div className="project_work-card_project_work-cards-card-mark">
          <span></span>
          <div className="mark">
            <Image src={icon} alt={icon} />
          </div>
        </div>
        <Image src={img} alt={img} className="section__img__content__img" />
      </section>
    </a>
  );
}
