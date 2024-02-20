"use client";
import { useContext } from "react";
import useClose from "../../../../../hooks/close/useClose";
import "../header.css";
import Context from "@/components/Context/Context";

export default function Actions(params) {
  const { Close } = useClose();
  const { StateGlobal } = useContext(Context);

  return (
    <aside className="google-header-web-close">
      <div className="google-header-web-close-content">
        <div
          className="google-header-web-close-content_min"
          onClick={() => Close(false, false, params.name)}
        >
          <span className="google-header-web-close-content-min"></span>
        </div>
        <div
          className="google-header-web-close-content_expand"
          onClick={() => {
            let exp = StateGlobal.aplications.expand;
            Close(params.data, !exp, params.name);
          }}
        >
          <span className="google-header-web-close-content-expand"></span>
        </div>
        <div
          className="google-header-web-close-content_close"
          onClick={() => Close(false, false, params.name)}
        >
          <span className="google-header-web-close-content-close"></span>
        </div>
      </div>
    </aside>
  );
}
