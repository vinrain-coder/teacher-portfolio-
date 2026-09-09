"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { FaLocationArrow } from "react-icons/fa6";

export interface CardData {
  id: number | string;
  title: string;
  description: string;
  img: string;
  details?: string[];
  link?: string;
}

interface ExpandableCardProps {
  cards: CardData[];
}

export default function ExpandableCard({ cards }: ExpandableCardProps) {
  const [active, setActive] = useState<CardData | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }

    document.body.style.overflow = active ? "hidden" : "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] h-full w-full z-[9999]"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[9999] flex items-start sm:items-center justify-center pointer-events-none">
            <motion.button
              key={`expandable-close-${active.id}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-9 w-9 shadow-lg z-50 pointer-events-auto"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.id}-${id}`}
              ref={ref}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-[calc(100%-1.5rem)] sm:w-full max-w-[540px] max-h-[88vh] sm:max-h-[90vh] mt-14 sm:mt-0 flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl rounded-2xl overflow-hidden shadow-2xl pointer-events-auto"
            >
              <motion.div layoutId={`image-${active.id}-${id}`}>
                <div className="relative w-full h-48 sm:h-64 lg:h-72 overflow-hidden shrink-0">
                  <img
                    src={active.img}
                    alt={active.title}
                    className="relative z-10 w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <div className="flex-1 overflow-y-auto overscroll-contain">
                <div className="p-5 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <motion.h3
                        layoutId={`title-${active.id}-${id}`}
                        className="font-bold text-xl sm:text-2xl text-neutral-800 dark:text-neutral-100 leading-tight"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.id}-${id}`}
                        className="text-neutral-500 dark:text-neutral-400 text-sm mt-2 leading-relaxed"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    {active.link && active.link !== "#" && (
                      <motion.a
                        layoutId={`button-${active.id}-${id}`}
                        href={active.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-2 px-4 py-2.5 text-sm rounded-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        Visit
                        <FaLocationArrow className="text-xs" />
                      </motion.a>
                    )}
                  </div>

                  {active.details && active.details.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-border">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                        Key Highlights
                      </h4>
                      <ul className="space-y-3">
                        {active.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 * idx }}
                            className="flex gap-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed"
                          >
                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.id}-${id}`}
            key={`card-${card.id}-${id}`}
            onClick={() => setActive(card)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ delay: index * 0.07, type: "spring", stiffness: 400, damping: 25 }}
            className="group flex flex-col p-5 sm:p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="relative w-full h-40 sm:h-48 mb-5 overflow-hidden rounded-xl">
              <motion.img
                src={card.img}
                alt={card.title}
                className="relative z-10 w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              />
            </div>

            <h3 className="font-bold text-base sm:text-lg text-center line-clamp-1 text-neutral-800 dark:text-neutral-100">
              {card.title}
            </h3>

            <p className="text-muted-foreground text-sm text-center line-clamp-2 mt-2 leading-relaxed">
              {card.description}
            </p>

            <div className="flex items-center justify-end w-full mt-5">
              <motion.div
                className="flex items-center gap-1.5 text-primary text-sm font-medium"
                whileHover={{ gap: "0.5rem" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                Details
                <FaLocationArrow className="text-xs" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0, rotate: -90 }}
    animate={{ opacity: 1, rotate: 0 }}
    exit={{ opacity: 0, rotate: 90, transition: { duration: 0.1 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-neutral-700 dark:text-neutral-200"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);
