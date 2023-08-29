import { FiHome, FiMessageSquare, FiUser } from "react-icons/fi";
import Breadcrumb from "./Breadcrumb";

const WithIcons = () => {
  const items = [
    { label: "Home", icon: <FiHome />, to: "/" },
    { label: "Users", icon: <FiUser />, to: "/users" },
    { label: "Comments", icon: <FiMessageSquare />, to: "/comments" },
  ];

  return (
    <>
      <Breadcrumb items={items} />
    </>
  );
};

export default WithIcons;
