"use client"
import React, { useState } from "react";
import Link from "next/link";
import { CodeXml, Eye } from "lucide-react";

import { usePathname } from "next/navigation";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
  id?: number;
}

const SingleProject = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  id,
}: ProjectCardProps) => {
  const pathName = usePathname();
  const pathStatus = pathName.startsWith("/certificates")

  return (
    <div>
      <div
        className={`h-52 w-full  md:h-[500px] rounded-xl relative group  overflow-hidden  border cursor-pointer border-[#ffcd67]  transform hover:translate-y-1 hover:shadow-xl transition ease-in-out duration-300`}
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "cover", // Center the background image
        }}
        
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full overflow-hidden  h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
         
         {
          !pathStatus && <Link
          href={gitUrl}
          className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          target="_blank"
        >
          <CodeXml className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
        </Link>
         }
          
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <Eye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-[#ffcd67] rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-md font-semibold mb-2">{title}</h5>
        <p className={`text-slate-300 `}>{description}</p>
      </div>
    </div>
  );
};

export default SingleProject;
