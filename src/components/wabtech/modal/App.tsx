import Modal from "./Modal";

const App = () => {
  return (
    <>
      <Modal
        title="Modal Title"
        openTrigger={
          <button className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-3">
            Open Modal
          </button>
        }
      >
        <h2 className="text-2xl">Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </>
  );
};

export default App;
