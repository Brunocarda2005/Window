import UseConfig from "../../../../hooks/config/UseConfig";
import "./BackgroundConfig.css";

export default function BackgroundConfig() {
  const { setStyleConfig } = UseConfig();

  const Colors = [
    "#000",
    "#432",
    "#999",
    "#192",
    "#109",
    "#432",
    "#999",
    "#192",
    "#109",
    "#432",
    "#999",
  ];

  return (
    <section className="app__config__background">
      <section className="app__config__background__window">
        <aside className="app__config__background__maniqui">
          <div className="app__config__background__maniqui__content">
            <span className="app__config__background__maniqui__content__window"></span>
            <span className="app__config__background__maniqui__content__window"></span>
            <span className="app__config__background__maniqui__content__window"></span>
            <span className="app__config__background__maniqui__content__window"></span>
          </div>
          <span className="app__config__background__maniqui__barra"></span>
        </aside>
      </section>
      <section className="app__config__background__config">
        <aside className="app__config__background__config__tema">
          <h5 className="app__config__background__config__tema__title">Tema</h5>
          <div className="app__config__background__config__tema__change">
            <select name="tema" id="tema">
              <option value="oscuro" className="d">Oscuro</option>
              <option value="claro" className="d">Claro</option>
            </select>
          </div>
        </aside>
        <aside className="app__config__background__colors">
          <h5 className="app__config__background__colors__title">Color</h5>
          <div className="app__config__background__colors__content">
            {Colors.map((data) => (
              <span
                key={data}
                className="app__config__background__colors__content__color"
                style={{ background: data }}
              ></span>
            ))}
          </div>
        </aside>
      </section>
    </section>
  );
}
