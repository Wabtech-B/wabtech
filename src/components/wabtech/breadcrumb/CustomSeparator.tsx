import { FiArrowRight } from "react-icons/fi";
import Breadcrumb from "./Breadcrumb";

const CustomSeparator = () => {
  const items = [{ label: "Home" }, { label: "Users" }, { label: "Comments" }];

  return (
    <>
      <div>
        <Breadcrumb items={items} separator={<FiArrowRight />} />
      </div>
      <div className="mt-5">
        <Breadcrumb items={items} separator="|" />
      </div>
    </>
  );
};

export default CustomSeparator;
