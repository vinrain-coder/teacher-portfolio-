"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import ContactForm from "./contact-form";
import MagicButton from "./ui/magic-button";

const Footer = () => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  return (
    <footer
      className="relative w-full pt-20 pb-10 overflow-hidden"
      id={isHomepage ? "contact" : undefined}
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/footer-grid.svg"
          alt="Background pattern"
          className="w-full h-full opacity-40 object-cover"
        />
      </div>

      <div className="relative z-10">
        {isHomepage ? (
          <>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight lg:max-w-[45vw] text-center">
                Let&apos;s{" "}
                <span className="text-primary">
                  inspire the next generation
                </span>{" "}
                together
              </h1>
              <p className="text-muted-foreground md:mt-10 my-5 text-center">
                Have a question or want to connect? Reach out and let&apos;s
                discuss how I can help shape future innovators through science
                education.
              </p>
            </div>

            <ContactForm />
          </>
        ) : (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Let&apos;s <span className="text-primary">get in touch</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-md text-center mb-6">
              Interested in connecting or collaborating? I&apos;d love to hear
              from you.
            </p>
            <Link href="/#contact">
              <MagicButton
                title="Get in touch"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="!rounded-full"
              />
            </Link>
          </div>
        )}

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light text-muted-foreground">
            Copyright &copy; {new Date().getFullYear()} Vincent Ombogo
          </p>

          <div className="flex items-center md:gap-3 gap-6 mt-6 md:mt-0">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-all duration-300 text-muted-foreground"
              >
                <img src={info.img} alt="" width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
