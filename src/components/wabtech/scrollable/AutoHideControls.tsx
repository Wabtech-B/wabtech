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
const AutoHideControls = () => {
  return (
    <>
      <Scrollable autoHideControls>
        {categories.map((category, index) => (
          <div
            className="bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 cursor-pointer px-3 py-1 flex justify-center items-center rounded-full dark:hover:bg-zinc-700 flex-shrink-0"
            key={index}
          >
            {category}
          </div>
        ))}
      </Scrollable>
    </>
  );
};

export default AutoHideControls;
