import Image from "next/image";
import React from "react";
import logo from "../../public/svg/blott-logo.svg";
import Link from "next/link";

const Header = () => {
  const key = process.env.API_KEY;
  console.log(key);
  return (
    <div className="w-full  border-b-[0.5px] border-b-[#272735] py-5 md:p-0 md:border-none  bg-[#0E0D13] sticky top-0 z-50 md:h-25 flex items-center">
      <Link
        href={"/"}
        className="w-[121px] h-[30px] md:w-[200px] md:h-[50px]  flex items-center justify-center  mx-auto"
      >
        <Image
          src={logo}
          alt="blott  logo"
          className="w-full h-full flex justify-center"
        />
      </Link>
    </div>
  );
};

export default Header;
