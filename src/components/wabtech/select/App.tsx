import Select from "./Select";

const options = [
  {
    value: "React.js",
    label: "React.js",
  },
  {
    value: "Next.js",
    label: "Next.js",
  },
  {
    value: "Vue",
    label: "Vue",
  },
  {
    value: "Nuxt",
    label: "Nuxt",
  },
  {
    value: "Sveltkit",
    label: "Sveltkit",
  },
  {
    value: "Solid.js",
    label: "Solid.js",
  },
  {
    value: "Angular",
    label: "Angular",
  },
];

const App = () => {
  const handleSelect = (selectedValue: string) => {
    console.log("Selected:", selectedValue);
  };

  return (
    <>
      <Select options={options} onSelect={handleSelect} />
    </>
  );
};

export default App;
