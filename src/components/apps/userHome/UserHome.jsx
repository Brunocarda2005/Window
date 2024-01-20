import "./userHome.css"
import Image from "next/image";
import imgBackground from "./fondos-pantalla-clasicos-windows-calidad_98.webp"

export default function HomePage() {
  return (
    <main className="app__homeUser">
      <Image  className="app__homeUser__img" src={imgBackground} alt="" width={"auto"} height={"auto"}/>
      <form className="app__homeUser__form">
        <input type="text" placeholder="Name" />
        <input type="password" placeholder="Password" />
      </form>
    </main>
  );
}
