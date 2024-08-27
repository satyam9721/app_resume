"use client"
import { BookOpenText, Briefcase } from 'lucide-react';
import React from 'react';
import { educationData, experienceData } from '../lib/resume';
import { motion } from "framer-motion";

const iconVariants = {
  initial: { scale: 1, opacity: 1 },
  hover: { scale: 1.2, transition: { duration: 0.3 } },
  tap: { scale: 0.9, transition: { duration: 0.2 } },
};

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Resume = () => {
  return (
    <article className="resume">
      <section className="timeline">
        <div className="title-wrapper">
          <motion.div
            className='icon-box ml-[-8px] text-[#ffcd67] shadow-2xl  bg-[#373737] p-3 rounded-xl'
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <Briefcase />
          </motion.div>
          <h3 className="text-xl font-semibold text-[#ffcd67]">Experience</h3>
        </div>

        <motion.ol 
          className="timeline-list"
          initial="hidden"
          animate="visible"
          variants={listVariants}
        >
          {experienceData.map((item, index) => (
            <motion.li 
              className="timeline-item" 
              key={index}
              variants={itemVariants}
            >
               <span className='text-lg font-bold text-[#fdd178]'>{item.companyName}</span>
              <h3 className="h3 timeline-item-title"> {item.title}</h3>
              <span>{item.duration}</span>
              <p className="timeline-text">{item.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <motion.div
            className='icon-box ml-[-8px] text-[#ffcd67] shadow-2xl  bg-[#373737] p-3 rounded-xl'
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <BookOpenText />
          </motion.div>
          <h3 className="text-xl font-semibold text-[#ffcd67]">Education</h3>
        </div>

        <motion.ol 
          className="timeline-list"
          initial="hidden"
          animate="visible"
          variants={listVariants}
        >
          {educationData.map((item, index) => (
            <motion.li 
              className="timeline-item" 
              key={index}
              variants={itemVariants}
            >
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.duration}</span>
              <p className="timeline-text">{item.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </section>
    </article>
  );
};

export default Resume;
