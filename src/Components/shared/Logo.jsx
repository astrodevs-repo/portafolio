import React from "react";
import { scrollToSection } from "../../utils/functions";
import logo from "/public/logo.webp";
const Logo = React.memo(function Logo({ link }) {
  return (
    <img
      src={logo}
      alt=""
      onClick={() => scrollToSection(link)}
      className="p-2 cursor-pointer"
      loading="lazy"
      width={60}
      height={60}
    />
  );
});

export default Logo;
