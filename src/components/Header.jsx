import React from "react";
import { logo } from "../assets";
import { NAV_LINKS } from "../constants";

const Header = () => {
  return (
    <header className="flex border px-32 items-center py-7 justify-between">
      <img src={logo} alt="hoobank" className="w-32 h-15" />
      <nav className="flex gap-10 ">
        {NAV_LINKS.map((item) => (
          <a key={item.id} className="text-grey hover:text-white">
            {item.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
