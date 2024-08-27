"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { ArrowBigLeftDash, ArrowBigRightDash, PanelTopClose, PanelTopOpen } from "lucide-react";
import Avatar from "./Avatar";
import Connect from "./Connect";
import Link from "next/link"
const SideBar = () => {
  const [collapse, setCollapse] = useState(false);
  const [mobCollapse, setMobCollapse] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Define breakpoint for mobile view
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  const handleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  const handleMobCollapse = () => {
    setMobCollapse((prev) => !prev);
  };

  return (
    <motion.div
      animate={{
        width: collapse ? "5rem" : isMobile ? "92vw" : "18rem", // Adjust these values as needed
        height: mobCollapse ? "480px" : "100%",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={cn(
        "sidebar rounded-3xl bg-[#21476b] w-full border border-[#3e76ab] md:p-4 lg:block hover:shadow-[#ffcd67] cursor-pointer shadow-2xl relative",
        collapse && "md:w-20",
        mobCollapse ? "h-86" : "h-full"
      )}
    >
      <Avatar widthManager={collapse}/>
      <div className="absolute -right-3 top-14 hidden lg:block text-[#ffcd67]">
        {collapse ? (
          <ArrowBigRightDash onClick={handleCollapse} />
        ) : (
          <ArrowBigLeftDash onClick={handleCollapse} />
        )}
      </div>

      <div className="absolute right-3 top-1 block m-2 lg:hidden text-[#ffcd67]">
        {mobCollapse ? (
          <PanelTopClose onClick={handleMobCollapse} />
        ) : (
          <PanelTopOpen onClick={handleMobCollapse} />
        )}
      </div>

      <motion.div
        animate={{ opacity: mobCollapse ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={cn(mobCollapse ? "block px-5 md:hidden" : "hidden")}
      >
        <Connect  />
      </motion.div>
      <div className={cn("hidden", { "md:block": !mobCollapse })}>
        <Connect widthManager={collapse}/>
        {!collapse &&<Link href="/websiteinfo" className="text-[#ffcd67] text-xs">website info</Link>}
      </div>
    
    </motion.div>
  );
};

export default SideBar;
