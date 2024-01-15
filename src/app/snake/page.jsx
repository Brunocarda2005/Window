"use client"
import { useRef, useState } from "react";
import "./Snake.css";

export default function Snake() {
  const [styleSnake, setStyleSnake] = useState([0, 0]);
  const [start, setStart] = useState(false);
  const Element = useRef(null);

  const SnakeMove = (event) => {
    let key = event.key;
    if (key === "ArrowUp") {
      setStyleSnake([styleSnake[0], -90]);
    } else if (key === "ArrowDown") {
      setStyleSnake([styleSnake[0], 90]);
    } else if (key === "ArrowLeft") {
      setStyleSnake([styleSnake[0], 180]);
    } else if (key === "ArrowRight") {
      setStyleSnake([styleSnake[0], 0]);
    }
  };

  // useEffect(() => {

  //   // Limpiar el intervalo cuando el componente se desmonta
  //   return
  // }, []); // El segundo parámetro [] asegura que el efecto se ejecute solo una vez al montar el componente

  // const clear = () => clearInterval(intervalId);
  // const intervalId =
  const Start = () => {
    setStart(true);
  };

  if (start) {
    setInterval(() => {
      let transformNumber = parseInt(
        Element.current.style.transform.slice(11, -3)
      );
      console.log(Element.current.style.transform.slice(11, -3));
      setStyleSnake([transformNumber + 1, [styleSnake[1][0], false]]);
    }, 1);
  }

  return (
    <main className="app__games__snake" onClick={Start}>
      <header className="app__games__snake__header">
        <aside className="app__games__snake__header__point"></aside>
        <aside className="app__games__snake__header__close"></aside>
      </header>
      <section
        className="app__games__snake__content"
        id={`game_${start}`}
        onKeyDown={SnakeMove}
        tabIndex="0" // Agrega tabIndex para que el div sea focusable
      >
        <div
          className={`app__games__snake__content__snake ${
            styleSnake[1][1] ? "rotate" : ""
          }`}
          style={{
            transform: `translateX(${styleSnake[0]}px)`,
            rotate: `${styleSnake[1]}deg`,
          }}
          ref={Element}
        ></div>
      </section>
    </main>
  );
}
