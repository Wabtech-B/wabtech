import CustomButton from "@/components/custom-button";
import NoResults from "@/components/no-results";
import Pill from "@/components/pill";
import TemplateCard from "../template-card";

const Latest = ({ templates }: { templates: Template[] }) => {
  return (
    <section className="pt-36 pb-16 relative">
      <div className="w-[200px] h-[200px] absolute top-64 left-1/2 -translate-x-1/2 bg-brand/60 rounded-full [filter:blur(150px)]"></div>
      <div className="max-w-7xl mx-auto px-3 relative z-10">
        <div className="text-center">
          <Pill text="Latest" />
          <h1
            className="-mt-8 text-3xl font-bold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Latest Templates
          </h1>
          <p className="mt-2" data-aos="fade-up" data-aos-delay="150">
            Explore some of our latest templates
          </p>
        </div>
        {templates.length < 1 && <NoResults title="Templates" />}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-10">
          {templates.map((template, i) => (
            <TemplateCard
              key={template.id}
              slug={template.slug}
              name={template.name}
              image={template.coverImage}
              price={template.price}
              category={template.category.name}
              techStacks={template?.techstacks?.map((techstack) => ({
                name: techstack.name,
                image: techstack.image!,
              }))}
              index={i}
            />
          ))}
        </div>
        <div className="flex-center-center mt-6">
          <CustomButton text="See All" link="/templates" />
        </div>
      </div>
    </section>
  );
};

export default Latest;
