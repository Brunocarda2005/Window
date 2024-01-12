import "./aplication.css";
import Icone from "../icone/Icone";
import imgFolder from "../static/svg/folder.svg";
import imgConfig from "../static/svg/config.svg";
import imgText from "../static/svg/document.svg";
import imgGoogle from "../static/svg/google.svg";

export default function Aplications() {
  return (
    <>
      <section className="app__aplications">
        <div className="app__aplications__content">
          <Icone
            img={imgConfig}
            alt={"configure winows"}
            name={"Configuracion"}
            use={"window"}
          />
          <Icone
            img={imgFolder}
            alt={"folder winows"}
            name={"Games"}
            use={"window"}
          />
          <Icone
            img={imgText}
            alt={"text explication winows"}
            name={"Explication"}
            use={"window"}
          />
          <Icone
            img={imgGoogle}
            alt={"portofolio winows"}
            name={"Portofolio"}
            use={"window"}
          />
        </div>
      </section>
    </>
  );
}
