import Tooltip from "./Tooltip";

const App = () => {
  return (
    <>
      <Tooltip text="Tooltip Text!">
        <button className="px-6 py-2 bg-[#0bab7c] hover:bg-[#0bab7c]/80 text-white rounded-md">
          Default position
        </button>
      </Tooltip>
    </>
  );
};

export default App;
