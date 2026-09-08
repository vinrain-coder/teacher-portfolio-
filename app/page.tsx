import About from "@/components/about";
import Hero from "@/components/hero";
import Education from "@/components/education ";
import Experience from "@/components/experience ";
import Subjects from "@/components/subjects ";
import Portfolio from "@/components/portfolio ";
import Contact from "@/components/contact";
import Grid from "@/components/grid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Grid />
      <About />
      <Education />
      <Experience />
      <Subjects />
      <Portfolio />
      <Contact />
    </>
  );
}
