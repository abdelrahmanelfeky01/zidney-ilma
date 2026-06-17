import { useSelector } from "react-redux";
import CTAActions from "./CTAActions";
import CTAContent from "./CTAContent";

export default function CTA() {
  const isDark = useSelector((state) => state.general.isDark);

  const className = {
    container: `px-4 py-22 sm:px-6 lg:px-10 ${isDark ? "bg-night" : "bg-light"}`,

    classNameCTAContainer:
      "relative mx-auto max-w-290 overflow-hidden rounded-[28px] px-6 py-8 text-center",
    stylesCTAContainer: {
      background: "linear-gradient(135deg, #4CAF50 0%, #1B5E20 100%)",
    },

    classNameGlow: "pointer-events-none absolute inset-0",

    stylesGlow: {
      background:
        "radial-gradient(ellipse at 20% 50%, rgba(255,193,7,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(255,193,7,0.08) 0%, transparent 60%)",
    },
  };

  return (
    <div id="contact" data-aos="fade-up" className={className.container}>
      <div
        className={className.classNameCTAContainer}
        style={className.stylesCTAContainer}
      >
        {/* Glow overlays */}
        <div className={className.classNameGlow} style={className.stylesGlow} />

        <div className="relative z-10">
          <CTAContent />
          <CTAActions />
        </div>
      </div>
    </div>
  );
}
