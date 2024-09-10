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
        className={`min-h-screen bg-gradient-to-bl from-BlueNeurons/50 via-[#e9eeffe2]  to-[#e9eeff] dark:from-dark-BlueNeurons/20 dark:via-gray-800/90 dark:to-gray-800 flex flex-col gap-5 sm:gap-10 justify-center sm:justify-center items-center relative`}
      >
        <TextEffect />

        <TextPrincipal />
        <SubTitle
          text={
            "Enfrentamos cada desafío con un toque fresco y creativo. Nuestra capacidad para adaptarnos y nuestra pasión por la innovación nos permiten ofrecerte soluciones digitales personalizadas que no solo cumplen, sino que superan tus expectativas."
          }
          extra={"w-[90%] sm:w-2/4 text-center hidden sm:flex"}
        />
        <ButtonsSection />
      </section>
    </Inspector>
  );
}

export default Header;
