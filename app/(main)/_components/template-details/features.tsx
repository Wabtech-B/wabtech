import { Check } from "lucide-react";
import React from "react";

const Features = ({ features }: { features: string[] }) => {
  return (
    <div className="flex flex-col gap-y-3">
      {features?.map((feature) => (
        <div className="flex-align-center" key={feature}>
          <div className="w-5 h-5 mr-2 flex-center-center rounded bg-brand/20 text-brand">
            <Check className="w-4 h-4" />
          </div>
          <span className="capitalize">{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default Features;
