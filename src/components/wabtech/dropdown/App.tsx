import { FiChevronDown, FiHome, FiSettings, FiUser } from "react-icons/fi";
import Dropdown from "./Dropdown";

const App = () => {
  const dropdownOptions = [
    { label: "Home", icon: <FiHome />, link: "/" },
    { label: "Profile", icon: <FiUser />, link: "/profile" },
    { label: "Settings", icon: <FiSettings />, link: "/settings" },
  ];

  return (
    <>
      <Dropdown
        options={dropdownOptions}
        trigger={
          <button className="px-4 py-2 text-white bg-[#0bab7c] rounded-md hover:bg-[#0bab7c]/80 flex items-center gap-x-2">
            Menu
            <FiChevronDown />
          </button>
        }
      />
    </>
  );
};

export default App;
