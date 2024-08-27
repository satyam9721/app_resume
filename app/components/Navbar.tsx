"use client";
import React from "react";
import { Button } from "./ui/button";
import { CircleUserRound } from "lucide-react";

import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";
import NavbarRoutes from "./NavbarRoutes";

import Link from "next/link";
const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="text-white bg-[#3e76ab] rounded-bl-2xl rounded-tr-3xl hidden lg:block ">
      <div className="flex items-center gap-2">
       
          {" "}
          <NavbarRoutes/>
     
      </div>
    </nav>
  );
};

export default Navbar;
