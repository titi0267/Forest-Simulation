import { Icon } from "@iconify/react";

import { type SidebarItem } from "./sidebar";

export const items: SidebarItem[] = [
  {
    key: "generation",
    href: "/generation",
    icon: "pepicons-pencil:tree",
    title: "Generation",
  },
  {
    key: "damages",
    href: "/damages",
    icon: "pepicons-pencil:tree-off",
    title: "Damages",
  },
  {
    key: "volume",
    href: "/volume",
    icon: "mage:box-3d-upload",
    title: "Volume",
  },
];
