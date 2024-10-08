import { scrollToSection } from "../../../utils/functions";
import ButtonSimple from "../../shared/Buttons/ButtonSimple";

const ButtonsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2 sm:gap-10">
      <ButtonSimple
        textColor={"text-blackCeniza  "}
        text={"Nuestros Servicios"}
        func={() => scrollToSection("quienessomos")}
        bg={"border-2 border-blackCeniza dark:border-[#e9eeff] dark:bg-transparent "}
        extra={" w-full min-w-60"}
      />

      <ButtonSimple
        textColor={"text-blackCeniza"}
        text={"Quienes somos"}
        bg={"border-2 border-blackCeniza dark:border-[#e9eeff] dark:bg-transparent  "}
        func={() => scrollToSection("aboutus")}
        extra={" w-full min-w-60 flex justify-center gap-10"}
      />
    </section>
  );
};

export default ButtonsSection;
