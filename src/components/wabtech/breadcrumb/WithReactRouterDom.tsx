import { FiChevronRight } from "react-icons/fi";
import RouterBreadcrumb from "./RouterBreadcrumb";

const WithReactRouterDom = () => {
  return (
    <>
      <RouterBreadcrumb separator={<FiChevronRight />} />
    </>
  );
};

export default WithReactRouterDom;
