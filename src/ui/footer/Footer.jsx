import { useSelector } from "react-redux";
import Brand from "./Brand";
import Copyright from "./Copyright";
import FooterCols from "./FooterCols";

export default function Footer() {
  const isDark = useSelector((state) => state.general.isDark);

  const className = {
    footerContainer: `border-t px-4 sm:px-6 lg:px-10 pt-15 pb-7 ${
      isDark ? "bg-[#111a14] border-[#223028]" : "bg-[#f5f2ea] border-[#e8e0d0]"
    }`,

    container: `mx-auto mb-7 grid max-w-290 grid-cols-1 gap-12 border-b pb-12 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] ${isDark ? "border-[#223028]" : "border-[#e8e0d0]"}`,
  };

  return (
    <footer className={className.footerContainer}>
      <div className={className.container}>
        <Brand />
        <FooterCols />
      </div>
      <Copyright />
    </footer>
  );
}
