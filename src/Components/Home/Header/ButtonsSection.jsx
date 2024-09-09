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
          bg={"border-2 border-blackCeniza dark:border-[#e9eeff] dark:bg-transparent "}
          extra={" w-full min-w-60"}
        />
      </a>
      <a className="flex justify-center w-full ">
        <ButtonSimple
          textColor={"text-blackCeniza"}
          text={"Quienes somos"}
          img={arrow}
          bg={"border-2 border-blackCeniza dark:border-[#e9eeff] dark:bg-transparent  "}
          func={() => scrollToSection("aboutus")}
          extra={" w-full min-w-60 flex justify-center gap-10"}
        />
      </a>
    </section>
  );
};

export default ButtonsSection;
