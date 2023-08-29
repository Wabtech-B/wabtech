import Drawer from "./Drawer";

const App = () => {
  return (
    <>
      <Drawer
        openTrigger={
          <button className="px-6 py-2 text-white bg-[#0bab7c] hover:bg-[#0bab7c]/80 rounded-md">
            Default Drawer
          </button>
        }
      >
        <h2 className="text-2xl font-semibold mb-2">Default Drawer</h2>
        <p>This is the content of the drawer.</p>
      </Drawer>
    </>
  );
};

export default App;
