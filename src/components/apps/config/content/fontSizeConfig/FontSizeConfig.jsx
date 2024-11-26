import UseConfigFont from "../../../../hooks/config/UseFont";
import CardFont from "./card/CardFont";
import "./FontSizeConfig.css";

export default function FontSizeConfig() {
  const { StateGlobal, ChangeConfigFont } = UseConfigFont();

  console.log(StateGlobal);
  const PorcentToinput = (porcent) => {
    if (porcent === 0) {
      return 10;
    } else if (porcent === 1) {
      return 20;
    } else if (porcent === 2) {
      return 40;
    } else if (porcent === 3) {
      return 100;
    } else {
      return 10;
    }
  };

  return (
    <main className="app__config__font">
      <section className="app__config__font__content">
        <header className="app__config__font__content__header">
          <p className="app__config__font__content__header__text">
            El texto se verá asi
          </p>
        </header>
        <section className="app__config__font__content__config">
          <CardFont text={"Size"}>
            <input
              className="input_range size"
              type="range"
              name="size"
              id="Size"
              min={0}
              max={3}
              onChange={ChangeConfigFont}
              style={{
                "--valueS": `${PorcentToinput(StateGlobal.Config.Font.size)}%`,
              }}
            />
          </CardFont>
          <CardFont text={"Weight"}>
            <input
              className="input_range weight"
              type="range"
              name="size"
              id="Weight"
              min={0}
              max={100}
              onChange={ChangeConfigFont}
              style={{
                "--valueW": `${StateGlobal.Config.Font.weight}%`,
              }}
            />
          </CardFont>
          <CardFont text={"Contrast"}>
            <input
              className="input_range contrast"
              type="range"
              name="size"
              id="Contrast"
              min={0}
              max={100}
              onChange={ChangeConfigFont}
              style={{
                "--valueC": `${StateGlobal.Config.Font.shadow}%`,
              }}
            />
          </CardFont>
        </section>
      </section>
    </main>
  );
}
