"use client";
import React from "react";
import { SkillsData } from "../lib/resume";
import { motion } from "framer-motion";
const Skill = () => {
  const iconVariants = {
    initial: { scale: 1, opacity: 1 },
    hover: { scale: 1.2, transition: { duration: 0.3 } },
    tap: { scale: 0.9, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="my-3"
    >
      <h1 className="text-2xl font-bold text-white mt-2">Skills</h1>
      <ul className="grid lg:grid-cols-6 m-5 grid-cols-3 gap-5 md:gap-4">
        {SkillsData.map((skill, index) => {
          return (
            <li
              key={index}
              className="icon-box relative rounded-xl overflow-hidden flex flex-col items-center m-2 w-24 h-24 border-2 cursor-pointer border-[#ffcd67] p-4 transform hover:translate-y-1 hover:shadow-xl transition ease-in-out duration-300"
            >
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className=" object-cover rounded-md"
                  loading="lazy"
                />
              </motion.div>

              <span className="absolute bottom-0 left-0 right-0 bg-[#163a5c] text-white text-center text-md px-1 lg:text-[14px]">
                {skill.name}
              </span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Skill;
