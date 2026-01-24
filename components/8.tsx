import { FolderOpen } from "lucide-react";
import Section from "@/components/section";

export default function PortfolioSection() {
  return (
    <Section id="portfolio" title="Teaching Portfolio">
      <div className="space-y-4 max-w-3xl text-muted-foreground">
        <div className="flex gap-4">
          <FolderOpen className="h-6 w-6 text-green-700 mt-1" />
          <ul className="list-disc pl-4 space-y-1">
            <li>CBC Schemes of Work (Junior Secondary)</li>
            <li>Detailed Lesson Plans</li>
            <li>Assessment Rubrics & Learner Projects</li>
            <li>Science Fair & Exhibition Projects</li>
            <li>Agriculture Demonstration & School Garden Projects</li>
          </ul>
        </div>

        <p className="text-sm italic">
          Teaching resources and downloadable PDFs will be added soon.
        </p>
      </div>
    </Section>
  );

}
