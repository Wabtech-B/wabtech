import Checkbox from "./Checkbox";

const App = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    console.log(e.target.value);
  };
  return (
    <>
      <Checkbox
        label="Default Checkbox"
        value="Default"
        onChange={handleChange}
      />
    </>
  );
};

export default App;
