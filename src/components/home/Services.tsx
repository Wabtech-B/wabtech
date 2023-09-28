import React from "react";
import GradientIcon from "../wabtech/gradient-icons/GradientIcon";
import { FaPaintBrush } from "react-icons/fa";
import { GiGraduateCap, GiHook } from "react-icons/gi";
import {} from "react-icons/ci";

const Services = () => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-3">
      <div className="text-center">
        <h1 className="text-3xl font-bold capitalize">What we have to offer</h1>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white/40 dark:bg-zinc-800/40 shadow-lg backdrop-blur-sm text-center p-4 rounded-lg">
          <div className="flex-center-center">
            <GradientIcon
              icon={FaPaintBrush}
              gradientId="gradient"
              gradientColors={["#f9c51b", "#01680f"]}
              className="text-5xl"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-semibold">🌟 Reusable componets</h1>
            <p>
              Create with confidence using our meticulously designed
              React.js/Next.js components. Streamline development, enhance user
              experiences, and boost efficiency.
            </p>
          </div>
        </div>
        <div className="bg-white/40 dark:bg-zinc-800/40 shadow-lg backdrop-blur-sm text-center p-4 rounded-lg">
          <div className="flex-center-center">
            <GradientIcon
              icon={GiHook}
              gradientId="gradient2"
              gradientColors={["red", "yellow"]}
              className="text-5xl"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-semibold">⚙️ React Custom Hooks</h1>
            <p>
              Simplify complexity with our library of reusable React Custom
              hooks. Effortlessly integrate advanced functionalities while
              ensuring optimal performance.
            </p>
          </div>
        </div>
        <div className="bg-white/40 dark:bg-zinc-800/40 shadow-lg backdrop-blur-sm text-center p-4 rounded-lg">
          <div className="flex-center-center">
            <GradientIcon
              icon={GiGraduateCap}
              gradientId="gradient3"
              gradientColors={["blue", "cyan"]}
              className="text-5xl"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-semibold">💡 Educative Blogs</h1>
            <p>
              Stay ahead of the curve with our insightful blogs. Explore the
              latest front-end trends, UI/UX best practices, and in-depth
              tutorials, all designed to fuel your growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
