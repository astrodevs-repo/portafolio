import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import Text from "./Text";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";
const NavbarGoBack = () => {
  return (
    <section className="py-5 px-5 sm:px-20 flex bg-[#e9eeff] dark:bg-gray-800 justify-between ">
      <section className="flex justify-start items-center gap-5 text-[106px]">
        <section>
          <Link to={"/"} className="cursor-pointer">
            <MdKeyboardArrowLeft size={20} className="text-blackCeniza dark:text-white" />
          </Link>
        </section>
        <Link to={"/"} className="cursor-pointer">
          <Text content={"Volver al Inicio"} textColor={"text-blackCeniza"} />
        </Link>
      </section>
      <DarkModeToggle />
    </section>
  );
};

export default NavbarGoBack;
