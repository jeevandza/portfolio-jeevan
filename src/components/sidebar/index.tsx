import Image from "next/image";
import profile from "@/assets/images/jeevan.jpg";
import {TabLinks} from './tabLinks'

export function Sidebar() {
  return (
    <div className="sidebar w-1/5 h-screen fixed flex flex-col items-center justify-center">
      <div className="mb-2">
        <Image
          className="rounded-full border-8 border-[#ffffff33]"
          src={profile}
          alt="profile"
          width={160}
          height={160}
        />
      </div>
      <div className="flex flex-col items-center">
        <TabLinks tabName="Home" pathName="/"/>
        <TabLinks tabName="experience" pathName="/experience"/>
        <TabLinks tabName="education" pathName="/education"/>
        <TabLinks tabName="Skills" pathName="/skills"/>
        <TabLinks tabName="awards" pathName="/awards"/>
        <TabLinks tabName="Contact" pathName="/contact"/>
      </div>
    </div>
  );
}
