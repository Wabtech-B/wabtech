import { FaQuoteRight } from "react-icons/fa";
import Slider from "./Slider";
import Image from "next/image";

const Testimonial = () => {
  const testimonialSliderContent = [
    {
      id: 1,
      image: "/1.png",
      name: "John Doe",
      title: "Web Developer",
      quote:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis vel explicabo placeat sunt voluptate. Doloribus fugit error cum molestias quam unde laborum tenetur tempora veniam.",
    },
    {
      id: 2,
      image: "/2.png",
      name: "Jane Smith",
      title: "Graphic Designer",
      quote:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis vel explicabo placeat sunt voluptate. Doloribus fugit error cum molestias quam unde laborum tenetur tempora veniam.",
    },
    {
      id: 3,
      image: "/5.png",
      name: "Raven Kent",
      title: "UI/UX Expert",
      quote:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis vel explicabo placeat sunt voluptate. Doloribus fugit error cum molestias quam unde laborum tenetur tempora veniam.",
    },
  ];
  return (
    <>
      <Slider showDots={false} className="max-w-[500px] w-full mx-auto">
        {testimonialSliderContent.map((content) => (
          <Slider.Item key={content.id}>
            <div className="flex flex-col items-center">
              <Image
                src={content.image}
                alt={content.name}
                width={80}
                height={80}
                className="rounded-full shadow-xl mx-auto object-cover"
              />
              <div className="relative px-16">
                <h1 className="text-md uppercase mt-4">{content.name}</h1>
                <p className="text-sm text-[#0bab7c] capitalize">
                  {content.title}
                </p>
                <p className="text-sm text-slate-500 mt-2">{content.quote}</p>
                <div className="absolute bottom-6">
                  <FaQuoteRight className="text-zinc-400/10 text-8xl absolute" />
                </div>
              </div>
            </div>
          </Slider.Item>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
