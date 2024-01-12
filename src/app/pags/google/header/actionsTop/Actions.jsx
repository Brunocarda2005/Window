"use client"
import useClose from "../../../../../components/hooks/close/useClose";
import "../header.css";

export default function Actions(params) {
  const { Close } = useClose();

  return (
    <aside className="google-header-web-close">
      <div className="google-header-web-close-content">
        <div
          className="google-header-web-close-content_min"
          onClick={() => Close(false, params.data[1], params.name)}
        >
          <span className="google-header-web-close-content-min"></span>
        </div>
        <div
          className="google-header-web-close-content_expand"
          onClick={() => {
            let exp = params.data[1];
            Close(params.data[0], !exp, params.name);
          }}
        >
          <span className="google-header-web-close-content-expand"></span>
        </div>
        <div
          className="google-header-web-close-content_close"
          onClick={() => Close(false, params.data[1], params.name)}
        >
          <span className="google-header-web-close-content-close"></span>
        </div>
      </div>
    </aside>
  );
}
