import Breadcrumb from "./Breadcrumb";

const App = () => {
  const items = [{ label: "Home" }, { label: "Users" }, { label: "Comments" }];

  return (
    <>
      <Breadcrumb items={items} />
    </>
  );
};

export default App;
