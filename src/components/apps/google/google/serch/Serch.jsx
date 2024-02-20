import "./serch.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Serch(params) {
  const SerchElemnt = useRef(null);
  const [serching, setSerching] = useState(false);
  const [serchElements, setSerchElements] = useState([]);

  useEffect(() => {}, [SerchElemnt]);
  const UrlValidation = ["portfolio"];

  const SerchPage = () => {
    let URL = SerchElemnt.current.value;
    let ListNew = [];

    if (URL === "") {
      setSerching(false);
    } else {
      setSerching(true);
    }

    function SerchDicotomic(url, list) {
      list.sort();
      let iz = 0;
      let de = list.length - 1;
      let m = null;
      while (iz <= de) {
        m = Math.trunc(de + iz / 2);
        if (list[m] === url) {
          return [list[m]];
        } else if (url > list[m]) {
          iz = m + 1;
        } else if (url < list[m]) {
          de = m - 1;
        }
      }
      return list.slice(m);
    }
    ListNew = SerchDicotomic(URL, UrlValidation);

    setSerchElements(ListNew);
  };

  return (
    <div className={`serch serch_${params.use} serching_${serching}`}>
      <div className="serch__content">
        <Image
          width={20}
          height={20}
          className="google-header-serch-input-content-img"
          id={`${params.use}`}
          src={params.img}
          alt="img google next window"
        />
        <input
          ref={SerchElemnt}
          className="serch__input"
          type="text"
          placeholder={params.placeholder}
          onChange={SerchPage}
        />
      </div>
      <div className={`content_${serching} content`}>
        {serchElements.map((name) => (
          <div className="content_link" key={name}>
            <Link href={`google/${name}`} className="Link">
              {name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
