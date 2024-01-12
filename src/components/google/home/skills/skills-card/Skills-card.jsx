import "./Skills-card.css";
import { useContext } from "react";
import Context from "../../../../../components/Context/Context";
import Image from "next/image";

export default function SkillsCard(params) {
  const { setStateGlobal } = useContext(Context);

  const SaveData = (e) => {
    let data = e.target.innerText.split("|");
    setStateGlobal((prevData) => ({
      ...prevData,
      Google: {
        Instagram: {
          Imgs: [],
          state: false,
          interaction: {},
        },
        linkedin: {
          img: "react.svg",
          stats: "",
        },
        portofolio: {
          des: data[0],
          level: data[1],
          img: data[2],
          alt: data[3],
        },
      },
    }));
  };

  return (
    <>
      <div className="skills-frontend-content-card" onClick={SaveData}>
        <Image
          src={params.Pattern}
          alt={params.Pattern}
          className="skills-frontend-content-card-img"
        />
        <span className="skills-frontend-content-card-span">
          {`${params.des} | ${params.stats} | ${params.Pattern} | ${params.alt}`}
        </span>
      </div>
    </>
  );
}
