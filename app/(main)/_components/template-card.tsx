import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TechStack = {
  name: string;
  image: string;
  description?: string;
};

type Template = {
  name: string;
  slug: string;
  image: string;
  price: number;
  category: string;
  techStacks: TechStack[];
  width?: string;
  index: number;
};

const TemplateCard = ({
  slug,
  name,
  image,
  price,
  category,
  techStacks,
  width,
  index,
}: Template) => {
  return (
    <Link
      href={`/templates/${slug}`}
      className={cn(
        "rounded-2xl box-shadow dark:box-shadow-lg p-2 bg-white dark:bg-gray-900 border",
        width
      )}
      data-aos="fade-up"
      data-aos-delay={`${200 * index}`}
    >
      <div className="w-full h-[200px] md:h-[300px] overflow-hidden rounded-xl relative">
        <Image
          src={`/images/preview2.png`}
          alt={name}
          fill
          className="object-cover object-left"
        />
        <div className="absolute top-1 right-2 text-sm bg-yellow-200 text-yellow-700 px-2 py-[2px] rounded-full">
          {category}
        </div>
      </div>
      <div className="flex-center-between mt-3">
        <h1 className="flex-1 truncate text-xl font-semibold" title={name}>
          {name}
        </h1>
        <div className="ml-3">
          <h1 className="text-2xl font-semibold">
            {price ? `$${price}` : <span className="text-brand">Free</span>}
          </h1>
        </div>
      </div>
      <div className="mt-2 flex-center-between">
        <div className="flex-align-center gap-x-2">
          {techStacks.map((stack, index) => (
            <Image
              src={stack.image}
              alt={stack.name}
              key={index}
              width={25}
              height={25}
              className="object-contain rounded-full"
              title={stack.name}
            />
          ))}
        </div>
        <Button>More Info</Button>
      </div>
    </Link>
  );
};

export default TemplateCard;
