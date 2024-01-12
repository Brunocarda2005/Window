import Css from "../../../../../static/svg/css.svg";
import Javascript from "../../../../../static/svg/js.svg";
import React from "../../../../../static/svg/react.svg";
import Html from "../../../../../static/svg/html.svg";
import NextJs from "../../../../../static/svg/next-js.svg";
import Tailwind from "../../../../../static/svg/tailwindcss.svg";
import Json from "../../../../../static/svg/json.svg";
import SkillsCard from "../skills-card/Skills-card";

export default function Frontend() {
  const Card = {
    card: [
      {
        img: Javascript,
        key: 1,
        stats: "Intermediate"
      },
      {
        img: Css,
        key: 2,
        stats: "Advanced"
      },
      {
        img: React,
        key: 3,
        stats: "intermediate"
      },
      {
        img: Html,
        key: 4,
        stats: "Advanced"
      },
      {
        img: NextJs,
        key: 7,
        stats: "initial"
      },
      {
        img: Tailwind,
        key: 8,
        stats: "initial"
      },
      {
        img: Json,
        key: 9,
        stats: "Advanced"
      },
    ],
  };

  return (
    <>
      {Card.card.map((data) => {
        return <SkillsCard Pattern={data.img} key={data.key} stats={data.stats}/>;
      })}
    </>
  );
}
