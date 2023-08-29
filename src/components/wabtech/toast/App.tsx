import Toast from "./Toast";

const App = () => {
  return (
    <>
      <Toast
        message="Success toast message!"
        variant="success"
        trigger={
          <button className="px-5 py-2 text-white bg-[#0bab7c] rounded-md hover:bg-[#0bab7c]/80 mt-3">
            Success Toast
          </button>
        }
      />
    </>
  );
};

export default App;
