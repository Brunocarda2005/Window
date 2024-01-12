import "./MainInst.css";
import UserImg from "../../../static/fotos/Instagram.png";
import Link from "../../../static/svg/link.svg";
import Publicaciones from "./Publicaciones/Publicaciones";


export default function MainInst() {
  return (
    <main className="main__instagram">
      <section className="main_instagram_user">
        <div className="main_instagram_user_content-profile">
          <div className="main_instagram_user_content-profile_profile">
            <picture>
              <img src={UserImg} alt="" />
            </picture>
          </div>
          <div className="main_instagram_user_content-profile_content">
            <h4 className="main_instagram_user_content-profile_content_name">
              bruno_carda
            </h4>
            <a className="main_instagram_user_content-profile_content_btnSeguir">
              Seguir
            </a>
          </div>
        </div>
        <div className="main_instagram_user_content-data">
          <div className="main_instagram_user_content-data_info">
            <span className="main_instagram_user_content-data_info_name">
              bruno cardamone
            </span>
            <p className="main_instagram_user_content-data_info_blog">
              Blog personal
            </p>
            <p className="main_instagram_user_content-data_info_city">
              Pergamino | Rosario
            </p>
            <a
              className="main_instagram_user_content-data_info_portofolio"
              href="https://github.com/Brunocarda2005/Bruno"
            >
              <img
                className="main_instagram_user_content-data_info_portofolio_img"
                src={Link}
                alt=""
              />
              Portofolio
            </a>
          </div>
        </div>
      </section>
      <aside className="main_instagram_seguidores-content">
        <div className="main_instagram_seguidores-content_content">
          <div className="main_instagram_seguidores-content_publicaciones seguidores_style">
            <span>2</span>
            <p>publicaciones</p>
          </div>
          <div className="main_instagram_seguidores-content_seguidores seguidores_style">
            <span>733</span>
            <p>seguidores</p>
          </div>
          <div className="main_instagram_seguidores-content_seguidos seguidores_style">
            <span>608</span>
            <p>seguidos</p>
          </div>
        </div>
      </aside>
      <Publicaciones />
    </main>
  );
}

