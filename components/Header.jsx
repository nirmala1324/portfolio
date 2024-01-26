"use client";

import React, { useState, useEffect } from "react";

// Components
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeToggler from "./ThemeToggler";
import { usePathname } from "next/navigation";

const Header = () => {
  // set the initial value (useState) of 'header' = false | 'setHeader' as the update function
  const [header, setHeader] = useState(false); 
  const pathname = usePathname();

  useEffect(() => {
    // Event Listener: Listen for scroll event on the window
    const scrollYPos = window.addEventListener("scroll", () => {
      // Ternary (Conditional): Check if the vertical scroll position on window is greater than 50px
      // True: set header value as 'true' else False: set header value as 'false'
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // Remove Event (Clean Up): Remove the scroll event listener when the component is unmounted or on next render
    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header
      className={`${
        header // Check if the header is True or False (truthy)
          ? "py-4 bg-white shadow-lg dark:bg-accent" // The header is True: add the list of className as stated
          : "py-6 dark:bg-transparent" // The header is False: add the list of className as stated
      } sticky top-0 z-30 transition-all  ${pathname === '/' && 'bg-[#fef9f5]'}`} // Stick the header ar the top of viewport with specific z-index and transition
      // If the pathname is equal to '/', then add bg-[#fef9f5] to className
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* Nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"                 //
              linkStyles="relative hover:text-primary transition-all"               // Set the parameter value as the additional style
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"  //
            />
            <ThemeToggler />
            {/* Mobile Nav */}
            <div className="xl:hidden">
              <MobileNav /> {/* This is Nav in mobile phone (responsive to mobile phone) */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
