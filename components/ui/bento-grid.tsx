"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import { cn } from "@/lib/utils";

import animationData from "@/data/confetti.json";
import MagicButton from "./magic-button";
import { GlobeDemo } from "./grid-globe";
import dynamic from "next/dynamic";
import { BackgroundLines } from "./background-lines";

const Lottie = dynamic(
  () => import("lottie-react").then((mod) => ({ default: mod.Lottie })),
  { ssr: false }
);

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [copied, setCopied] = useState(false);
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Inquiry-Based", "Collaborative", "Practical"];
  const rightLists = ["CBE Aligned", "ICT Integrated", "Mentorship"];

  const [copied, setCopied] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("vincentombogo57@gmail.com");
    setCopied(true);
    setHasPlayed(false);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-border/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 bg-card",
        className,
      )}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundLines>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundLines>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-muted-foreground z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-foreground`}
          >
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1  w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-muted text-foreground"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3  rounded-lg text-center bg-muted"></span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="py-4 px-3  rounded-lg text-center bg-muted"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-muted text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative w-full h-full">
              {/* Lottie Animation Overlay */}
              {copied && !hasPlayed && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Lottie
                    src={animationData}
                    loop={false}
                    autoplay
                    subscriptions={{ complete: () => setHasPlayed(true) }}
                    className="w-150 h-150"
                  />
                </div>
              )}

              {/* Button */}
              <MagicButton
                title={copied ? "Email Copied!" : "Copy my Email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-primary/10 !rounded-full text-foreground"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
