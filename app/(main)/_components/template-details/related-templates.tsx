import Scrollable from "@/components/scrollable";
import React from "react";
import TemplateCard from "../template-card";

const RelatedTemplates = ({ templates }: { templates: Template[] }) => {
  return (
    <Scrollable>
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
          width="w-[320px] md:w-[380px]"
          index={i}
        />
      ))}
    </Scrollable>
  );
};

export default RelatedTemplates;
