"use client";
import "./Skills-card.css";
import { useContext } from "react";
import Context from "../../../../../../Context/Context";
import Image from "next/image";

export default function SkillsCard(params) {
  const { StateGlobal, setStateGlobal } = useContext(Context);

  const SaveData = () => {
    setStateGlobal((prevData) => ({
      ...prevData,
      Google: {
        Instagram: StateGlobal.Google.Instagram,
        linkedin: StateGlobal.Google.linkedin,
        portofolio: {
          des: params.des,
          level: params.stats,
          img: params.Pattern.src,
          alt: params.alt,
        },
      },
      Config: StateGlobal.Config
    }));
  };

  return (
    <>
      <div className="skills-frontend-content-card" onClick={SaveData}>
        <Image
          width={20}
          height={20}
          src={params.Pattern.src}
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
