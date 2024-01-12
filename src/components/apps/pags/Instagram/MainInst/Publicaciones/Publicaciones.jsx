import PubCard from "./PubCard";
import { useContext, useState } from "react";
import Context from "../../../../../Context/Context";
import PostPrecentacion from "../../../../static/svg/post1.svg";
import PostPrecentacion2 from "../../../../static/svg/post2.svg";
import Comments from "../../../../static/svg/commentIns.svg";
import share from "../../../../static/svg/share.svg";
import user from "../../../../static/fotos/Instagram.png";
import "./Publicaciones.css";

export default function Publicaciones() {
  const { StateGlobal, setStateGlobal } = useContext(Context);
  const [interaction, setIteraction] = useState({
    like: {
      fill: "#fff",
    },
    comment: "",
    share: false,
  });
  let point = 41;

  const SwitchState = () => {
    setStateGlobal({
      Instagram: {
        Imgs: StateGlobal.Instagram.Imgs,
        state: false,
      },
      github: StateGlobal.github,
      linkedin: StateGlobal.linkedin,
    });
  };

  const LikeIteraction = () => {
    if (interaction.like.fill === "#fff") {
      setIteraction({
        like: {
          fill: "#ff0000",
          animationName: "rubberBand",
          opacity: "1",
        },
        comment: "",
        share: false,
      });
    } else {
      setIteraction({
        like: {
          fill: "#fff",
        },
        comment: "",
        share: false,
      });
    }
  };

  return (
    <section className="main_instagram_publicaciones">
      <section className="main_instagram_publicaciones_cards">
        <PubCard imgCard={[PostPrecentacion, PostPrecentacion2]} />
        <PubCard imgCard={[PostPrecentacion, PostPrecentacion2]} />
      </section>
      <aside
        className={`main_instagram_publicaciones_publicacion-complet Pub_${StateGlobal.Instagram.state}`}
      >
        <span
          className="main_instagram_publicaciones_publicacion-complet_background"
          onClick={SwitchState}
        ></span>
        <section className="pub_true_complete">
          <header className="pub_true_complete_header">
            <img src={user} alt="" />
          </header>
          <div className="pub_true_complete_img">
            <aside className="carrucel_complete">
              <div className="carrucel_complete_img">
                {StateGlobal.Instagram.state
                  ? StateGlobal.Instagram.Imgs.map((img1) => {
                      let imagen =
                        img1.children[0].children[0].attributes[0].nodeValue;
                      point += 5;
                      return (
                        <div className="pub_true_complete_img-img" key={imagen}>
                          <picture>
                            <img src={imagen} alt="sad" />
                          </picture>
                          <span
                            className={`carrucel_point_span point_${point}`}
                            style={{
                              position: "absolute",
                              left: `${point}%`,
                            }}
                          ></span>
                        </div>
                      );
                    })
                  : null}
              </div>
            </aside>
          </div>
          <footer className="pub_true_complete_footer">
            <div className="pub_true_complete_footer_complete">
              <span className="pub_true_complete_footer_complete_btn"></span>
            </div>
            <aside className="pub_true_complete_footer_interaction">
              <div
                className="pub_true_complete_footer_interaction_like"
                onClick={LikeIteraction}
              >
                <svg
                  height="1.1em"
                  style={interaction.like}
                  viewBox="0 0 512 512"
                  id="heart"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              </div>
              <img src={Comments} alt="" />
              <img src={share} alt="" />
            </aside>
            <aside className="pub_true_complete_footer_comments">
              <div className="pub_true_complete_footer_comments_content">
                <p className="pub_true_complete_footer_comments_content_text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <span className="pub_true_complete_footer_comments_more">
                ...More
              </span>
            </aside>
          </footer>
        </section>
      </aside>
    </section>
  );
}
