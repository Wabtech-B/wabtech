import React from "react";
import Pill from "@/components/pill";
import Image from "next/image";

const tools = [
  "/tools/next.png",
  "/tools/react.png",
  "/tools/typescript.png",
  "/tools/javascript.png",
  "/tools/tailwind.png",
  "/tools/nodejs.png",
  "/tools/express.png",
  "/tools/php.png",
  "/tools/laravel.png",
  "/tools/firebase.png",
  "/tools/prisma.png",
  "/tools/mongodb.png",
  "/tools/mysql.png",
  "/tools/postgresql.png",
  "/tools/figma.png",
  "/tools/adobe-xd.png",
];

const Tools = () => {
  return (
    <section className="py-28 relative">
      <div className="absolute w-full h-full -z-10 bg-balls-light dark:bg-balls-dark bg-center top-1/2 -translate-y-1/2 bg-no-repeat opacity-50 dark:opacity-100" />
      <div className="max-w-7xl mx-auto px-3">
        <div className="text-center">
          <Pill text="Tools" />
          <h1
            className="-mt-8 text-3xl font-bold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Tools
          </h1>
          <p className="mt-2" data-aos="fade-up" data-aos-delay="150">
            Explore our arsenal of digital tools and technologies designed to
            empower businesses and drive success in today&apos;s dynamic digital
            landscape.
          </p>
        </div>

        <div className="mt-4 flex-center-center flex-wrap gap-4 relative z-10">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="p-4 rounded-xl box-shadow border text-center bg-white dark:bg-gradient-to-tr from-gray-950 to-gray-800 cursor-default hover:border-l-brand hover:border-b-brand hover:scale-105 transition-a w-[70px] h-[70px] shrink-0 flex-center-center"
              data-aos="fade-up"
              data-aos-delay={`${200 * (index / 4)}`}
            >
              <div className="relative h-[40px] w-[40px] mx-auto">
                <Image
                  src={tool}
                  alt={"Tool"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
