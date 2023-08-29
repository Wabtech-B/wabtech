"use client";

import { FiCheck } from "react-icons/fi";
import { IoClipboardOutline } from "react-icons/io5";
import Tooltip from "../wabtech/tooltip/Tooltip";
import useClipboard from "../wabtech/hooks/useClipboard/useClipboard";

const CopyIcon = ({ text }: { text: string }) => {
  const { copied, copyToClipboard } = useClipboard();
  return (
    <>
      <Tooltip text={copied ? "Copied!" : "Copy"} position="left">
        <div
          className="w-8 h-8 bg-zinc-700 hover:bg-zinc-700/80 border border-zinc-600 text-white grid place-items-center mr-4 rounded-md cursor-pointer"
          onClick={() => copyToClipboard(text)}
        >
          {copied ? (
            <FiCheck className="text-green-500" />
          ) : (
            <IoClipboardOutline />
          )}
        </div>
      </Tooltip>
    </>
  );
};

export default CopyIcon;
