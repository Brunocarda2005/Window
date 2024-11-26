"use client";
import Serch from "./google/serch/Serch";
import Google from "./google/google/Google";
import imgLoupe from "../../../../public/svg/detective-loupe-magnifying-glass-svgrepo-com.svg";
import "./googleMain.css";

export default function GoogleMain() {
  return (
    <Google>
      <main className="googleApp">
        <section className="googleApp__content">
          <h2 className="googleApp__content__title">Google</h2>
          <div className="googleApp__content__serch">
            <Serch
              placeholder={"Busca en Google o escribe una URL"}
              img={imgLoupe}
              use={"serchMain"}
            />
          </div>
        </section>
      </main>
    </Google>
  );
}
