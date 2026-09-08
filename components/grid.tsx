import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

interface GridProps {
  heading?: string;
  highlight?: string;
}

const Grid = ({ heading = "About", highlight = "me" }: GridProps) => {
  return (
    <section id="about" className="py-20 space-y-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center">
        {heading}{" "}
        <span className="text-transparent bg-clip-text bg-primary">
          {highlight}
        </span>
      </h1>
      <BentoGrid className="w-full">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
