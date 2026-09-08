import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow } from "react-icons/fa6";
import { ShimmerButton } from "./ui/shimmer-button";

const Hero = () => {
  return (
    <div className="relative pb-10 min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-x-hidden">
      <div className="absolute inset-0 flex items-center justify-center bg-background dark:bg-grid-white/[0.03] bg-grid-black/[0.1]">
        <div
          className={cn(
            "absolute inset-0 z-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,rgba(100,100,100,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,100,100,0.07)_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-background mask-[radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />
      </div>

      <div className="hidden lg:block">
        <Spotlight
          className="absolute top-0 left-[-100] w-[25vw] h-[40vh] scale-x-[-1] md:w-[25vw] md:h-[80vh]"
          fill="var(--color-primary)"
        />
        <Spotlight
          className="absolute top-0 right-[-100] w-[25vw] h-[40vh] md:w-[25vw] md:h-[80vh]"
          fill="var(--color-primary)"
        />
      </div>

      <div className="flex justify-center relative z-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <ShimmerButton className="uppercase tracking-widest text-xs text-center max-w-80 md:mt-12 mt-16">
            <span>📚 Junior Secondary Science Educator</span>
          </ShimmerButton>

          <TextGenerateEffect
            words="Inspiring the Next Generation of Scientists and Innovators"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 md:text-lg lg:text-2xl text-foreground">
            Hi, I&apos;m Vincent Ombogo, a passionate educator at Kisii
            Comprehensive School, dedicated to nurturing curiosity through
            hands-on science education.
          </p>
          <a href="#about">
            <MagicButton
              title="Explore My Work"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="!rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
