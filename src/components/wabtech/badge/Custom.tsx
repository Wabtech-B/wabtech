import Badge from "./Badge";

const Custom = () => {
  return (
    <>
      <Badge label="Custom color" className="!bg-cyan-500 text-white" />
      <Badge label="Custom color" className="!bg-teal-500 text-white mt-2" />
    </>
  );
};

export default Custom;
