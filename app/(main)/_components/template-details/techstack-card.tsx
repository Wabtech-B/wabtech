import Image from "next/image";
import React from "react";

type TeckStack = {
  image: string;
  title: string;
  url: string;
  description: string;
  index: number;
};

const TechstackCard = ({
  image,
  title,
  url,
  description,
  index,
}: TeckStack) => {
  return (
    <a
      href={url}
      target="_blank"
      referrerPolicy="no-referrer"
      className="w-[300px] h-[180px] shrink-0 p-4 rounded-xl box-shadow border text-center bg-white dark:bg-gradient-to-tr from-gray-950 to-gray-800 hover:border-l-brand hover:border-b-brand hover:scale-105 transition-a group cursor-pointer"
      data-aos="fade-up"
      data-aos-delay={`${200 * (index / 4)}`}
    >
      <Image
        src={image}
        alt={title}
        width={50}
        height={50}
        className="object-contain mb-3 mx-auto rounded-xl"
      />
      <h1 className="group-hover:text-brand underline">{title}</h1>
      <p className="mt-2 line-clamp-2">{description}</p>
    </a>
  );
};

export default TechstackCard;
