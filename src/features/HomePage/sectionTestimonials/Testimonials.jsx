import { useSelector } from "react-redux";
import HeaderTestimonials from "./HeaderTestimonials";
import TestimonialsGrid from "./TestimonialsGrid";

export default function Testimonials() {
  const isDark = useSelector((state) => state.general.isDark);

  const className = `px-4 py-22 sm:px-6 lg:px-10 ${isDark ? "bg-[#111a14]" : "bg-[#f5f2ea]"}`;

  return (
    <section data-aos="fade-up" id="reviews" className={className}>
      <div className="mx-auto max-w-290">
        <HeaderTestimonials />
        <TestimonialsGrid />
      </div>
    </section>
  );
}
