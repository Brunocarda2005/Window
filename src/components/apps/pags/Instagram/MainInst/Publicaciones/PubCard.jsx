import { useRef, useContext } from "react";
import Context from "../../../../../Context/Context";

export default function PubCard({ imgCard }) {
  const PubRef = useRef(null);
  const { StateGlobal, setStateGlobal } = useContext(Context);

  const ViewPub = () => {
    let imgPrincipal = PubRef.current.children[1].children;
    let imgsContents = Array.from(imgPrincipal);

    setStateGlobal({
      mensajes: StateGlobal.mensajes,
      Instagram: {
        Imgs: imgsContents,
        state: true,
      },
      linkedin: StateGlobal.linkedin,
    });
  };


  return (
    <aside className="carrucel" ref={PubRef} onClick={ViewPub}>
      <span className="carrucel_show"></span>
      <div className="carrucel_img">
        {imgCard.map((img) => {
          return (
            <div className="main_instagram_publicaciones_card_img" key={img}>
              <picture>
                <img src={img} alt="sad" />
              </picture>
            </div>
          );
        })}
      </div>
      <span className="carrucel_point"></span>
    </aside>
  );
}
