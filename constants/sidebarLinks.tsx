import { BiUserCircle } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";
import { HiOutlineTemplate } from "react-icons/hi";

export const sidebarLinks = [
  {
    linkText: "Overview",
    icon: <BsGrid />,
    url: "/dashboard",
  },
  {
    linkText: "My Templates",
    icon: <HiOutlineTemplate />,
    url: "/dashboard/templates",
  },
  {
    linkText: "Profile",
    icon: <BiUserCircle />,
    url: "/dashboard/account",
  },
];
