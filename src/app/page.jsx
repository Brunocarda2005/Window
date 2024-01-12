import "./Window.css";
import Google from "./pags/google/google/Google";
import Header from "./pags/home/header/header";
import Start from "./pags/home/start/Start";
import Skills from "./pags/home/skills/Skills";
import ProyectsAndWorks from "./pags/home/ProyectAndWorks/ProyectsAndWorks";
import Footer from "./pags/home/footer/Footer";

export default function Portofolio() {
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
