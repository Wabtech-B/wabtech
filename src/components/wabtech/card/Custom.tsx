import Card from "./Card";

const Custom = () => {
  return (
    <>
      <Card className="!border-red-500">
        <h3 className="text-lg font-medium">Custom Card</h3>
        <p>This card has a custom border color.</p>
      </Card>
    </>
  );
};

export default Custom;
