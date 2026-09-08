"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { portfolios as staticPortfolios } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import Link from "next/link";

interface PortfolioLike {
  id?: number | string;
  title: string;
  des?: string;
  description?: string;
  img?: string;
  image?: string;
  iconLists: string[];
  link: string;
  slug?: string;
  _id?: string;
}

interface PortfolioProps {
  portfolios?: PortfolioLike[];
  heading?: string;
  highlight?: string;
}

const Portfolios = ({
  portfolios: propPortfolios,
  heading = "A selection of teaching",
  highlight = "resources & projects",
}: PortfolioProps) => {
  const portfolios: PortfolioLike[] = propPortfolios || staticPortfolios;

  return (
    <div className="py-20" id="portfolios">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center">
        {heading}{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
          {highlight}
        </span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-8">
        {portfolios.map((portfolio, index) => {
          const title = portfolio.title;
          const des = portfolio.des || portfolio.description || "";
          const img = portfolio.img || portfolio.image || "";
          const iconLists = portfolio.iconLists || [];

          const slug =
            portfolio.slug ||
            title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "");

          return (
            <div
              key={portfolio.id ?? portfolio._id ?? index}
              className="lg:min-h-130 h-100 flex items-center justify-center md:w-75 w-[80vw]"
            >
              <Link href={`/portfolios/${slug}`} className="block w-full">
                <PinContainer title={title} containerClassName="w-full">
                  <div className="relative flex items-center justify-center md:w-75 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-card"
                    >
                      <img src="/bg.png" alt="background" />
                    </div>
                    <img
                      src={img}
                      alt={title}
                      className="z-10 absolute bottom-0"
                    />
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-muted-foreground mt-3"
                  >
                    {des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {iconLists.map((icon, idx) => (
                        <div
                          key={idx}
                          className="border border-border rounded-full bg-background lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * idx + 2}px)`,
                          }}
                        >
                          <img src={icon} alt={`icon-${idx}`} className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-primary lg:text-xl md:text-xs text-sm">
                      View
                      <FaLocationArrow className="ms-3" />
                    </div>
                  </div>
                </PinContainer>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolios;
