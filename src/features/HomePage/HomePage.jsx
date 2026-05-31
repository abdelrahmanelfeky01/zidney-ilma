import Hero from "./sectionHero/Hero";
import Courses from "./sectionCourses/Courses";
import LiveSessions from "./sectionLiveSessions/LiveSessions";
import Testimonials from "./sectionTestimonials/Testimonials";
import CTA from "./sectionCTA/CTA";

function HomePage() {
  return (
    <>
      <Hero />
      <Courses />
      <LiveSessions />
      <Testimonials />
      <CTA />
    </>
  );
}

export default HomePage;
