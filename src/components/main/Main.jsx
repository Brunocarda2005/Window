import Aplications from "../aplication/Aplication";
import Header from "../HeaderNav/Header";
import UseState from "../Context/UseContext";
import Background from "../background/background";
import Window from "../apps/window/Window";
import UserHome from "../apps/userHome/UserHome";
import "../../app/Window.css";
// import { useState } from "react";

export default function MainNav({ children }) {
  // const [root, serRoot] = useState({

  // })

  // const HandleChangeRoot = () => {
  //   setRoot(newColor);
  //   document.documentElement.style.setProperty("--color-letra", newColor);
  // };

  return (
    <main
      className="app"
      // style={{
      //   "--color-principal": "#000"
      // }}
    >
      <Background />
      <UseState>
        <UserHome />
        <Aplications use={"window"} />
        {children}
        <Header />
        <Window />
      </UseState>
    </main>
  );
}
