import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="space-y-6 py-16">
      <h2 className="text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
  
}
