"use client"
import { AboutMe } from "../lib/resume";
import Skills from "../components/Skills";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
export default function Home() {
  return (
   
    <main className="">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="my-3"
        
        >
           <h2 className={` text-white text-2xl font-bold`}>
            Hi, I&apos;m <span className="text-[#ffcd67]">
            <TypeAnimation
              sequence={[
               
                1000,
                "Web Developer",
                1000,
                "Frontend Developer",
                1000,
                "React ,Next js Developer",
                1000,
                "FullStack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
           
            />
            
            </span>
          </h2>
          <p className="text-slate-300 mt-3 ">
        {AboutMe}
       
      </p>
        </motion.div>
         

     
      <Skills/>
    </main>
  );
}
