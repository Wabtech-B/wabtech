import Scrollable from "./Scrollable";
const categories = [
  "Music",
  "Sports",
  "Gaming",
  "Movies",
  "Computer Science",
  "News",
  "Fashion",
  "Travel",
  "Food",
  "Technology",
  "Computer programming",
  "Block Chain",
  "Politics",
  "Science",
  "Commedy",
  "React js",
  "Artificial Intelligence",
  "Crypto Currency",
];
const App = () => {
  return (
    <>
      <Scrollable>
        {categories.map((category, index) => (
          <div
            className="bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 cursor-pointer w-[300px] h-[300px] flex justify-center items-center rounded-xl dark:hover:bg-zinc-700 flex-shrink-0"
            key={index}
          >
            {category}
          </div>
        ))}
      </Scrollable>
    </>
  );
};

export default App;
