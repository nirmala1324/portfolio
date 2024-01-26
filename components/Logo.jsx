import Link from "next/link";
import Image from "next/image";

import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" width={120} height={120} priority alt="" className="xl:w-auto; h-auto" />
    </Link>
  );
};

export default Logo;
