
import { LucideIcon } from "lucide-react";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "../lib/utils";

interface NavbarItemProps {
  label: string;
  icon: LucideIcon;
  href: string;
  isFirst: boolean;
}

const NavbarItems = ({ label, icon: Icon, href, isFirst }: NavbarItemProps) => {

  const pathName = usePathname();
  const isActive = pathName === href
 
 




  return (
    <>
      <div
        className={cn(
          " rounded-md group mx-3 p-4",
          isActive ? "text-amber-400 " : "hover:text-white",
          !isFirst && "px-2" 
        )}
      >
       
        <Link
          href={href}
          className={cn("group text-white font-semibold text-md transition duration-300  ", )}
        >
          <div className="flex items-center ">
            {/* <Icon className="mx-1" size={12} /> */}
            <span className={cn("hover:text-white" , isActive&&"text-[#ffcd67]" )}>{label}</span>
          
          </div>
         
         
        </Link>
      </div>
    </>
  );
};

export default NavbarItems;