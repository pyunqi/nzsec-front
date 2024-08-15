import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Links",
    path: "/links",
    newTab: false,
  },
  {
    id: 3,
    title: "Chinese Services",
    path: "https://nzsec.net/",
    newTab: true,
  },
  {
    id: 4,
    title: "Support",
    path: "/support",
    newTab: false,
  },
  {
    id: 5,
    title: "About",
    path: "/about",
    newTab: false,
  },
];
export default menuData;
