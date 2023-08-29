import {
  FiBell,
  FiBriefcase,
  FiLayers,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import GradientIcon from "./GradientIcon";

const Stroke = () => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <GradientIcon
          icon={FiBell}
          gradientId="gradient"
          gradientColors={["#f9c51b", "#01680f"]}
          className="text-3xl"
          stroke
        />
        <GradientIcon
          icon={FiUser}
          gradientId="gradient2"
          gradientColors={["red", "yellow"]}
          className="text-3xl"
          stroke
        />
        <GradientIcon
          icon={FiLayers}
          gradientId="gradient3"
          gradientColors={["cyan", "blue"]}
          className="text-3xl mt-2"
          stroke
        />
        <GradientIcon
          icon={FiSettings}
          gradientId="gradient4"
          gradientColors={["blue", "yellow"]}
          className="text-3xl"
          stroke
        />
        <GradientIcon
          icon={FiBriefcase}
          gradientId="gradient5"
          gradientColors={["red", "orange"]}
          className="text-3xl"
          stroke
        />
      </div>
    </>
  );
};

export default Stroke;
