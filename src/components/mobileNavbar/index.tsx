"use client";
import Image from "next/image";
import profile from "@/assets/images/jeevan.jpg";
import { TabLinks } from "../tabLinks";
import { BurgerICon } from "@/assets/icons";

export function MobileNavbar() {
  return (
    <div className="flex justify-between items-center p-4 sidebar">
      <div className="">
        <Image
          className="rounded-full border-8 border-[#ffffff33]"
          src={profile}
          alt="profile"
          width={80}
          height={80}
        />
      </div>
      <div className="flex justify-between items-center">
        <TabLinks tabName="Home" pathName="/" />
        <TabLinks tabName="experience" pathName="/experience" />
        <TabLinks tabName="education" pathName="/education" />
        <TabLinks tabName="Skills" pathName="/skills" />
        <TabLinks tabName="awards" pathName="/awards" />
        <TabLinks tabName="Contact" pathName="/contact" />
      </div>
    </div>
  );
}
