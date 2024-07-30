import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import Text from "./src/Components/shared/Text";
const NavbarGoBack = () => {
  return (
    <section className="py-5 px-5 ">
      <section className="flex justify-start items-center gap-5 text-[106px]">
        <section>
          <Link to={"/"} className="cursor-pointer">
            <MdKeyboardArrowLeft size={20} />
          </Link>
        </section>
        <Link to={"/"} className="cursor-pointer">
          <Text content={"Volver al Inicio"} />
        </Link>
      </section>
    </section>
  );
};

export default NavbarGoBack;
