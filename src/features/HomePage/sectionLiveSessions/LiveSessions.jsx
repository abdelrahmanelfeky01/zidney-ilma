import { useSelector } from "react-redux";
import CardsGrid from "./CardsGrid";
import HeaderLiveSessions from "./HeaderLiveSessions";
import ZoomBox from "./ZoomBox";

export default function LiveSessions() {
  const isDark = useSelector((state) => state.general.isDark);

  const className = `px-4 py-22 sm:px-6 lg:px-10 ${isDark ? "bg-[#0d1410]" : "bg-[#fdfcf8]"}`;

  return (
    <section data-aos="fade-up" id="paid-courses" className={className}>
      <div className="mx-auto max-w-290">
        <HeaderLiveSessions />
        <ZoomBox />
        <CardsGrid />
      </div>
    </section>
  );
}
