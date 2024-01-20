import Image from "next/image";

export default function CardConfig(params) {
  return (
    <div className="app__config__content__content__cards-content__card__content">
      <header className="app__config__content__content__cards-content__card__content__header">
        <p className="app__config__content__content__cards-content__card__content__header__title">
          Configuracion recomendada
        </p>
      </header>
      <aside className="app__config__content__content__cards-content__card__content__list-content">
        <ul className="app__config__content__content__cards-content__card__content__list-content__ul">
          <li>
            <Image src={params.icons[0]} alt="" width={10} height={10} />
            Background
          </li>
          <li>
            <Image src={params.icons[1]} alt="" width={10} height={10} />
            Font size
          </li>
          <li>
            <Image src={params.icons[2]} alt="" width={10} height={10} />
            Icone
          </li>
        </ul>
      </aside>
    </div>
  );
}
