import { Variants } from "framer-motion";

export const textVariant = (delay: number): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: "right" | "left" | "up" | "down" | "",
  type: "spring" | "tween",
  delay: number,
  duration: number
): Variants => {
  return {
    hidden: {
      x: direction === "right" ? 50 : direction === "left" ? -50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        duration: duration,
        delay: delay,
      },
    },
  };
};
