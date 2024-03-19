import Image from "next/image";

const Screenshots = ({ screenshots }: { screenshots: Screenshot[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {screenshots?.map((screenshot, index) => (
        <a
          href={screenshot.url}
          className="w-full shrink-0 h-[300px] md:h-[400px] relative z-20 rounded-xl box-shadow group"
          key={screenshot.id}
          target="_blank"
          referrerPolicy="no-referrer"
          data-aos="fade-up"
          data-aos-delay={`${200 * (index / 4)}`}
        >
          <Image
            src={screenshot.image}
            alt={screenshot.url}
            fill
            className="object-cover object-top md:group-hover:scale-125 transition-a rounded-xl border-4 border-brand"
          />
        </a>
      ))}
    </div>
  );
};

export default Screenshots;
