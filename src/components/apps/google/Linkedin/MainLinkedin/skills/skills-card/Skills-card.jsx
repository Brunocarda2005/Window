import { useContext } from "react";
import Context from "../../../../../../Context/Context";

export default function SkillsCard(atr) {
  const { StateGlobal, setStateGlobal } = useContext(Context);
  let IMGArray = atr.Pattern.split("/")
  let IMG = IMGArray[IMGArray.length - 1]
  
  
  const SaveData = (e) => {
    let data = e.target.attributes[1].nodeValue.split(",")
    setStateGlobal({
      github: StateGlobal.github,
      Instagram: StateGlobal.Instagram,
      linkedin: {
        img: data[0],
        stats: data[1],
      },
    });
  };

  return (
    <>
      <div className="skills-frontend-content-card" onClick={SaveData}>
        <img
          src={atr.Pattern}
          alt={atr.Pattern}
          className="skills-frontend-content-card-img"
        />
        <span
          className="skills-frontend-content-card-span"
          data={[IMG, atr.stats]}
        ></span>
      </div>
    </>
  );
}
