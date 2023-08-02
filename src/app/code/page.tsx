"use client";

// import SyntaxHighlighter from "react-syntax-highlighter";
// import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  duotoneDark,
  a11yDark,
  coldarkDark,
  dracula,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
const CodeHighlighter = () => {
  const codeString = `import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  const handleOverlayClick = () => {
    onClose();
  };

  const handleCloseButtonClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
        >
          <motion.div
            ref={modalRef}
            className="bg-zinc-800 rounded-lg w-96 max-w-full mx-auto p-6 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
         {/* This is the code snippet that is being highlighted */}
            {children}
            <button
              className="absolute top-2 right-2 text-slate-200 p-2 rounded-full hover:bg-zinc-600"
              onClick={handleCloseButtonClick}
            >
              <FiX />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
    `;

  return (
    <div className="max-w-7xl mx-auto my-10 px-6">
      <div className="my-4 flex items-center">
        <Image src="/logo.png" alt="" width={40} height={40} priority />
        <h1 className="text-2xl font-bold">Wabtech</h1>
      </div>
      <div className="gradient-bg" />
      <SyntaxHighlighter
        language="jsx"
        style={vscDarkPlus}
        showLineNumbers={true}
        wrapLines={true}
        //   customStyle={{ backgroundColor: "red !important" }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeHighlighter;
