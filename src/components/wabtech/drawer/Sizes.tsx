import Drawer from "./Drawer";

const Sizes = () => {
  return (
    <>
      <div className="flex items-center gap-3 flex-wrap">
        <Drawer
          size="small"
          openTrigger={
            <button className="px-6 py-2 bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 rounded-md">
              Small
            </button>
          }
        >
          <h2>Small Drawer</h2>
          <p>This is the content of the drawer.</p>
        </Drawer>
        <Drawer
          size="medium"
          openTrigger={
            <button className="px-6 py-2 bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 rounded-md">
              Medium Drawer
            </button>
          }
        >
          <h2>Medium Drawer</h2>
          <p>This is the content of the drawer.</p>
        </Drawer>
        <Drawer
          size="large"
          openTrigger={
            <button className="px-6 py-2 bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 rounded-md">
              Large
            </button>
          }
        >
          <h2>Large Drawer</h2>
          <p>This is the content of the drawer.</p>
        </Drawer>
      </div>
    </>
  );
};

export default Sizes;
