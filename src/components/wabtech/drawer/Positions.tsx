import Drawer from "./Drawer";

const Positions = () => {
  return (
    <>
      <div className="flex items-center gap-3 flex-wrap">
        <Drawer
          position="left"
          openTrigger={
            <button className="px-6 py-2 bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 rounded-md">
              Left
            </button>
          }
        >
          <h2>Left Drawer</h2>
          <p>This is the content of the drawer.</p>
        </Drawer>
        <Drawer
          position="right"
          openTrigger={
            <button className="px-6 py-2 bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 rounded-md">
              Right Drawer
            </button>
          }
        >
          <h2>Right Drawer</h2>
          <p>This is the content of the drawer.</p>
        </Drawer>
        <Drawer
          position="top"
          openTrigger={
            <button className="px-6 py-2 bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 rounded-md">
              Top Drawer
            </button>
          }
        >
          <h2>Top Drawer</h2>
          <p>This is the content of the drawer.</p>
        </Drawer>
        <Drawer
          position="bottom"
          openTrigger={
            <button className="px-6 py-2 bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 rounded-md">
              Bottom
            </button>
          }
        >
          <h2>Bottom Drawer</h2>
          <p>This is the content of the drawer.</p>
        </Drawer>
      </div>
    </>
  );
};

export default Positions;
