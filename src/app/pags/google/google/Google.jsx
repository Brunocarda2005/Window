"use client"
import "./google.css";
import { useRef, useContext} from "react";
import ContentGoogle from "../content/ContentGoogle";
import HeaderGoogle from "../header/Header";
import Context from "../../../../components/Context/Context";

export default function Google(params) {
  const { StateGlobal } = useContext(Context);
  const Element = useRef(null)

  return (
    <main
      className={`google  app_exp-${StateGlobal.aplications.google[1]}`}
      id={`app_${StateGlobal.aplications.google[0]}`}
      style={{
        top: `${StateGlobal.app.y}px`,
        left: `${StateGlobal.app.x}px`,
      }}
      ref={Element}
    >
      <HeaderGoogle  Width={Element}/>
      <ContentGoogle>{params.children}</ContentGoogle>
    </main>
  );
}
