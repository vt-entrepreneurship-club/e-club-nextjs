"use client";

import logo from "../public/logo.svg"
import Link from "next/link";
import { isMobile } from "react-device-detect";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();

  const LINK = [
    {
      name: "About",
      href: "/about"
    },
    {
      name: "Team",
      href: "/team"
    },
    {
      name: "Advisors",
      href: "/advisors"
    },
    {
      name: "Startup Sprint",
      href: "/ss/25"
    }
  ]
  return (
    <nav className="fixed top-3 left-0 right-0 z-100 p-4 px-6 w-3/4 mx-auto backdrop-blur-md bg-transparent border border-white/30 rounded-full">
      <div className="relative w-full h-full mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src={logo} 
            alt="E-Club Logo" 
            width={120} 
            height={40} 
            className="h-8 w-auto"
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {LINK.map((link) => (
            <Link href={link.href} className="text-white transition-colors font-medium" key={link.name}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar; 