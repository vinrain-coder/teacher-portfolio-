"use client";

import { portfolios as staticPortfolios } from "@/data";
import ExpandableCard, { CardData } from "./expandable-card-demo-standard";

interface PortfolioLike {
  id?: number | string;
  title: string;
  des?: string;
  description?: string;
  img?: string;
  image?: string;
  link: string;
  slug?: string;
  _id?: string;
  details?: string[];
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

  const cards: CardData[] = portfolios.map((p) => ({
    id: p.id ?? p._id ?? 0,
    title: p.title,
    description: p.des || p.description || "",
    img: p.img || p.image || "",
    details: p.details,
    link: p.link && p.link !== "#" ? p.link : undefined,
  }));

  return (
    <div className="py-20" id="portfolios">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center">
        {heading}{" "}
        <span className="text-transparent bg-clip-text bg-primary">
          {highlight}
        </span>
      </h1>

      <div className="mt-12">
        <ExpandableCard cards={cards} />
      </div>
    </div>
  );
};

export default Portfolios;
