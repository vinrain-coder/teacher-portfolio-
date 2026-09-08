import About from "@/components/about";
import Hero from "@/components/hero";
import Education from "@/components/education";
import Subjects from "@/components/subjects";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Grid from "@/components/grid";
import Experience from "@/components/experience";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Grid />
      <Experience />
      <About />
      <Education />
      <Subjects />
      <Portfolio />
      <Contact />
    </>
  );
}
