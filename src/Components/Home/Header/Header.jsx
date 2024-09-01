import Inspector from "../../shared/Inspector/Inspector";
import TextEffect from "./TextEffect";
import TextPrincipal from "./TextPrincipal";
import ButtonsSection from "./ButtonsSection";
import SubTitle from "../../shared/SubTitle";

function Header({ index, onObserver }) {
  return (
    <Inspector index={index} onObserver={onObserver}>
      <section
        id="home"
        className={`min-h-screen bg-gradient-to-bl from-[#89b8ffe8] via-[#e9eeffe2]  to-[#e9eeff] dark:from-[#001f3fd7] dark:via-[#266cb3dd] dark:to-[#7f7fcc68] flex flex-col gap-5 sm:gap-10 justify-center sm:justify-center items-center relative`}
      >
        <TextEffect />

        <TextPrincipal />
        <SubTitle
          text={
            "Nuestra flexibilidad y adaptabilidad nos permiten convertir cada desafío en una estrategia personalizada que se alinea con tus objetivos empresariales, asegurando soluciones eficaces y a medida."
          }
          extra={"w-[90%] sm:w-2/4 text-center hidden sm:flex"}
        />
        <ButtonsSection />
      </section>
    </Inspector>
  );
}

export default Header;
