import { FiUser } from "react-icons/fi";
import Button from "./Button";

const WithIcon = () => {
  return (
    <>
      <Button icon={<FiUser />} variant="gradient">
        Icon
      </Button>
    </>
  );
};

export default WithIcon;
