import React from "react";
import MenuItem from "./MenuItem";
import { MdHome } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import Link from "next/link";
import ThemeChanges from "@/ThemeChanges";

const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto gap-1 p-3 ">
      <div className="flex gap-4">
        <MenuItem title="Home" address="/" Icon={MdHome} />
        <MenuItem address="/about" title="About" Icon={MdSettings} />
      </div>
      <div className="flex item-center justify-between">
        <ThemeChanges />
        <Link href="/home" className="flex gap-2 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDB
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
