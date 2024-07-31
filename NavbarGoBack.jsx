import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import Text from "./src/Components/shared/Text";
import DarkModeToggle from "./src/Components/shared/DarkModeToggle/DarkModeToggle";
const NavbarGoBack = () => {
  return (
    <section className="py-5 px-5 flex bg-blackCeniza justify-between ">
      <section className="flex justify-start items-center gap-5 text-[106px]">
        <section>
          <Link to={"/"} className="cursor-pointer">
            <MdKeyboardArrowLeft size={20} className="text-white" />
          </Link>
        </section>
        <Link to={"/"} className="cursor-pointer">
          <Text content={"Volver al Inicio"} textColor={"text-white"} />
        </Link>
      </section>
      <DarkModeToggle />
    </section>
  );
};

export default NavbarGoBack;
