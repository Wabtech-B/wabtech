import Tooltip from "./Tooltip";

const Position = () => {
  return (
    <div className="flex items-center gap-x-4 flex-wrap">
      <Tooltip text="Tooltip Text!">
        <button className="px-4 py-2 bg-[#0bab7c] text-white rounded-md">
          Top
        </button>
      </Tooltip>
      <Tooltip text="Tooltip Text!" position="bottom">
        <button className="px-4 py-2 bg-[#0bab7c] text-white rounded-md">
          Bottom
        </button>
      </Tooltip>
      <Tooltip text="Tooltip Text!" position="left">
        <button className="px-4 py-2 bg-[#0bab7c] text-white rounded-md">
          Left
        </button>
      </Tooltip>
      <Tooltip text="Tooltip Text!" position="right">
        <button className="px-4 py-2 bg-[#0bab7c] text-white rounded-md">
          Right
        </button>
      </Tooltip>
    </div>
  );
};

export default Position;
