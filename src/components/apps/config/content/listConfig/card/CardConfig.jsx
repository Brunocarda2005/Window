import Image from "next/image";
import Link from "next/link";

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
          <li className="app__config__content__content__cards-content__card__content__list-content__ul__list">
            <Link
              href={"/config/background"}
              className="app__config__content__content__cards-content__card__content__list-content__ul__list__link"
            >
              <Image src={params.icons[0]} alt="" width={10} height={10} />
              Background
            </Link>
          </li>
          <li className="app__config__content__content__cards-content__card__content__list-content__ul__list">
            <Link
              href={"/config/font"}
              className="app__config__content__content__cards-content__card__content__list-content__ul__list__link"
            >
              <Image src={params.icons[1]} alt="" width={10} height={10} />
              Font
            </Link>
          </li>
          <li className="app__config__content__content__cards-content__card__content__list-content__ul__list">
            <Link
              href={"/config/icon"}
              className="app__config__content__content__cards-content__card__content__list-content__ul__list__link"
            >
              <Image src={params.icons[2]} alt="" width={10} height={10} />
              Icon
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}
