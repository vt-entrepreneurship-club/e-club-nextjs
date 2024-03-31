"use client";

import logo from "../assets/logo.png";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname != "/vw") {
      const html = document.querySelector("html");
      html?.setAttribute("data-theme", "dark");
    }
  }, [pathname]);

  if (isMobile) {
    return (
      <div className="navbar mb-10 w-full">
        <div className="w-full">
          <Link href="/">
            <Image
              className="inline"
              id="logo"
              src={logo}
              alt="Entreprenership Club"
              width={"130"}
            />
          </Link>
        </div>
        <details className="dropdown dropdown-end">
          <summary className="btn btn-ghost float-right m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block size-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </summary>
          <ul className="menu dropdown-content rounded-box float-right mt-10 bg-base-100 shadow">
            <li>
              <Link className="float-right text-right" href="/leadership">
                Leadership
              </Link>
            </li>
            <li>
              <Link className="font-semibold" href="/events">
                Events
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-secondary " href="/vw">
                Venture Weekend
              </Link>
            </li>
          </ul>
        </details>
      </div>
    );
  } else {
    return (
      <div className="navbar mx-auto mb-10 w-11/12 p-2 pb-6">
        <Link href="/">
          <Image className="w-1/3" id="logo" src={logo} alt="" />
        </Link>

        <div className="lg:float-right">
          <Link className="ml-20 text-xl" href="/leadership">
            Leadership
          </Link>
          <Link className="ml-20 text-xl" href="/events">
            Events
          </Link>
          <Link
            className="ml-20 text-xl font-semibold text-secondary"
            href="/vw"
          >
            Venture Weekend
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
