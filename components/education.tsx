import { GraduationCap, BadgeCheck } from "lucide-react";
import Section from "./section";

export default function Education() {
  return (
    <Section id="education" title="Education & Qualifications">
      <div className="space-y-6 max-w-3xl">
        <div className="flex gap-4">
          <GraduationCap className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="font-semibold">Bachelor of Education (Science)</h3>
            <p className="text-sm text-muted-foreground">
              Biology & Agriculture – Kenyatta University
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <BadgeCheck className="h-6 w-6 text-primary mt-1" />
          <ul className="list-disc pl-4 text-muted-foreground space-y-1">
            <li>TSC Registered Teacher</li>
            <li>CBE Curriculum Implementation (KICD)</li>
            <li>ICT Integration in Teaching & Learning</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
