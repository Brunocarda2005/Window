"use client";
import "./Explication.css";
import "../../static/css/animations.css";
import Context from "../../Context/Context";
import { useContext } from "react";
import HeaderExp from "./headerExp/HeaderExp";
import AppComponent from "../appComponent/AppComponent";

export default function Explication() {
  const { StateGlobal } = useContext(Context);

  return (
    <AppComponent name={"text"} data={StateGlobal.aplications.text}>
      <HeaderExp data={StateGlobal.aplications.text} />
      <section className="app__explication__content">
        <article className="app__explication__content__text_content">
          <textarea
            name="text"
            id="text"
            value={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestiae sit itaque harum architecto a ad esse repellat. Rerum voluptas libero nulla, unde consequatur culpa! Accusamus, ipsum autem rem laudantium delectus excepturi quo eos dolor id perspiciatis mollitia ex facilis?"
            }
          ></textarea>
        </article>
      </section>
    </AppComponent>
  );
}
