import { FaBell, FaFileWord, FaFolder, FaUser } from "react-icons/fa";
import GradientIcon from "./GradientIcon";

const App = () => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <GradientIcon
          icon={FaBell}
          gradientId="gradient"
          gradientColors={["#f9c51b", "#01680f"]}
          className="text-3xl"
        />
        <GradientIcon
          icon={FaBell}
          gradientId="gradient2"
          gradientColors={["red", "yellow"]}
          className="text-3xl"
        />
        <GradientIcon
          icon={FaUser}
          gradientId="gradient3"
          gradientColors={["cyan", "blue"]}
          className="text-3xl mt-2"
        />
        <GradientIcon
          icon={FaFolder}
          gradientId="gradient4"
          gradientColors={["blue", "yellow"]}
          className="text-3xl"
        />
        <GradientIcon
          icon={FaFileWord}
          gradientId="gradient5"
          gradientColors={["red", "orange"]}
          className="text-3xl"
        />
      </div>
    </>
  );
};

export default App;
