import Hero from "../components/sectionHero/Hero";
import Courses from "../components/sectionCourses/Courses";
import LiveSessions from "../components/sectionLiveSessions/LiveSessions";
import Testimonials from "../components/sectionTestimonials/Testimonials";
import CTA from "../components/sectionCTA/CTA";

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
