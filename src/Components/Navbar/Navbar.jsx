import ButtonGrandient from "../shared/Buttons/ButtonGrandient";
import Logo from "../shared/Logo";
import DrawerNavigation from "../shared/drawer/Drawer";
import DarkModeToggle from "../shared/DarkModeToggle/DarkModeToggle";
import { navItems } from "../../data/data";
import { scrollToSection } from "../../utils/functions";

const Navbar = () => {
  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 flex justify-between px-3 sm:px-10 md:px-5 lg:px-20 gap-5 items-center py-2 ${
        window.scrollY > 300 ? "bg-[#e9eeff] dark:bg-gray-800" : "dark:bg-transparent bg-translate"
      } transition-colors duration-1000`}
    >
      <Logo link={"home"} />

      <ul className="md:hidden lg:flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg sm:gap-5 md:gap-5 lg:gap-10 md:flex-row md:mt-0 md:border-0 hidden ">
        {navItems.map(({ id, label }) => (
          <li key={label}>
            <p onClick={() => scrollToSection(id)} className={`block rounded cursor-pointer`}>
              {label}
            </p>
          </li>
        ))}
      </ul>
      <div className="flex gap-5 items-center justify-center h-full ">
        <ButtonGrandient id={"contactanos"} text={"Contactanos"} />
        <DarkModeToggle />
        <DrawerNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
