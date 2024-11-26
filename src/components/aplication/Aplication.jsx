import "./aplication.css";
import Icon from "../icon/Icon";
import imgFolder from "../../../public/svg/folder.svg";
import imgConfig from "../../../public/svg/config.svg";
import imgText from "../../../public/svg/document.svg";
import imgGoogle from "../../../public/svg/google.svg";

export default function Aplications() {
  return (
    <>
      <section className="app__aplications">
        <div className="app__aplications__content">
          <Icon
            img={imgConfig}
            alt={"configure winows"}
            name={"Configuracion"}
            use={"window"}
            path={"config"}
          />
          <Icon
            img={imgGoogle}
            alt={"portofolio winows"}
            name={"google"}
            use={"window"}
            path={"google"}
          />
          <Icon
            img={imgFolder}
            alt={"folder winows"}
            name={"Games"}
            use={"window"}
            path={"folder"}
          />
          <Icon
            img={imgText}
            alt={"text explication winows"}
            name={"Explication"}
            use={"window"}
            path={"exp"}
          />
        </div>
      </section>
    </>
  );
}
