import SkillsCard from "../skills-card/Skills-card";
import Figma from "../../../../../static/svg/figma.svg";
import Git from "../../../../../static/svg/git.svg";
import Github from "../../../../../static/svg/github.svg";

export default function UX_UI() {
  const Card = {
    card: [
      {
        img: Figma,
        key: 1,
        stats: "Advanced"
      },
      {
        img: Git,
        key: 2,
        stats: "Advanced"
      },
      {
        img: Github,
        key: 3,
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
