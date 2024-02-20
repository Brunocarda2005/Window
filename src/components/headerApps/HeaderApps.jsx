import { useEffect, useRef, useState } from "react";
import Actions from "../apps/google/google/header/actionsTop/Actions";
import useMove from "@/components/hooks/move/useMove";

export default function HeaderApps(params) {
  const Element = useRef(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(Element.current.parentNode.offsetWidth);
  }, [Element]);
  const { moveHeader, setMoveAct } = useMove(width);

  return (
    <header className={params.classNameHeader} ref={Element}>
      <nav className={params.classNameNav}>
        <section
          className={params.classNameSection}
          onMouseDown={() => setMoveAct(true)}
          onMouseUp={() => setMoveAct(false)}
          onMouseMove={moveHeader}
        >
          {params.children}
        </section>
        <Actions data={params.data} name={params.name} />
      </nav>
    </header>
  );
}
