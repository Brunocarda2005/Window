import HeaderConfigContent from "./headerContent/HeaderConfigContent";
import CardConfig from "./card/CardConfig";
import IconBackground from "../../../../../../public/svg/screen-svgrepo-com.svg";
import IconFont from "../../../../../../public/svg/font-svgrepo-com.svg";
import IconIcon from "../../../../../../public/svg/window-multiple-svgrepo-com.svg";

export default function ListConfig() {
  return (
    <section className="app__config__content__content">
      <div className="app__config__content__content__cards-content">
        <HeaderConfigContent />
        <aside className="app__config__content__content__cards-content__card">
          <CardConfig icons={[IconBackground, IconFont, IconIcon]} />
        </aside>
      </div>
    </section>
  );
}
