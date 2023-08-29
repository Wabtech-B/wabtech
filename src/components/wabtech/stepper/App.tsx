import Stepper from "./Stepper";

const steps = [
  {
    label: "Step 1",
    content: (
      <div>
        Step 1 Content
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
          pariatur rerum facere voluptatem accusantium dolores consequuntur
          minus quam vel voluptatibus?
        </p>
      </div>
    ),
    description: "Step 1 Description",
  },
  {
    label: "Step 2",
    content: <div>Step 2 Content</div>,
    description: "Step 2 Description",
  },
  {
    label: "Step 3",
    content: <div>Step 3 Content</div>,
    description: "Step 3 Description",
  },
];

const App = () => {
  return (
    <div className="border mt-2 border-zinc-300 dark:border-zinc-700 rounded-lg shadow-md p-6">
      <Stepper steps={steps} />
    </div>
  );
};

export default App;
