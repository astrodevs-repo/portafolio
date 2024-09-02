import { scrollToSection } from "../../../utils/functions";
import ButtonSimple from "../../shared/Buttons/ButtonSimple";
import arrow from "/public/arrow.svg";

const ButtonsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2 sm:gap-10">
      <a className="flex justify-center w-full">
        <ButtonSimple
          textColor={"text-blackCeniza  "}
          text={"Nuestros Servicios"}
          img={arrow}
          func={() => scrollToSection("quienessomos")}
          bg={"border-2 border-[#89b8ffee] dark:border-[#e9eeff] "}
          extra={
            "hover:shadow-2xl  hover:shadow-[#89b8ffee] dark:hover:shadow-[#001f3fa0] w-full min-w-60"
          }
        />
      </a>
      <a className="flex justify-center w-full ">
        <ButtonSimple
          textColor={"text-blackCeniza"}
          text={"Quienes somos"}
          img={arrow}
          bg={"border-2 border-[#89b8ffee] dark:border-[#e9eeff]  "}
          func={() => scrollToSection("aboutus")}
          extra={
            "hover:shadow-2xl  hover:shadow-[#89b8ffee] dark:hover:shadow-[#001f3fa0] w-full min-w-60 flex justify-center gap-10"
          }
        />
      </a>
    </section>
  );
};

export default ButtonsSection;
