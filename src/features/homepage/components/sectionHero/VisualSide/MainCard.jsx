import CardHeader from "./CardHeader";
import AyahBox from "./AyahBox";
import CoursePills from "./CoursePills";
import Lessons from "./Lessons";
import { useSelector } from "react-redux";

function MainCard() {
  const isDark = useSelector((state) => state.general.isDark);

  const className = {
    classNameContainer: `relative overflow-hidden rounded-3xl border p-8 ${
      isDark ? "bg-[#172019] border-[#223028]" : "bg-white border-[#e8e0d0]"
    }`,
    stylesContainer: {
      boxShadow: "0 4px 24px rgba(76,175,80,0.08)",
      animation: "card-rise 0.8s 0.3s both ease-out",
    },
  };

  return (
    <div
      className={className.classNameContainer}
      style={className.stylesContainer}
    >
      <CardHeader />
      <AyahBox />
      <CoursePills />
      <Lessons />
    </div>
  );
}

export default MainCard;
