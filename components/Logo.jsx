import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();

  // Set variable for dark and light logo
  const lightModeLogo = "/Logo.svg";
  const darkModeLogo = "/Logo_dark.svg";

  // If statement fot logo for each mode
  const logoSrc = theme === "dark" ? darkModeLogo : lightModeLogo;

  return (
    <Link href="/">
      <Image
        src={logoSrc}
        width={120}
        height={120}
        priority
        alt=""
        className="xl:w-auto; h-auto"
      />
    </Link>
  );
};

export default Logo;
