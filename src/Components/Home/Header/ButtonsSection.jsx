import ButtonSimple from "../../shared/Buttons/ButtonSimple";
import arrow from "/public/arrow.svg";

const ButtonsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2 sm:gap-10">
      <a href={"#quienessomos"} className="flex justify-center w-full">
        <ButtonSimple
          text={"Nuestros Servicios"}
          img={arrow}
          bg={"bg-[#e9eeff]"}
          extra={"hover:shadow-2xl  hover:shadow-[#89b8ffee] dark:hover:shadow-[#001f3fa0]"}
        />
      </a>
      <a href={"#aboutus"} className="flex justify-center w-full">
        <ButtonSimple
          text={"Quienes somos"}
          img={arrow}
          bg={"bg-[#e9eeff]"}
          extra={"hover:shadow-2xl  hover:shadow-[#89b8ffee] dark:hover:shadow-[#001f3fa0]"}
        />
      </a>
    </section>
  );
};

export default ButtonsSection;
