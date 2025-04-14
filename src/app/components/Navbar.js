import React from "react";

import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div
      className="flex items-center justify-center bg-amber-100 dark:bg-gray-600
     transition-colors duration-300 gap-6 p-4"
    >
      <NavbarItem title="Trending" param="trending" />
      <NavbarItem title="Top Rated" param="top-rated" />
    </div>
  );
};

export default Navbar;
