import Badge from "./Badge";

const Variants = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Badge label="Default" />
      <Badge label="Primary" variant="primary" />
      <Badge label="Sucess" variant="success" />
      <Badge label="Danger" variant="danger" />
      <Badge label="Warning" variant="warning" />
    </div>
  );
};

export default Variants;
