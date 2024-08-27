import React from "react";
import Image from "next/image";
import AvatarImg from "/my-avatar.png";
import { Name, Occupation } from "../lib/resume";
import { cn } from "../lib/utils";
interface AvatarProps{
  widthManager: boolean;
}

const Avatar = ({widthManager}:AvatarProps) => {
  return (
    <div className={cn("m-5   flex flex-row lg:flex-col items-center justify-center gap-4",widthManager&&"m-0")}>
      <div className=" rounded-3xl  shadow-2xl icon-box  transform hover:translate-y-1 hover:shadow-xl transition ease-in-out duration-300 bg-[#1a3d5e]">
        {" "}
       {
        widthManager ? <> <Image src="/my-avatar.png" alt="avatar" width={50} height={50} /></>: <> <Image src="/my-avatar.png" alt="avatar" width={150} height={150} /></>

       }
      </div>

      <div className="space-y-3">
        <p className={cn("text-white font-bold text-2xl",widthManager&&"text-xs ml-2")}>{Name}</p>
        <p className={cn("text-white  text-sm bg-[#274b6c] text-center p-1 px-0 rounded-lg",widthManager&&"text-[5px] ml-1")}>
          {Occupation}
        </p>
      </div>
    </div>
  );
};

export default Avatar;
