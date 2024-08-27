"use client"
import React from "react";
import { contacts, socialMediaLinks } from "../lib/resume";
import Link from "next/link";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
interface ConnectProps {
  widthManager?: boolean;
}

const Connect = ({ widthManager }: ConnectProps) => {
  const iconVariants = {
    initial: { scale: 1, opacity: 1 },
    hover: { scale: 1.2, transition: { duration: 0.3 } },
    tap: { scale: 0.9, transition: { duration: 0.2 } },
  };
  
  return (
    <div className={cn("sidebar-info_more md:m-5 lg:flex lg:flex-col items-center justify-center gap-4", widthManager && "md:m-0")}>
      <div className="w-full h-px bg-[#333333] my-4"></div>

      <ul className={cn("contacts-list grid grid-cols-1 gap-4")}>
        {contacts.map((contact, index) => (
          <li key={index} className="contact-item flex items-center gap-4 group">
              
            <motion.div
            className='icon-box ml-[-8px] text-[#ffcd67] shadow-2xl  bg-[#373737] p-3 rounded-xl'
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
              {contact.icon}
              </motion.div>
     
            <div className="relative">
              <div className={cn(
                "contact-info w-[calc(100%-46px)] transition-transform duration-500",
                widthManager && "group-hover:transform group-hover:rotateY-15 group-hover:scale-105 group-hover:opacity-100"
              )}>
                <p className={cn(
                  "contact-title text-gray-400 text-xs uppercase mb-1 transition-opacity duration-300",
                  widthManager ? "opacity-0 group-hover:opacity-100 " : "opacity-100"
                )}>
                  {contact.type}
                </p>
                {contact.href ? (
                  <Link href={contact.href} className={cn(
                    "contact-link text-white text-sm transition-opacity duration-300",
                    widthManager ? "opacity-0 group-hover:opacity-100 " : "opacity-100"
                  )}>
                    {contact.value}
                  </Link>
                ) : contact.datetime ? (
                  <time dateTime={contact.datetime} className={cn(
                    "text-white text-sm transition-opacity duration-300",
                    widthManager ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                  )}>
                    {contact.value}
                  </time>
                ) : (
                  <span className={cn(
                    "text-white text-sm transition-opacity duration-300",
                    widthManager ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                  )}>
                    {contact.value}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="w-full h-px bg-[#333333] my-4"></div>
      <ul className={cn("social-list flex justify-start items-center gap-4 pb-1 pl-2", widthManager && "flex-col mr-1")}>
        {socialMediaLinks.map((social, index) => (
          <li key={index} className="social-item">
            <Link
              href={social.url}
              target="_blank"
              className="social-link text-gray-400 text-xl hover:text-gray-300 transform transition-transform duration-200 relative before:absolute before:inset-0 before:bg-inherit before:rounded-full before:transform before:scale-100 before:transition before:duration-200 before:shadow-lg hover:before:scale-110 hover:before:shadow-xl hover:-translate-y-1 "
              aria-label={social.name} 
            >
             
              {social.icon}


            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Connect;
