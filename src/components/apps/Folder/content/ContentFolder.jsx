import "./ContentFolder.css";
import imgFolder from "../../../../static/svg/folder.svg";
import imgText from "../../../../static/svg/document.svg";
import imgPC from "../../../../static/svg/pc3.svg";
import imgSnake from "../../../../static/svg/snake-svgrepo-com.svg";
import imgTetris from "../../../../static/svg/Tetris.svg"
import Icone from "./icone/Icone";

export default function ContentFolder(params) {
  const elemntsFOLD = [
    {
      img: imgSnake,
      name: "Snake"
    },
    {
      img: imgTetris,
      name: "Tetris"
    },
  ]


  return (
    <main className="app__folder__content">
      <section className="app__folder__content__list">
        <ul className="app__folder__content__list__ul">
          <li className="app__folder__content__list__ul__list">
            <img
              className="app__folder__content__list__ul__list__img folder"
              src={imgFolder}
              alt=""
            />
            <p>Games</p>
          </li>
          <li className="app__folder__content__list__ul__list">
            <img
              className="app__folder__content__list__ul__list__img text"
              src={imgText}
              alt=""
            />
            <p>Explication</p>
          </li>
          <li className="app__folder__content__list__ul__list">
            <img
              className="app__folder__content__list__ul__list__img pc"
              src={imgPC}
              alt=""
            />
            <p>Escritorio</p>
          </li>
        </ul>
      </section>
      <section className="app__folder__content__elemts">
        <aside className="app__folder__content__elemts__content">
          {
            elemntsFOLD.map((data) => {
              return (
                <Icone key={data.name} img={data.img} name={data.name} Icone={params.Icone}/>
              )
            })
          }
        </aside>
      </section>
    </main>
  );
}
