import { availableRoutes } from "../../constants";
import { SidebarItemsType } from "../../types/navigation";

import { Heart } from "react-feather";

const pagesSection = () => {
  const pages: SidebarItemsType[] = [
    {
      href: availableRoutes.PUBLIC.PATH,
      icon: Heart,
      title: "Dashboard",
    },
  ];

  return pages;
};

const navItems = () => [
  {
    title: "Pages",
    pages: pagesSection(),
  },
];

export default navItems;
