import { Leaf, FlaskConical, Dna } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Section from "./section ";

export default function Subjects() {
  return (
    <Section id="subjects" title="Subjects Taught">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-6 space-y-3">
            <FlaskConical className="h-7 w-7 text-primary" />
            <h3 className="font-semibold">Integrated Science</h3>
            <p className="text-sm text-muted-foreground">
              Inquiry-based learning, experiments, and real-life applications.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-3">
            <Dna className="h-7 w-7 text-primary" />
            <h3 className="font-semibold">Biology</h3>
            <p className="text-sm text-muted-foreground">
              Life processes, ecology, health education, and practical work.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-3">
            <Leaf className="h-7 w-7 text-primary" />
            <h3 className="font-semibold">Agriculture</h3>
            <p className="text-sm text-muted-foreground">
              Sustainable farming, agribusiness basics, and school projects.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
