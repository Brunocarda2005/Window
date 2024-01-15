"use client";
import useMove from "@/components/hooks/move/useMove";
import Actions from "../../../../app/pags/google/header/actionsTop/Actions";
import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import icone from "../../../static/svg/document.svg";
import Context from "../../../Context/Context";

export default function HeaderExp(params) {
  const Element = useRef(null);
  const { StateGlobal } = useContext(Context);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(Element.current.parentNode.offsetWidth);
  }, [Element]);
  const { moveHeader, setMoveAct } = useMove(width);

  console.log(StateGlobal.aplications.games);

  return (
    <header className="app__explication__header" ref={Element}>
      <nav className="app__explication__header__nav">
        <section
          className="app__explication__header__nav__info"
          onMouseDown={() => setMoveAct(true)}
          onMouseUp={() => setMoveAct(false)}
          onMouseMove={moveHeader}
        >
          <Image
            className="app__explication__header__nav__info__img"
            width={15}
            height={15}
            src={icone}
            alt="bruno"
          />
          <aside className="app__explication__header__nav__info__content">
            <div className="app__explication__header__nav__info__content__info_name">
              <p className="app__explication__header__nav__info__content__info_name__text">
                {params.data[2]}
              </p>
              <div className="app__explication__header__nav__info__content__info_name__close">
                <span className="app__explication__header__nav__info__content__info_name__close__span"></span>
              </div>
            </div>
          </aside>
        </section>
        <Actions data={params.data} name={"text"} />
      </nav>
      <section className="app__explication__header__edit"></section>
    </header>
  );
}
