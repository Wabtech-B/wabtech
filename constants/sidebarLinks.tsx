import { BsGrid } from "react-icons/bs";
import { BiMoneyWithdraw, BiUserCircle } from "react-icons/bi";
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
    linkText: "My Purhases",
    icon: <BiMoneyWithdraw />,
    url: "/dashboard/purchases",
  },
  {
    linkText: "Profile",
    icon: <BiUserCircle />,
    url: "/dashboard/account",
  },
];
