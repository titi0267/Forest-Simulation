import { Icon } from "@iconify/react";

import { type SidebarItem } from "./sidebar";

export const items: SidebarItem[] = [
  {
    key: "generation",
    href: "/generation",
    icon: "ic:baseline-create",
    title: "Create your forest",
  },
  {
    key: "trees",
    href: "/trees",
    icon: "pepicons-pencil:tree",
    title: "List of Trees",
  },
  {
    key: "infoTrees",
    href: "/infoTrees",
    icon: "material-symbols:info-outline",
    title: "Tree's Informations",
  },
  {
    key: "block",
    href: "/block",
    icon: "material-symbols:forest-outline",
    title: "Forest visualization",
  },
  {
    key: "standTable",
    href: "/standTable",
    icon: "f7:question",
    title: "Stand table",
  },
  {
    key: "volume",
    href: "/volume",
    icon: "mage:box-3d-upload",
    title: "Volume calculations",
  },
  {
    key: "aboutUs",
    href: "/aboutUs",
    icon: "mdi:about",
    title: "About Us",
  },
];
