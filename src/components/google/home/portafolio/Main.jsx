import "./Main.css";
import Header from "../header/header";
import Start from "../start/Start";
import ProyectsAndWorks from "../ProyectAndWorks/ProyectsAndWorks";
import Footer from "../footer/Footer";
import Skills from "../skills/Skills";
import Google from "../../google/google/Google";

export default function Main() {
  return (
    <>
      <Google>
        <main className="portofolio">
          <Header />
          <Start />
          <Skills />
          <ProyectsAndWorks />
          <Footer />
        </main>
      </Google>
    </>
  );
}
