import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  // {
  //   id: 2,
  //   title: "Links",
  //   path: "/links",
  //   newTab: false,
  // },
  {
    id: 3,
    title: "NZSEC News",
    path: "/news",
    newTab: true,
  },
  {
    id: 4,
    title: "Business Introduction",
    path: "/about",
    newTab: true,
  },
  {
    id: 5,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/about",
    newTab: false,
  },
];
export default menuData;
