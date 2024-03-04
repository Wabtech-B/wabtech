import TechstackCard from "./techstack-card";

const Techstack = ({ techstacks }: { techstacks: Techstack[] }) => {
  return (
    <div className="mt-8 flex-center-center gap-3 flex-wrap">
      {techstacks?.map((techstack, i) => (
        <TechstackCard
          key={techstack.name}
          image={techstack.image!}
          title={techstack.name}
          url={techstack.websiteUrl}
          description={techstack.description!}
          index={i}
        />
      ))}
    </div>
  );
};

export default Techstack;
