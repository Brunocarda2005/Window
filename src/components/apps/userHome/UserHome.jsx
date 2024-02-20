"use client";
import "./userHome.css";
import { useContext, useState, useRef } from "react";
import Image from "next/image";
import imgBackground from "./Jjjjjj.jpg";
import imgProfile from "../../static/svg/Group 10.svg";
import Context from "@/components/Context/Context";
import Clock from "../clock/Clock";

export default function HomePage() {
  const { StateGlobal, setStateGlobal } = useContext(Context); // context
  const [passwordName, setPasswordName] = useState([false, false]); // password
  const [PasswordAct, setPasswordAct] = useState(false); // name
  const PasswordElemnt = useRef(null); // element password
  const { formattedDate, formattedTime } = Clock();

  // password
  const PasswordSave = (e) => {
    if (StateGlobal.app.data.password != "") {
      setPasswordName([
        passwordName[0],
        [
          StateGlobal.app.data.password === e.target.value,
          StateGlobal.app.data.password,
        ],
      ]);
    } else if (e.target.value.length < 4) {
      return;
    } else {
      setPasswordName([passwordName[0], [true, e.target.value]]);
    }
  };

  // name
  const NameSave = (e) => {
    if (StateGlobal.app.data.name != "") {
      setPasswordName([[true, StateGlobal.app.data.name], passwordName[1]]);
    } else if (e.target.value.length != 0) {
      setPasswordName([[true, e.target.value], passwordName[1]]);
    }
  };

  // save name and password
  const Save = (e) => {
    e.preventDefault();
    if (passwordName[0][0] && passwordName[1][0]) {
      setStateGlobal({
        app: {
          x: StateGlobal.app.x,
          y: StateGlobal.app.y,
          app: "on",
          data: {
            name: passwordName[0][1],
            password: passwordName[1][1],
          },
        },
        aplications: StateGlobal.aplications,
        Google: StateGlobal.Google,
        Config: StateGlobal.Config,
      });
    }
    PasswordElemnt.current.value = "";
    setPasswordAct(false);
  };

  return (
    <main
      className={`app__homeUser  homeUser_${StateGlobal.app.app === "off"}`}
    >
      <Image
        className="app__homeUser__img"
        src={imgBackground}
        alt=""
        width={"auto"}
        height={"auto"}
      />
      <section
        className="app__homeUser__time"
        onClick={() => setPasswordAct(true)}
      >
        <div className={`app__homeUser__time__content time__${PasswordAct}`}>
          <h2>{formattedTime}</h2>
          <p>{formattedDate}</p>
        </div>
      </section>
      <section className={`app__homeUser__form-section form__${PasswordAct}`}>
        <Image
          className="app__homeUser__form-section__img"
          src={imgProfile}
          alt=""
          width={"auto"}
          height={"auto"}
        />
        <h3 className="app__homeUser__form-section__name">
          {StateGlobal.app.data.name === ""
            ? "User"
            : StateGlobal.app.data.name}
        </h3>
        <form className="app__homeUser__form-section__form">
          <input
            className={`input input_${StateGlobal.app.data.name != ""}`}
            type="text"
            placeholder="Name"
            onChange={NameSave}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={PasswordSave}
            ref={PasswordElemnt}
          />
          <div className="app__homeUser__form-section__form__content">
            <button
              className="app__homeUser__form-section__form__content__btn"
              onClick={Save}
            >
              <span className="app__homeUser__form-section__form__content__btn__span"></span>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
