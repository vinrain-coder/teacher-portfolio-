"use client";

import { TracingBeam } from "@/components/ui/tracing-beam";
import { GraduationCap, BadgeCheck } from "lucide-react";
import { education } from "@/data";

const iconMap = {
  GraduationCap,
  BadgeCheck,
};

interface EducationProps {
  heading?: string;
  highlight?: string;
}

const EducationItem = ({ item }: { item: (typeof education)[number] }) => {
  const Icon = iconMap[item.icon as keyof typeof iconMap] || BadgeCheck;

  return (
    <div className="md:ml-24 ml-10 mb-10 last:mb-0">
      <div className="relative rounded-xl border bg-card p-6 shadow-sm transition-colors hover:border-primary/50">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2">
            <Icon className="h-5 w-5 text-primary" />
          </span>
          <span className="text-xs font-medium text-muted-foreground">
            {item.year}
          </span>
        </div>
        <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
        <p className="text-primary font-medium mt-1">{item.institution}</p>
        {item.field && (
          <p className="text-sm text-muted-foreground mt-1">{item.field}</p>
        )}
        {item.description && (
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default function Education({
  heading = "Education and",
  highlight = "Qualifications",
}: EducationProps) {
  return (
    <div id="education" className="py-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center">
        {heading}{" "}
        <span className="text-transparent bg-clip-text bg-primary">
          {highlight}
        </span>
      </h1>
      <TracingBeam className="px-6 mt-6 md:mt-10 lg:mt-20">
        {education.map((item) => (
          <EducationItem key={item.id} item={item} />
        ))}
      </TracingBeam>
    </div>
  );
}
