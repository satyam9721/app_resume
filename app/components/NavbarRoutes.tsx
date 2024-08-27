import React from "react";

import {
  LayoutDashboard,
  BadgeIndianRupee,
  HandCoins,
  ReceiptText,
  CircleUserRound,
  Hotel,
  Settings,
  Bot
} from "lucide-react";


import NavbarItems from "./NavbarItems";



const NavbarRoutes = () => {
  const FinanceRoutes = [
    {
      href: "/",
      name: "About",
      icon: LayoutDashboard,
    },
    {
      href: "/projects",
      name: "Projects",
      icon: BadgeIndianRupee,
    },
   
    {
      href: "/experience",
      name: "Experience",
      icon: Hotel,
    },
    {
      href: "/certificates",
      name: "Certificate",
      icon: ReceiptText,
    },
    {
      href: "/contact",
      name: "Contact",
      icon: Settings,
    },
  
  ];

  return (
    <div className="flex flex-col md:flex-row item-center  ">
      {FinanceRoutes.map((route,index) => (
        <NavbarItems
          key={route.href}
          label={route.name}
          href={route.href}
          icon={route.icon}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
};

export default NavbarRoutes;