import Toggle from "./Toggle";

// Add "isActive" for typescript autocompletion
const items = [
  { id: 1, label: "Option 1", isActive: false },
  { id: 2, label: "Option 2", isActive: false },
  { id: 3, label: "Option 3", isActive: false },
];

const App = () => {
  return (
    <>
      <Toggle list={items} initialValue={items[0]}>
        {(items, toggleActive, selectedItem) => (
          <div>
            <ul className="flex items-center gap-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleActive(item)}
                  className={`w-20 h-20 flex items-center flex-wrap justify-center drop-shadow-md bg-white dark:bg-zinc-700 rounded-lg cursor-pointer ${
                    item.isActive ? "!bg-[#0bab7c] text-white" : ""
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </ul>
            {selectedItem && (
              <p className="mt-3">Selected item: {selectedItem.label}</p>
            )}
          </div>
        )}
      </Toggle>
    </>
  );
};

export default App;
