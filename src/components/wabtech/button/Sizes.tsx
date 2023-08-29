import Button from "./Button";

const Sizes = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Button size="small">Small</Button>
      <Button>Medium</Button>
      <Button size="large">Large</Button>
    </div>
  );
};

export default Sizes;
