import { BookOpen, GraduationCap, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-col gap-12 py-20 text-center"
    >
      {/* Intro */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Vincent Ombogo
        </h1>

        <p className="text-xl text-muted-foreground">
          Junior Secondary Science Teacher
        </p>

        <p className="mx-auto max-w-3xl text-muted-foreground">
          CBC-aligned teacher at Kisii Comprehensive School, specializing in
          Integrated Science, Biology, and Agriculture. Passionate about
          inquiry-based learning, practical work, and competency development.
        </p>

        <div className="flex justify-center gap-4">
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#portfolio">View Portfolio</a>
          </Button>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="flex flex-col items-center gap-3 p-6">
            <GraduationCap className="h-8 w-8 text-green-700" />
            <h3 className="font-semibold">Education</h3>
            <p className="text-sm text-muted-foreground text-center">
              B.Ed (Science) – Biology & Agriculture, Kenyatta University
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center gap-3 p-6">
            <Microscope className="h-8 w-8 text-green-700" />
            <h3 className="font-semibold">Teaching Focus</h3>
            <p className="text-sm text-muted-foreground text-center">
              Practical science, experiments, and learner-centered instruction
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center gap-3 p-6">
            <BookOpen className="h-8 w-8 text-green-700" />
            <h3 className="font-semibold">Curriculum</h3>
            <p className="text-sm text-muted-foreground text-center">
              Competency-Based Curriculum (CBC – KICD)
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
          
  );
    }
