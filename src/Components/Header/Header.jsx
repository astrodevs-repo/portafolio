import s from "./header.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowRight } from "react-icons/fa";
import ButtonSimple from "../shared/Buttons/ButtonSimple";

function Header() {
  useGSAP(() => {
    gsap.fromTo(
      "main #img",
      { opacity: 1 },
      {
        opacity: 0,
        ease: "power4.in",
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom",
          scrub: true,
        },
      }
    );
  });

  return (
    <section id="home" className={`${s.header__container} `}>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white">
        Nosotros somos{" "}
        <strong className="bg-gradient-to-r from-[#694fff] to-[#0baeb6] text-transparent bg-clip-text">
          Neurons
        </strong>
      </h1>
      <h4 className="w-1/2 text-center py-5 text-2xl text-gray-500 ">
        ¡Bienvenidos a Neurons ! No somos solo una agencia de desarrollo web; somos una firma
        integral de soluciones digitales...
      </h4>
      <div className="flex justify-center gap-10 py-10">
        <ButtonSimple text={"leer más"} />
        <ButtonSimple text={"leer más"} />
      </div>
    </section>
  );
}

export default Header;
