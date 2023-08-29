import Alert from "./Alert";

const Title = () => {
  return (
    <>
      <Alert title="Default Alert">This is a default alert with title</Alert>
      <Alert variant="success" title="Success Alert">
        This is a success alert with title
      </Alert>
      <Alert variant="warning" title="Warning Alert">
        This is a warning alert with title
      </Alert>
      <Alert variant="error" title="Error Alert">
        This is a error alert with title
      </Alert>
    </>
  );
};

export default Title;
