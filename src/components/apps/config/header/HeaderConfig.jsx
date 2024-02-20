"use client";
import HeaderApps from "../../../headerApps/HeaderApps";

export default function HeaderConfig(params) {

  return (
    <section>      
      <HeaderApps
        classNameHeader={"app__config__content__header"}
        classNameNav={"app__config__content__header__menu"}
        classNameSection={"app__config__content__header__menu__burger"}
        data={params.data}
        name={"config"}
      >
        <div className="app__config__content__header__menu__burger__content">
          <span></span>
        </div>
      </HeaderApps>
      <aside className="app__config__content__header__menu__content">
        <header className="app__config__content__header__menu__content__header"></header>
        <nav
          className="app__config__content__header__menu__content__nav"
          style={{ display: "none" }}
        >
          <ul>
            <li>inicio</li>
            <li>pantalla</li>
            <li>aseccibilidad</li>
            <li>sistema</li>
          </ul>
        </nav>
      </aside>
    </section>
  );
}
