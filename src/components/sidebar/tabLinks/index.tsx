"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabLinksI {
  tabName: string;
  pathName: string;
}

export function TabLinks({ tabName, pathName }: TabLinksI) {
  const path = usePathname();
  return (
    <Link
      className={`sidebarText py-3 uppercase cursor-pointer ${
        path === pathName ? "text-white" : "text-[#ffffff80]"
      }`}
      href={pathName}
    >
      {tabName}
    </Link>
  );
}
