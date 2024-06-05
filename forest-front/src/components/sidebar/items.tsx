import { Icon } from "@iconify/react";

import { SidebarItemType, type SidebarItem } from "./sidebar";

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
    key: "standTables",
    // href: "/standTables",
    icon: "formkit:group",
    title: "Stand Tables",
    type: SidebarItemType.Nest,
    items: [
      {
        key: "stVolume",
        href: "/standTables/Volume",
        icon: "formkit:group",
        title: "ST Volume",    
      },
      {
        key: "stNumber",
        href: "/standTables/Number",
        icon: "formkit:group",
        title: "ST Number",    
      },
      {
        key: "stProduction0",
        href: "/standTables/Production0",
        icon: "formkit:group",
        title: "ST Production0",    
      },
      {
        key: "stDamage",
        href: "/standTables/Damage",
        icon: "formkit:group",
        title: "ST Damage",    
      },
      {
        key: "stGrowth30",
        href: "/standTables/Growth30",
        icon: "formkit:group",
        title: "ST Growth30",    
      },
      {
        key: "stProduction30",
        href: "/standTables/Production30",
        icon: "formkit:group",
        title: "ST Production30",    
      },
    ]
  },
  // {
  //   key: "standTableSpecies",
  //   href: "/standTableSpecies",
  //   icon: "ooui:logo-wikispecies",
  //   title: "Stand Table - Species",
  // },
  // {
  //   key: "prodTable",
  //   href: "/prodTable",
  //   icon: "fluent:production-20-filled",
  //   title: "Production Table",
  // },
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
