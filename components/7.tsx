import { Mail, MapPin } from "lucide-react";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <Section id="contact" title="Contact Me">
      <div className="space-y-6 max-w-3xl">
        <div className="space-y-3 text-muted-foreground">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-green-700" />
            <span>vincentombogo@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-green-700" />
            <span>Kisii County, Kenya</span>
          </div>
        </div>

        <Button asChild>
          <a href="mailto:vincentombogo@gmail.com">
            Send Email
          </a>
        </Button>
      </div>
    </Section>
  )
    ;
      }
