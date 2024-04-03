"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const Main = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      router.push("/generation");
    }
  }, [pathname]);

  return null;
};

export default Main;
