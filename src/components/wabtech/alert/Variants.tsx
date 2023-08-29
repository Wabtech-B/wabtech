import Alert from "./Alert";

const Variants = () => {
  return (
    <>
      <Alert>This is a default alert</Alert>
      <Alert variant="success">This is a success alert</Alert>
      <Alert variant="warning">This is a warning alert</Alert>
      <Alert variant="error">This is a error alert</Alert>
    </>
  );
};

export default Variants;
