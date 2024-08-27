import React, { useState } from "react";
import Link from "next/link";
import { CodeXml, Eye } from "lucide-react";
import { usePathname } from "next/navigation";
import Tilt from "react-parallax-tilt";
interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
  id: number;
}

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  id,
}: ProjectCardProps) => {
  const pathName = usePathname();

  return (

      <div title="click for more info">
        <Link href={`/projects/${id}`}>
   
        <div
          className={`h-52 rounded-xl relative group overflow-hidden border cursor-pointer border-[#ffcd67] transform hover:translate-y-1 hover:shadow-xl transition ease-in-out duration-300`}
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        </div>
       
        </Link>
            <Tilt
            glareEnable
            tiltEnable
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            glareColor="#aaa6c3"
          >
        <div className="text-[#ffcd67] rounded-b-xl mt-2 bg-[#181818] icon-box py-6 px-4 h-36 transform hover:translate-y-1 hover:shadow-xl transition ease-in-out duration-300">
          <h5 className="text-md font-semibold mb-2">{title}</h5>
          <p
            className={`text-slate-300 line-clamp-2 }`}
          >
            {description}
          </p>
        </div>
        </Tilt>
      </div>
  
  );
};

export default ProjectCard;
