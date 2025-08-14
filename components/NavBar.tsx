"use client";

import logo from "../public/logo.svg"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <nav className="fixed top-3 left-0 right-0 z-100 p-4 px-6 w-11/12 md:w-3/4 mx-auto backdrop-blur-lg bg-white/5 border border-white/30 rounded-2xl transition-all duration-300">
      <div className="w-full mx-auto flex justify-between items-center">
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
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/20">
          <div className="flex flex-col items-center space-y-4">
            {LINK.map((link) => (
              <Link href={link.href} className="text-white text-lg font-medium" key={link.name} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar; 