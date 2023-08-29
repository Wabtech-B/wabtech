import { FiLayers, FiLogOut, FiMenu, FiSettings } from "react-icons/fi";
import Dropdown from "./Dropdown";
import Avatar from "../avatar/Avatar";

const Custom = () => {
  return (
    <>
      <Dropdown
        general
        className="!w-[300px] p-4"
        trigger={
          <div className="w-10 h-10 bg-slate-200 dark:bg-zinc-700 hover:bg-slate-300 dark:hover:bg-zinc-800 rounded-lg grid place-items-center">
            <FiMenu />
          </div>
        }
      >
        <div>
          <div className="flex items-center gap-x-3 p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-md">
            <Avatar size="small" />
            <p>Profile settings</p>
          </div>
          <div className="flex items-center gap-x-3 p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-md">
            <Avatar size="small" />
            <p>Account</p>
          </div>
          <div className="ml-2 flex items-center gap-x-3 p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-md">
            <FiSettings />
            <p>Settings</p>
          </div>
          <div className="ml-2 flex items-center gap-x-3 p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-md">
            <FiLayers />
            <p>Themes</p>
          </div>
          <div className="border-t dark:border-t-zinc-600 mt-3">
            <div className=" ml-2 mt-2 flex items-center gap-x-3 p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-md">
              <FiLogOut />
              <p>Sign out</p>
            </div>
          </div>
        </div>
      </Dropdown>
    </>
  );
};

export default Custom;
