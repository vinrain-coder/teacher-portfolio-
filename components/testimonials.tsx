"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/data";

interface TestimonialsProps {
  heading?: string;
  highlight?: string;
}
const Testimonials = ({
  heading = "My",
  highlight = "Testimonials",
}: TestimonialsProps) => {
  return (
    <div id="testimonials" className="py-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center">
        {heading}{" "}
        <span className="text-transparent bg-clip-text bg-primary">
          {highlight}
        </span>
      </h1>
      <div className="max-w-6xl mx-auto px-4 md:mt-10">
        <p className="text-muted-foreground text-lg max-w-2xl mb-10 text-center mx-auto">
          Hear from students, parents, and colleagues about the impact of
          competency-based science education.
        </p>
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </div>
  );
};

export default Testimonials;
