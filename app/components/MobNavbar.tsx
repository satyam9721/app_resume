"use client"
import React, { useState } from 'react';
import { usePathname} from 'next/navigation';
import { CircleX, SquareMenu } from 'lucide-react';
import Link from 'next/link';

const NavRoutes = [
  {
    href: "/",
    name: "About",
  },
  {
    href: "/projects",
    name: "Projects",
  },
  {
    href: "/experience",
    name: "Experience",
  },
  {
    href: "/certificates",
    name: "Certificate",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="fixed bottom-4 right-4 z-50">
        {isOpen ? (
          <CircleX className="w-8 block md:hidden h-8 text-[#ffcd67]"/> 
        ) : (
          <SquareMenu className="w-8 block md:hidden h-8 text-[#ffcd67]" />
        )}
      </button>
      <nav
        className={`fixed bottom-0 left-0 right-0 w-full z-10 bg-[#21476b] bg-opacity-75 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        } md:hidden rounded-tl-3xl rounded-tr-3xl`}
      >
        <ul className="flex flex-col gap-3 p-5">
          {NavRoutes.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={`flex items-center justify-center gap-2 ${
                pathName === route.href ? 'text-[#ffcd67]' : 'text-white'
                }`}
                onClick={toggleMenu}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
