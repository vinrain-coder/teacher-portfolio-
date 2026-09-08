import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "./section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact Me">
      <div className="space-y-6 max-w-3xl">
        <div className="space-y-3 text-muted-foreground">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span>vincentombogo57@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Kisii County, Kenya</span>
          </div>
        </div>

        <Button asChild>
          <a href="mailto:vincentombogo57@gmail.com">Send Email</a>
        </Button>
      </div>
    </Section>
  );
}
