import { Briefcase } from "lucide-react";
import Section from "./section ";

export default function Experience() {
  return (
    <Section id="experience" title="Teaching Experience">
      <div className="space-y-6 max-w-3xl">
        <div className="flex gap-4">
          <Briefcase className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="font-semibold">Junior Secondary Science Teacher</h3>
            <p className="text-sm text-muted-foreground">
              Kisii Comprehensive School
            </p>

            <ul className="mt-3 list-disc pl-5 space-y-1 text-muted-foreground">
              <li>
                Teaching Integrated Science, Biology & Agriculture (Grade 7–9)
              </li>
              <li>Designing CBE-aligned lesson plans and assessments</li>
              <li>Conducting practical lessons and learner projects</li>
              <li>Patron – Science & Agriculture Clubs</li>
              <li>Mentoring learners in environmental conservation</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
