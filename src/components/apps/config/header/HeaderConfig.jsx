"use client";
import Actions from "@/app/pags/google/header/actionsTop/Actions";
import { useState, useRef, useEffect } from "react";
import useMove from "@/components/hooks/move/useMove";

export default function HeaderConfig(params) {
  const Element = useRef(null);
  const [width, setWidth] = useState(null);
  useEffect(() => {
    setWidth(Element.current.parentNode.offsetWidth);
  }, [Element]);
  const { moveHeader, setMoveAct } = useMove(width);

  return (
    <header className="app__config__content__header" ref={Element}>
      <section className="app__config__content__header__menu">
        <aside
          className="app__config__content__header__menu__burger"
          onMouseDown={() => setMoveAct(true)}
          onMouseUp={() => setMoveAct(false)}
          onMouseMove={moveHeader}
        >
          <div className="app__config__content__header__menu__burger__content">
            <span></span>
          </div>
        </aside>
        <Actions data={params.data} name={"config"} />
      </section>
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
    </header>
  );
}
