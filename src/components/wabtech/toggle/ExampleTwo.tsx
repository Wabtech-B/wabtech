import { FiLayers, FiUser } from "react-icons/fi";
import Toggle from "./Toggle";
import { GiBriefcase } from "react-icons/gi";
import { BsCheck2 } from "react-icons/bs";

// Add "isActive" for typescript autocompletion
const items = [
  {
    id: 1,
    title: "Option 1",
    icon: <FiUser className="text-3xl mx-auto" />,
    isActive: false,
  },
  {
    id: 2,
    title: "Option 2",
    icon: <GiBriefcase className="text-3xl mx-auto" />,
    isActive: false,
  },
  {
    id: 3,
    title: "Option 3",
    icon: <FiLayers className="text-3xl mx-auto" />,
    isActive: false,
  },
];

const ExampleTwo = () => {
  return (
    <>
      <Toggle list={items} initialValue={items[0]}>
        {(items, toggleActive, selectedItem) => (
          <div>
            <div className="flex items-center gap-5 mt-5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`w-28 h-28 sm:w-36 sm:h-36 text-slate-500 dark:text-slate-200 rounded-lg grid place-items-center text-center border-2 border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 cursor-pointer relative overflow-hidden shadow ${
                    item.isActive && " !border-[#0bab7c] shadow-[#0bab7c]/30"
                  }`}
                  onClick={() => toggleActive(item)}
                >
                  <div>
                    {item.icon}
                    <p className="mt-3">{item.title}</p>
                  </div>
                  {item.isActive && (
                    <div className="w-7 h-7 absolute -top-1 -right-1 rounded grid place-items-center bg-[#0bab7c]">
                      <BsCheck2 className="text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            {selectedItem && (
              <p className="mt-3">Selected item: {selectedItem.title}</p>
            )}
          </div>
        )}
      </Toggle>
    </>
  );
};

export default ExampleTwo;
