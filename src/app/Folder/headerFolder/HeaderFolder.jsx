"use client";
import { useContext, useState, useEffect, useRef } from "react";
import Actions from "../../pags/google/header/actionsTop/Actions";
import Context from "../../../components/Context/Context";
import useMove from "../../../components/hooks/move/useMove";
import Image from "next/image";

export default function HeaderFolder(params) {
  const { StateGlobal } = useContext(Context);
  const Element = useRef(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(Element.current.parentNode.offsetWidth);
  }, [Element]);
  const { moveHeader, setMoveAct } = useMove(width);

  return (
    <section className="app__folder__header" ref={Element}>
      <header className="app__folder__header__header">
        <aside
          className="app__folder__header__header__content"
          onMouseDown={() => setMoveAct(true)}
          onMouseUp={() => setMoveAct(false)}
          onMouseMove={moveHeader}
        >
          <div className="app__folder__header__header__info">
            <span className="app__folder__header__header__info__span"></span>
            <div className="app__folder__header__header__info__content">
              <picture className="app__folder__header__header__info__content__img">
                <Image width={10} src={params.icone.img} alt="" />
              </picture>
              <span className="app__folder__header__header__info__content__title">
                {params.icone.name}
              </span>
              <div className="app__folder__header__header__info__content__close-content">
                <span className="app__folder__header__header__info__content__close-content__close"></span>
              </div>
            </div>
            <span className="app__folder__header__header__info__span"></span>
          </div>
        </aside>
        <Actions data={StateGlobal.aplications.games} name={"folder"} />
      </header>
      <nav className="app__folder__header__nav"></nav>
    </section>
  );
}
