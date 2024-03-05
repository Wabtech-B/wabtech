import { Check } from "lucide-react";
import React from "react";

interface FeaturesProps {
  features: string[];
}

const Features = ({ features }: FeaturesProps) => {
  return (
    <div className="flex-center-center">
      <div>
        {features.map((feature, index) => (
          <div
            className="flex gap-x-2 my-3"
            key={feature}
            data-aos="fade-up"
            data-aos-delay={`${200 * (index / 4)}`}
          >
            <div className="w-6 h-6 rounded-full flex-center-center bg-gradient-to-tr from-[#0bab7c] to-[#032a1e] text-white shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <h1 className="capitalize">{feature}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
