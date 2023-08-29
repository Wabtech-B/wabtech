import Toast from "./Toast";

const Variants = () => {
  return (
    <>
      <div className="flex items-center gap-x-2 flex-wrap">
        <Toast
          message="Success toast message!"
          variant="success"
          trigger={
            <button className="px-5 py-2 text-white bg-[#0bab7c] rounded-md hover:bg-[#0bab7c]/80 mt-3">
              Success Toast
            </button>
          }
        />
        <Toast
          message="Danger toast message!"
          variant="danger"
          trigger={
            <button className="px-5 py-2 text-white bg-[#0bab7c] rounded-md hover:bg-[#0bab7c]/80 mt-3">
              Danger Toast
            </button>
          }
        />
        <Toast
          message="Info toast message!"
          variant="info"
          trigger={
            <button className="px-5 py-2 text-white bg-[#0bab7c] rounded-md hover:bg-[#0bab7c]/80 mt-3">
              Info Toast
            </button>
          }
        />
        <Toast
          message="Warning toast message!"
          variant="warning"
          trigger={
            <button className="px-5 py-2 text-white bg-[#0bab7c] rounded-md hover:bg-[#0bab7c]/80 mt-3">
              Warning Toast
            </button>
          }
        />
      </div>
    </>
  );
};

export default Variants;
