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
    key: "standTableGroup",
    href: "/standTableGroup",
    icon: "formkit:group",
    title: "Stand Table - Group",
  },
  {
    key: "standTableSpecies",
    href: "/standTableSpecies",
    icon: "ooui:logo-wikispecies",
    title: "Stand Table - Species",
  },
  {
    key: "prodTable",
    href: "/prodTable",
    icon: "fluent:production-20-filled",
    title: "Production Table",
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
