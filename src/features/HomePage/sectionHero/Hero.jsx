import { useSelector } from "react-redux";
import ContentSide from "./ContentSide/ContentSide";
import HeroText from "./ContentSide/ContentSide";
import VisualSide from "./VisualSide/VisualSide";

function Hero() {
  const isDark = useSelector((state) => state.general.isDark);

  const className = {
    classNameSection: `relative flex min-h-screen items-center overflow-hidden px-4 sm:px-6 lg:px-10 pt-25 pb-15 ${isDark ? "bg-[#0d1410]" : "bg-[#fdfcf8]"}`,

    classNameContainer:
      "relative z-10 mx-auto grid w-full  max-w-290  grid-cols-1 items-center gap-18 lg:grid-cols-2",
  };

  return (
    <section data-aos="fade" className={className.classNameSection}>
      <div className={className.classNameContainer}>
        <ContentSide />
        <VisualSide />
      </div>
    </section>
  );
}

export default Hero;
