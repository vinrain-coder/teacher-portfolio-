"use client";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { CalendarDays, Users, TrendingUp, Award } from "lucide-react";

import { fadeIn } from "@/utils/motion";

const stats = [
  {
    id: 1,
    value: "5+",
    label: "Years of Teaching Experience",
    icon: CalendarDays,
  },
  {
    id: 2,
    value: "500+",
    label: "Students Taught",
    icon: Users,
  },
  {
    id: 3,
    value: "95%",
    label: "CBC Pass Rate",
    icon: TrendingUp,
  },
  {
    id: 4,
    value: "4+",
    label: "Professional Certifications",
    icon: Award,
  },
];

interface StatCardProps {
  index: number;
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const StatCard = ({ index, value, label, icon: Icon }: StatCardProps) => (
  <Tilt className="w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-primary p-[1px] rounded-[20px] shadow-card"
    >
      <div
        // @ts-expect-error react-tilt passes options to child div
        options={{
          max: 15,
          scale: 1,
          speed: 450,
        }}
        className="bg-card rounded-[20px] py-8 px-6 min-h-[240px] flex justify-center items-center flex-col"
      >
        <div className="mx-auto w-fit rounded-lg bg-primary/10 p-3 mb-4">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-foreground text-3xl font-bold text-center tracking-tight">
          {value}
        </h3>
        <p className="text-muted-foreground text-sm text-center mt-2">
          {label}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Stats = () => {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.id}
            index={index}
            value={stat.value}
            label={stat.label}
            icon={stat.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
