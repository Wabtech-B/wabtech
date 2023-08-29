import Button from "./Button";

const Custom = () => {
  return (
    <>
      <Button className="bg-yellow-500 hover:bg-yellow-500/80">
        <div className="flex items-center gap-x-2">
          <span>🚀</span>
          <h1 className="text-2xl font-bold">Custom Content</h1>
        </div>
      </Button>
    </>
  );
};

export default Custom;
