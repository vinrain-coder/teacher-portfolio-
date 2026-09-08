import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Education from "@/components/education";
import Subjects from "@/components/subjects";
import Portfolio from "@/components/portfolio";
import Grid from "@/components/grid";
import Experience from "@/components/experience";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Grid />
      <Experience />
      <Education />
      <Subjects />
      <Portfolio />
    </>
  );
}
