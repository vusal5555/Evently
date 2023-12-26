import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-2">
      <div className="flex-center wrapper flex-between flex flex-col md:flex-row gap-4 p-5 text-center">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          ></Image>
        </Link>
        <p>2023 Evently. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
