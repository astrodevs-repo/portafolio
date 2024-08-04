import Inspector from "../../shared/Inspector/Inspector";
import TextEffect from "./TextEffect";
import TextPrincipal from "./TextPrincipal";
import ButtonsSection from "./ButtonsSection";
import ArrowDown from "./ArrowDown";

function Header({ index, onObserver }) {
  return (
    <Inspector index={index} onObserver={onObserver}>
      <section
        id="home"
        className={`min-h-screen bg-gradient-to-bl from-[#c5fcff] via-[#89b8ffe8] to-[#694fff] dark:from-[#001f3fd7] dark:via-[#266cb3dd] dark:to-[#7f7fcc68] flex flex-col gap-10 justify-center sm:justify-center items-center relative`}
      >
        <TextPrincipal />
        <TextEffect />
        <ButtonsSection />
        <ArrowDown />
      </section>
    </Inspector>
  );
}

export default Header;
