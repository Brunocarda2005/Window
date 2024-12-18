import Image from "next/image";
import wave from "../../../../../../../public/svg/wave.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <Image
        width={"auto"}
        height={"auto"}
        src={wave}
        alt=""
        className="footer-img"
      />
      <div className="footer-content">
        <div className="footer-content-img">
          <p>© 2022 Bruno Cardamone</p>
        </div>
      </div>
    </footer>
  );
}
