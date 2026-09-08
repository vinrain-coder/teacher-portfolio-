"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "@/data";
import { textVariant } from "@/utils/motion";

type ExperienceType = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

type ExperienceCardProps = {
  experience: ExperienceType;
};

interface ExperienceProps {
  heading?: string;
  highlight?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--card)",
        color: "var(--foreground)",
        borderRadius: "1rem",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-sm)",
      }}
      contentArrowStyle={{
        borderRight: `7px solid var(--border)`,
      }}
      date={experience.date}
      dateClassName="text-muted-foreground font-medium"
      iconStyle={{
        background: experience.iconBg,
        boxShadow: `0 0 0 4px var(--card), 0 0 0 8px var(--border)`,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-foreground font-bold lg:text-2xl md:text-xl text-base">
          {experience.title}
        </h3>
        <p
          className="text-primary font-semibold text-sm lg:text-base"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-muted-foreground text-sm lg:text-base font-light tracking-wide leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience: React.FC<ExperienceProps> = ({
  heading = "A quick glance at my",
  highlight = "professional journey",
}) => {
  return (
    <section id="experience" className="py-20 space-y-6">
      <motion.div
        variants={textVariant(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center">
          {heading}{" "}
          <span className="text-transparent bg-clip-text bg-primary">
            {highlight}
          </span>
        </h1>
      </motion.div>

      <div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
