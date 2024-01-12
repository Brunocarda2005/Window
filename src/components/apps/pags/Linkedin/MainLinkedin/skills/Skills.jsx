import Frontend from "./skills-frontend/Frontend";
import UX_UI from "./skills-ux-ui/UX_UI";
import Backend from "./skills-backend/Backend";

// tengo que implementar la funcionalidad que cuando des click en alguna 
// de las cards se guarde la que cliqueaste y se ponga en foco, para que 
// muestre info de esa habilidad

export default function Skills() {
  return (
    <aside className="social__content__background__app pag2-skills">
      <div className="title-skills-content">
        <h3 className="title-pag2">Conocimientos y aptitudes</h3>      
      </div>
      <div className="social__content__background__app__skills">
        <aside className="social__content__background__app__skills__cards">
          <Frontend />
          <UX_UI />
          <Backend />
        </aside>
      </div>
    </aside>
  );
}
