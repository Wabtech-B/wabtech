import Button from "./Button";

const Variants = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Button>Default</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="gradient">Gradient</Button>
    </div>
  );
};

export default Variants;
