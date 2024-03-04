import React from "react";
import TemplateCard from "../template-card";
import NoResults from "@/components/no-results";

const TemplateList = ({ templates }: { templates: Template[] }) => {
  return (
    <section className="mt-4" id="templates">
      {templates.length < 1 && <NoResults title="Templates" />}
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 z-10">
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
    </section>
  );
};

export default TemplateList;
