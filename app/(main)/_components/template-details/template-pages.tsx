import { Check } from "lucide-react";
import React from "react";

const TemplatePages = ({ pages }: { pages: string[] }) => {
  return (
    <div className="flex flex-col gap-y-3">
      {pages?.map((page) => (
        <div className="flex-align-center" key={page}>
          <div className="w-5 h-5 mr-2 flex-center-center rounded bg-brand/20 text-brand">
            <Check className="w-4 h-4" />
          </div>
          <span className="capitalize">{page}</span>
        </div>
      ))}
    </div>
  );
};

export default TemplatePages;
