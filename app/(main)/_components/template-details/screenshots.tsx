import Image from "next/image";

const Screenshots = ({ screenshots }: { screenshots: Screenshot[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {screenshots?.map((screenshot, index) => (
        <a
          href={screenshot.url}
          className="w-full shrink-0 h-[200px] md:h-[300px] relative overflow-hidden rounded-xl box-shadow group"
          key={screenshot.id}
          target="_blank"
          referrerPolicy="no-referrer"
          data-aos="fade-up"
          data-aos-delay={`${200 * (index / 4)}`}
        >
          <Image
            src={`/images/temp (1).jpg`}
            alt={screenshot.url}
            fill
            className="object-cover group-hover:scale-105 transition-a"
          />
        </a>
      ))}
      <a
        href={`#`}
        className="w-full shrink-0 h-[200px] md:h-[300px] relative overflow-hidden rounded-xl box-shadow group"
        target="_blank"
        referrerPolicy="no-referrer"
        data-aos="fade-up"
        data-aos-delay={"250"}
      >
        <Image
          src={`/images/temp (2).jpg`}
          alt="Alt text"
          fill
          className="object-cover group-hover:scale-105 transition-a"
        />
      </a>
    </div>
  );
};

export default Screenshots;
