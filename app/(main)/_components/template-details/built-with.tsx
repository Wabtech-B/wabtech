import Pill from "@/components/pill";

const BuiltWith = ({ languages }: { languages: string[] }) => {
  return (
    <>
      <Pill text="Built With" />
      <div className="flex-center-center flex-wrap gap-3">
        {languages?.map((language, index) => (
          <div
            className="rounded-xl box-shadow border text-center p-2 bg-white dark:bg-gradient-to-tr from-gray-950 to-gray-800 cursor-default hover:border-l-brand hover:border-b-brand hover:scale-105 transition-a"
            key={language}
            data-aos="fade-up"
            data-aos-delay={`${200 * (index / 4)}`}
          >
            <span className="capitalize">{language}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default BuiltWith;
