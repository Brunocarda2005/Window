import { useContext } from "react";
import Actions from "../../pags/google/header/actionsTop/Actions";
import Context from "../../../Context/Context";
import useMove from "../../../hooks/move/useMove";



export default function HeaderFolder(params) {
  const { moveHeader, setMoveAct } = useMove(params.Width.current);
  const { StateGlobal } = useContext(Context);
  

  return (
    <section className="app__folder__header">
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
                <img src={params.icone.img} alt="" />
              </picture>
              <span className="app__folder__header__header__info__content__title">{params.icone.name}</span>
              <div className="app__folder__header__header__info__content__close-content">
                <span className="app__folder__header__header__info__content__close-content__close"></span>
              </div>
            </div>
            <span className="app__folder__header__header__info__span"></span>
          </div>
        </aside>
        <Actions data={StateGlobal.aplications.games} name={"games"} />
      </header>
      <nav className="app__folder__header__nav"></nav>
    </section>
  );
}
