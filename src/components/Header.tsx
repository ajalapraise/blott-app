import Image from "next/image";
import React from "react";
import logo from "../../public/svg/blott-logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <Link
      href={"/"}
      className="w-[121px] h-[21px] md:w-[200px] md:h-[50px]  flex items-center justify-center  mx-auto "
    >
      <Image
        src={logo}
        alt="blott  logo"
        className="w-full h-full flex justify-center"
      />
    </Link>
  );
};

export default Header;
