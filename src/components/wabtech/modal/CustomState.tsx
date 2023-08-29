"use client";

import { useState } from "react";
import Modal from "./Modal";

const CustomState = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-3"
        onClick={() => setIsModalOpen(true)}
      >
        Open
      </button>
      <Modal
        title="Modal Title"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <h2 className="text-2xl">Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </>
  );
};

export default CustomState;
