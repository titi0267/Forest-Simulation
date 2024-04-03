"use client";

import React from "react";
import { Button, ScrollShadow, Spacer, Tooltip } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "usehooks-ts";

import { items } from "./items";
import { cn } from "./cn";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";

const SidebarLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname();
  const currentPath = pathname.split("/")?.[1];

  const isCompact = isCollapsed || isMobile;

  const onToggle = React.useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const title = items.find((item) => item.key == currentPath)?.title;

  return (
    <div className="flex h-dvh w-full">
      <div
        className={cn(
          "relative flex h-full w-72 flex-col !border-r-small border-divider p-6 transition-width",
          {
            "w-16 items-center px-2 py-6": isCompact,
          }
        )}
      >
        <div
          className={cn(
            "flex items-center gap-3 px-3",

            {
              "justify-center gap-0": isCompact,
            }
          )}
        >
          <span
            className={cn("text-small font-bold uppercase opacity-100", {
              "w-0 opacity-0": isCompact,
            })}
          >
            Forest-Simulation
          </span>
        </div>
        <Spacer y={8} />
        <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
          <Sidebar
            defaultSelectedKey="generation"
            selectedKeys={[currentPath]}
            isCompact={isCompact}
            items={items}
          />
        </ScrollShadow>
        <Spacer y={2} />
      </div>
      <div className="flex h-full w-full flex-col p-4">
        <header className="flex items-center gap-3 rounded-medium border-small border-divider p-4">
          <Button isIconOnly size="sm" variant="light" onPress={onToggle}>
            <Icon
              className="text-default-500"
              height={24}
              icon="solar:sidebar-minimalistic-outline"
              width={24}
            />
          </Button>
          <h2 className="text-medium font-medium text-default-700">{title}</h2>
        </header>
        <main className="w-full h-full mt-4 overflow-visible">
          <div className="flex h-full w-full flex-col gap-4 rounded-medium border-small border-divider">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;
