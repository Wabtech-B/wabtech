import React from "react";
import Pill from "@/components/pill";
import Image from "next/image";

const services = [
  {
    title: "Web Design",
    description:
      "Tailored designs crafted to engage users, enhance brand identity, and drive conversions effectively.",
    icon: "/images/web-design.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive interfaces and seamless user experiences for websites and applications that captivate audiences.",
    icon: "/images/ui.png",
  },
  {
    title: "Design to Code",
    description:
      "Transforming creative designs into clean, efficient, and responsive code for seamless digital experiences.",
    icon: "/images/clean-code.png",
  },
  {
    title: "Templates and Customization",
    description:
      "Extensive collection of templates and personalized solutions to meet unique design needs effortlessly.",
    icon: "/images/template.png",
  },
];

const HomeServices = () => {
  return (
    <section className="-mt-16 relative z-10">
      <div className="max-w-7xl mx-auto px-3">
        <div className="text-center">
          <Pill text="Services" />
          <h1
            className="-mt-8 text-3xl font-bold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Services
          </h1>
          <p className="mt-2" data-aos="fade-up" data-aos-delay="150">
            We offer a wide range of digital services and solutions to help
            businesses succeed in the digital landscape.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 rounded-xl box-shadow border text-center dark:bg-gradient-to-tr from-gray-950 to-gray-800 cursor-default hover:border-l-brand hover:border-b-brand hover:scale-105 transition-a"
              data-aos="fade-up"
              data-aos-delay={`${200 * index}`}
            >
              <div className="relative h-[80px] w-[80px] mx-auto">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
