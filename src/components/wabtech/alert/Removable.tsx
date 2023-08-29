import Alert from "./Alert";

const Removable = () => {
  return (
    <>
      <Alert removable>This is a removable default alert</Alert>
      <Alert variant="success" title="Success Alert" removable>
        This is a removable success alert with title
      </Alert>
      <Alert variant="warning" removable>
        This is a removable warning alert
      </Alert>
    </>
  );
};

export default Removable;
