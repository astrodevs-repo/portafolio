import React, { lazy, Suspense, useEffect, useState } from "react";
import { navItems } from "../../data/data";
import { scrollToSection } from "../../utils/functions";
import SkeletonText from "../shared/Skeleton/Text";

const Logo = lazy(() => import("../shared/Logo"));
const TextNavbar = lazy(() => import("../shared/TextNavBar"));
const ButtonGrandient = lazy(() => import("../shared/Buttons/ButtonGrandient"));
const DrawerNavigation = lazy(() => import("../shared/drawer/Drawer"));
const DarkModeToggle = lazy(() => import("../shared/DarkModeToggle/DarkModeToggle"));

const Navbar = React.memo(function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 flex justify-between px-3 sm:px-10 md:px-5 lg:px-20 gap-5 items-center py-2 transition-colors duration-300 ${
        isScrolled ? "bg-[#e9eeff] dark:bg-gray-800" : "bg-transparent"
      }`}
    >
      <Suspense fallback={<section className="w-10 h-10 rounded-full bg-BlueNeurons"></section>}>
        <Logo link={"home"} />
      </Suspense>
      <Suspense fallback={<SkeletonText height={"h-2"} width={"w-10"} extra={"hidden sm:flex"} />}>
        <ul className="md:hidden lg:flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg sm:gap-5 md:gap-5 lg:gap-10 md:flex-row md:mt-0 md:border-0 hidden">
          {navItems.map(({ id, label }) => (
            <TextNavbar key={label} content={label} func={() => scrollToSection(id)} />
          ))}
        </ul>
      </Suspense>
      <Suspense fallback={<SkeletonText height={"h-5"} width={"w-10"} extra={"rounded-xl"} />}>
        <section className="flex gap-5 items-center justify-center h-full">
          <ButtonGrandient id={"contactanos"} text={"Contactanos"} />
          <DarkModeToggle />

          <DrawerNavigation />
        </section>
      </Suspense>
    </nav>
  );
});

export default Navbar;
