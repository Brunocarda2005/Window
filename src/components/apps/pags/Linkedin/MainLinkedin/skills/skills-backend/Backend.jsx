import SkillsCard from "../skills-card/Skills-card";
import Node from "../../../../../static/svg/nodejs.svg";
import Python from "../../../../../static/svg/python.svg";
import MYsql from "../../../../../static/svg/mysql.svg";

export default function Backend() {
  const Card = {
    card: [
      {
        img: Node,
        key: 1,
        stats: "Initial"
      },
      {
        img: Python,
        key: 2,
        stats: "Initial"
      },
      {
        img: MYsql,
        key: 3,
        stats: "intermediate"
      }
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
